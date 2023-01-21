import * as React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import {
	BaseComponent,
	LocationSceneWithRedux,
	MoreSceneWithRedux,
	LocationPermissionHOC,
	LocationPermissionScene,
	RichMessagesSceneWithRedux,
	SSOWebOrderSceneWithRedux,
	sharedGRP
} from 'react-native-punchh-components';
import { VoiceOverUtils } from '#Utils';
import { connect } from 'react-redux';
import { RewardScene } from '../Scenes';
import { BackgroundHOC } from '@Common';

const { width } = Dimensions.get('window');

const TabColors = () => {
	return {
		activeColor: sharedGRP.theme.Colors.TAB_ITEMS_ACTIVE_COLOR,
		inactiveColor: sharedGRP.theme.Colors.TAB_ITEMS_INACTIVE_COLOR,
		tabColor: sharedGRP.theme.Colors.TAB_BAR_COLOR
	};
};

class TabBarView extends BaseComponent {
	render() {
		const { state } = this.props;
		const focusedRoute = state.routes[state.index];
		const focusedDescriptor = this.props.descriptors[focusedRoute.key];
		const shouldShowTabBar = focusedDescriptor.options.tabBarVisible !== false;
		const { Colors } = this.theme();

		const bottomTab = (
			<BottomTabBar
				{...this.props}
				style={[this.props.style, { borderTopColor: 'transparent', backgroundColor: Colors.TAB_BAR_COLOR }]}
			/>
		);

		const extraHeight = this.appConfig().tabBottomSpace();
		let tabUpperViewStyle = {};
		let tabViewContainerStyle = {
			width,
			height: extraHeight,
			backgroundColor: 'transparent',
			overflow: 'hidden'
		};
		switch (this.appConfig().meta.theme.tab) {
			case 'left_tilted':
				tabUpperViewStyle = {
					transform: [{ rotate: '2deg' }],
					marginTop: 15
				};
				tabViewContainerStyle = {};
				break;
			case 'right_tilted':
				tabUpperViewStyle = { transform: [{ rotate: '-2deg' }], marginTop: 15 };
				tabViewContainerStyle = {};
				break;
			case 'round_curve':
				tabUpperViewStyle = { borderRadius: 10, width: '100%', marginLeft: 0, marginBottom: -10 };
				break;
			case 'top_diamond':
				tabUpperViewStyle = {
					marginLeft: 0,
					marginBottom: -0.2,
					backgroundColor: 'transparent',
					borderBottomColor: Colors.TAB_BAR_COLOR,
					borderBottomWidth: extraHeight,
					borderLeftWidth: width / 2,
					borderRightWidth: width / 2,
					borderRadius: 1,
					borderLeftColor: 'transparent',
					borderRightColor: 'transparent',
					borderTopWidth: 0,
					width,
					height: 0
				};
				tabViewContainerStyle = {};
				break;
			case 'top_circle':
				tabUpperViewStyle = {
					borderRadius: width / 2,
					width: 80,
					height: 80,
					borderRadius: 40,
					backgroundColor: Colors.TAB_BAR_COLOR
				};
				tabViewContainerStyle = { ...tabViewContainerStyle, alignItems: 'center' };
				break;
			case 'top_oval':
				tabUpperViewStyle = {
					borderRadius: width / 2,
					width,
					height: width,
					marginLeft: 0,
					marginBottom: -width + extraHeight,
					backgroundColor: Colors.TAB_BAR_COLOR,
					transform: [{ scaleX: 2.25 }]
				};
				tabViewContainerStyle = {
					marginBottom: -0.2
				};
				break;
			case 'round_corner':
				tabUpperViewStyle = {
					borderTopRightRadius: 10,
					borderTopLeftRadius: 10,
					width,
					height: width,
					marginLeft: 0,
					marginBottom: -width + extraHeight,
					backgroundColor: Colors.TAB_BAR_COLOR
				};
				tabViewContainerStyle = {
					marginBottom: -0.2
				};
				break;
			case 'underline':
				tabUpperViewStyle = {
					width,
					height: width,
					marginLeft: 0,
					marginBottom: -width + extraHeight,
					backgroundColor: Colors.TAB_BAR_COLOR
				};
				tabViewContainerStyle = {
					marginBottom: -0.2
				};
				break;
			case 'linear':
			default:
				return bottomTab;
		}
		if (shouldShowTabBar) {
			return (
				<View style={{ marginTop: -extraHeight }}>
					<View style={tabViewContainerStyle}>
						<View
							style={[
								{
									height: extraHeight,
									width: '102%',
									marginBottom: -15,
									backgroundColor: Colors.TAB_BAR_COLOR
								},
								tabUpperViewStyle
							]}
						/>
					</View>
					{bottomTab}
				</View>
			);
		}
		return null;
	}
}

class TabBarIconWithoutRedux extends React.PureComponent {
	render() {
		const { focused, name, badgeCount } = this.props;
		const Images = sharedGRP.images;
		let tintColor = focused ? TabColors().activeColor : TabColors().inactiveColor;
		if (name === BADGE_ON_TAB && !focused && badgeCount > 0) {
			return (
				<View>
					<Image style={[{ tintColor }, Images[name].style]} source={Images[name].source} />
					<View
						style={{
							position: 'absolute',
							right: 0,
							top: 6,
							backgroundColor: 'red',
							borderRadius: 10,
							width: 8,
							height: 8,
							justifyContent: 'center',
							alignItems: 'center'
						}}
					/>
				</View>
			);
		}
		return <Image style={[{ tintColor }, Images[name].style]} source={Images[name].source} />;
	}
}

const BADGE_ON_TAB = 'tab4';

const TabBarIcon = connect(state => ({ badgeCount: state.badgeCount }))(TabBarIconWithoutRedux);

const OrderScene = () => {
	if (!!sharedGRP.config.isNativeOloAvailable && sharedGRP.config.isNativeOloAvailable()) {
		const { OrderNavigator } = require('react-native-punchh-olo');
		return OrderNavigator;
	} else if (!!sharedGRP.config.isWebOloAvailable) {
		return () => <SSOWebOrderSceneWithRedux />;
	} else {
		return () => <View style={{ flex: 1 }} />;
	}
};

const scenes = {
	Stores: LocationPermissionHOC(LocationSceneWithRedux, LocationPermissionScene),
	RewardScene: BackgroundHOC(RewardScene, { type: 'reward' }),
	RichMessageScene: RichMessagesSceneWithRedux,
	MoreScene: BackgroundHOC(MoreSceneWithRedux)
};

const Tab = createBottomTabNavigator();

export default function TabBar() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false
			}}
			tabBarOptions={{
				activeTintColor: sharedGRP.theme.Colors.TAB_ITEMS_ACTIVE_COLOR,
				inactiveTintColor: sharedGRP.theme.Colors.TAB_ITEMS_INACTIVE_COLOR,
				style: {
					backgroundColor: TabColors().tabColor,
					borderTopWidth: 0
				},
				allowFontScaling: false
			}}
			tabBar={props => <TabBarView {...props} />}
			initialRouteName="tab3"
			backBehavior="initialRoute"
			safeAreaInsets
			detachInactiveScreens={false}
		>
			<Tab.Screen
				name="tab1"
				options={{
					tabBarLabel: 'Stores',
					tabBarAccessibilityLabel: VoiceOverUtils.getAccessibilityContentForSelectTab('Stores', '1 of 5'),
					tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="tab1" />
				}}
				component={scenes.Stores}
			/>
			<Tab.Screen
				name="tab2"
				options={{
					tabBarLabel: 'Order',
					tabBarAccessibilityLabel: VoiceOverUtils.getAccessibilityContentForSelectTab('Order', '2 of 5'),
					tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="tab2" />
				}}
				component={OrderScene()}
			/>
			<Tab.Screen
				name="tab3"
				options={{
					tabBarLabel: 'Rewards',
					tabBarAccessibilityLabel: VoiceOverUtils.getAccessibilityContentForSelectTab('Rewards', '3 of 5'),
					tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="tab3" />
				}}
				component={scenes.RewardScene}
			/>
			<Tab.Screen
				name="tab4"
				options={{
					tabBarLabel: 'Inbox',
					tabBarAccessibilityLabel: VoiceOverUtils.getAccessibilityContentForSelectTab('Inbox', '4 of 5'),
					tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="tab4" />
				}}
				component={scenes.RichMessageScene}
			/>
			<Tab.Screen
				name="tab5"
				options={{
					tabBarLabel: 'More',
					tabBarAccessibilityLabel: VoiceOverUtils.getAccessibilityContentForSelectTab('More', '5 of 5'),
					tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="tab5" />
				}}
				component={scenes.MoreScene}
			/>
		</Tab.Navigator>
	);
}
