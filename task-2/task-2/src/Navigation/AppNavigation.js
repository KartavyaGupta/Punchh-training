import * as React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';
import {
	AccountHistorySceneWithRedux,
	BackDisableHOC,
	OnDemandTutorialSceneWithRedux,
	WelcomeSceneWithRedux,
	BankRewardRedemptionSceneWithRedux,
	BaseRedeemableRedemption,
	CommonSignUpWithRedux,
	CongratulationSceneWithRedux,
	CouponCodeSceneWithRedux,
	DonationListScene,
	EnterBarCodeManuallySceneWithRedux,
	FavLocationSceneWithRedux,
	FeedbackSceneWithReduxBackDisable,
	InfoSceneWithRedux,
	InviteFriendSceneWithRedux,
	LocationDetailSceneWithRedux,
	LocationPermissionScene,
	CheckInOnLocationSceneWithRedux,
	LoginSceneWithRedux,
	MigrationFormSceneWithRedux,
	MigrationInfoScene,
	MigrationVerificationSceneWithRedux,
	NeedHelpSceneWithRedux,
	LocationPermissionHOC,
	PointsUnlockRedemptionSceneWithRedux,
	PostRedeemSceneWithRedux,
	LoginHOC,
	ProfileSceneWithRedux,
	ManagePaymentCardSceneWithRedux,
	QRCodeSceneWithRedux,
	RichMessagesSceneWithRedux,
	ScannerSceneWithRedux,
	SignUpSceneWithRedux,
	VerifyDetailSceneWithRedux,
	WebViewScene,
	DealsSceneWithRedux,
	ChallengesSceneWithRedux,
	SSOWebOrderSceneWithRedux,
	EnvironmentListSceneWithRedux,
	CardScannerScene,
	GuestDeletionCombineSceneWithRedux,
	GuestDeletionSeperateSceneWithRedux
} from 'react-native-punchh-components';
import { navigationRef, isReadyRef } from './RootNavigation';
import { CustomStackNavigator } from 'react-native-punchh-components';
import TabBar from './TabBar';
import Scenes from '../Scenes';
import { BackgroundHOC } from '@Common';
import { AppConfig } from '@res';

const Stack = CustomStackNavigator();

const IOS_MODAL_ROUTES = () => {
	let routes = {
		WelcomeScene: true,
		MigrationInfoScene: true,
		CommonSignUp: true,
		VerifyDetailScene: true,
		FavLocationSceneMandatory: true,
		LocationPermissionScene: 'present'
	};

	if (AppConfig.isNativeOloAvailable()) {
		const { OloTransitionConfig } = require('react-native-punchh-olo');
		routes = { ...routes, ...OloTransitionConfig };
	}

	if (AppConfig.isNativeGiftCardAvailable()) {
		const { GiftCardTransitionConfig } = require('react-native-giftcard');
		routes = { ...routes, ...GiftCardTransitionConfig };
	}

	return routes;
};

const appRoutes = {
	WelcomeScene: WelcomeSceneWithRedux,
	TabBar: TabBar,
	OnDemandTutorialScene: withMappedNavigationParams()(BackgroundHOC(OnDemandTutorialSceneWithRedux)),
	MigrationInfoScene: withMappedNavigationParams()(BackgroundHOC(MigrationInfoScene)),
	MigrationFormScene: withMappedNavigationParams()(MigrationFormSceneWithRedux),
	MigrationVerificationScene: withMappedNavigationParams()(BackgroundHOC(MigrationVerificationSceneWithRedux)),
	CommonSignUp: withMappedNavigationParams()(BackgroundHOC(CommonSignUpWithRedux)),
	LoginScene: LoginSceneWithRedux,
	SignUpScene: SignUpSceneWithRedux,
	VerifyDetailScene: BackDisableHOC(VerifyDetailSceneWithRedux),
	FavLocationScene: withMappedNavigationParams()(
		LocationPermissionHOC(FavLocationSceneWithRedux, LocationPermissionScene)
	),
	CheckInOnLocationScene: withMappedNavigationParams()(
		LocationPermissionHOC(CheckInOnLocationSceneWithRedux, LocationPermissionScene)
	),
	DonationListScene: withMappedNavigationParams()(DonationListScene),
	FavLocationSceneMandatory: LocationPermissionHOC(BackDisableHOC(FavLocationSceneWithRedux), LocationPermissionScene),
	LocationPermissionScene: withMappedNavigationParams()(LocationPermissionScene),
	LocationDetailScene: withMappedNavigationParams()(LocationDetailSceneWithRedux),
	QRCodeScene: BackgroundHOC(QRCodeSceneWithRedux),
	CheckInLearnMoreScene: BackgroundHOC(Scenes.WithRedux.CheckInLearnMoreScene),
	ScannerScene: withMappedNavigationParams()(ScannerSceneWithRedux),
	EnterBarCodeManuallyScene: withMappedNavigationParams()(EnterBarCodeManuallySceneWithRedux),
	CongratulationScene: withMappedNavigationParams()(BackgroundHOC(CongratulationSceneWithRedux)),
	FeedbackScene: withMappedNavigationParams()(FeedbackSceneWithReduxBackDisable),
	PostRedeemScene: withMappedNavigationParams()(PostRedeemSceneWithRedux),
	BankRewardRedemptionScene: withMappedNavigationParams()(BankRewardRedemptionSceneWithRedux),
	PointsUnlockRedemptionScene: withMappedNavigationParams()(BackgroundHOC(PointsUnlockRedemptionSceneWithRedux)),
	BaseRedeemableRedemption: withMappedNavigationParams()(BaseRedeemableRedemption),
	ProfileScene: LoginHOC(ProfileSceneWithRedux),
	CouponCodeScene: CouponCodeSceneWithRedux,
	InviteFriendScene: InviteFriendSceneWithRedux,
	AccountHistoryScene: LoginHOC(AccountHistorySceneWithRedux),
	NeedHelpScene: NeedHelpSceneWithRedux,
	InfoScene: withMappedNavigationParams()(InfoSceneWithRedux),
	RichMessagesScene: RichMessagesSceneWithRedux,
	WebViewScene: withMappedNavigationParams()(WebViewScene),
	ManagePaymentCardScene: withMappedNavigationParams()(ManagePaymentCardSceneWithRedux),
	DealsScene: withMappedNavigationParams()(DealsSceneWithRedux),
	ChallengesScene: withMappedNavigationParams()(ChallengesSceneWithRedux),
	SSOWebOrderScene: withMappedNavigationParams()(SSOWebOrderSceneWithRedux),
	EnvironmentListScene: withMappedNavigationParams()(EnvironmentListSceneWithRedux),
	CardScannerScene: withMappedNavigationParams()(CardScannerScene),
	GuestDeletionCombineScene: withMappedNavigationParams()(GuestDeletionCombineSceneWithRedux),
	GuestDeletionSeperateScene: withMappedNavigationParams()(GuestDeletionSeperateSceneWithRedux)
};

const additionalRoutes = () => {
	let routes = appRoutes;

	if (AppConfig.isNativeOloAvailable()) {
		const { OloRoutes } = require('react-native-punchh-olo');
		routes = { ...routes, ...OloRoutes };
	}

	if (AppConfig.isNativeGiftCardAvailable()) {
		const { GiftCardRoutes } = require('react-native-giftcard');
		routes = { ...routes, ...GiftCardRoutes };
	}

	return routes;
};

function AppNavigation() {
	React.useEffect(() => {
		return () => {
			isReadyRef.current = false;
		};
	}, []);
	return (
		<NavigationContainer
			ref={navigationRef}
			onReady={() => {
				isReadyRef.current = true;
			}}
		>
			<Stack.Navigator
				initialRouteName="TabBar"
				screenOptions={({ route }) => ({
					animationEnabled: IOS_MODAL_ROUTES()[route.name] ? false : Platform.OS === 'ios' ? true : false,
					unmountOnBlur: true,
					headerShown: false
				})}
				detachInactiveScreens={false}
			>
				{Object.keys(additionalRoutes()).map(item => (
					<Stack.Screen name={item} component={additionalRoutes()[item]} />
				))}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default AppNavigation;
