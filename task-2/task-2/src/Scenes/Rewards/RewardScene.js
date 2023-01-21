/**
 * Copyright (c) 2017-Present, Punchh, Inc.
 * All rights reserved.
 *
 * @flow
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert, Text, View, Image, SafeAreaView, Platform, NativeModules } from 'react-native';

import { Settings } from 'react-native-fbsdk-next';
import RNQuickFirebase from 'react-native-quick-firebase';
import { AppDelegate } from '@punchh/react-native-punchh-components';

import {
	Actions,
	ActiveRedemptionWithRedux,
	BaseScene,
	InfoText,
	FAB,
	RewardListSceneWithRedux,
	LoyaltyHelper,
	LazyLoad,
	NavigationEvents,
	PunchhNativeComm,
	VoiceOverUtils,
	DeviceHelper,
	EmailVerificationHelper
} from 'react-native-punchh-components';

import MeterComponent from './MeterComponent';

class RewardScene extends BaseScene {
	focusVoiceOverItem() {
		setTimeout(() => {
			if (!!this.headerTitle) {
				VoiceOverUtils.setAccessibilityFocusTo(this.headerTitle);
			}
		}, 500);
	}

	requestATTPermission() {
		if (DeviceHelper.isIOSVersion14() && !!this.props.isLogin) {
			PunchhNativeComm.getTrackingStatus().then(async status => {
				const updatedStatus = status != 'authorized' && (await PunchhNativeComm.requestTrackingPermission());
				if (status === 'authorized' || updatedStatus === 'authorized') {
					RNQuickFirebase.setAnalyticsEnabled(true);
					Settings.setAdvertiserTrackingEnabled(true).then(() => {
						Settings.initializeSDK();
					});
				}
			});
		}
	}

	requestAndroidNotificationPermission() {
		if (Platform.OS === 'android' && Platform.Version >= 33 && !!this.props.isLogin) {
			NativeModules.PunchhNativeComm.createNotificationChannel();
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.isLogin != prevProps.isLogin) {
			this.requestATTPermission();
			this.requestAndroidNotificationPermission();
		}
	}

	componentDidMount() {
		this.focusVoiceOverItem();
		this.fetchLoyalty(true);
		this.requestATTPermission();
		this.removeOnBecomeActive = AppDelegate.shared.onBecomeActive(this.onBecomeActive.bind(this));
		this.requestAndroidNotificationPermission();
	}

	componentWillUnmount() {
		this.removeOnBecomeActive();
	}

	onBecomeActive() {
		if (Platform.OS === 'android' && Platform.Version >= 33 && !!this.props.isLogin) {
			UserManager.syncPNInfo(this.props.userData, this.appConfig('PROFILE_HAS_MARKETING_SUBSCRIPTION_TOGGLE'))
				.then(data => {
					!!data && this.props.setUserData(data);
				})
				.catch(() => {});
		}
	}

	onWillFocus() {
		this.focusVoiceOverItem();
	}

	fetchLoyalty(showSpinner = true, cb = () => {}) {
		if (this.props.isLogin) {
			showSpinner && this.showSpinner();
			this.props.fetchLoyalty((_, err) => {
				cb();
				this.showSpinner(false);
				if (!!err) {
					this.handleError(err);
				}
			});
		} else {
			cb();
		}
	}

	handleEmailVerificationResponse(isEarn, isSuccess, response) {
		if (isSuccess) {
			this.showSpinner(false);
			this.showOKAlert(
				this.ls('sentVerifyEmailTitle'),
				this.ls('sentVerifyEmailMessage').sformat(
					isEarn ? this.ls('emailVerifyCheckin') : this.ls('emailVerifyRedemption'),
					this.props.userData.communicable_email
				)
			);
		} else {
			this.handleError(response);
		}
	}

	sendVerifyEmail(isEarn) {
		this.showSpinner(true);
		EmailVerificationHelper.verifyEmail((isSuccess, response) =>
			this.handleEmailVerificationResponse(isEarn, isSuccess, response)
		);
	}

	checkUserEmailVerified(isEarn, cb) {
		if (this.props.isLogin) {
			this.showSpinner(true);
			EmailVerificationHelper.isUserEmailVerified(isEarn, (isSuccess, response) => {
				this.showSpinner(false);
				if (isSuccess) {
					!!response && this.props.setUserData(response);
					cb(true);
				} else {
					this.showOKAlert(
						this.ls('verifyEmailTitle'),
						this.ls('verifyEmailMessage').sformat(
							isEarn ? this.ls('emailVerifyCheckin') : this.ls('emailVerifyRedemption')
						),
						() => this.sendVerifyEmail(isEarn)
					);
					cb(false);
				}
			});
		} else {
			cb(true);
		}
	}

	fabButtonOnPress() {
		switch (this.appConfig().meta.rewards_program) {
			case 'banked_currency':
				if (this.props.bankedRewards > 0) {
					this.navigate('BankRewardRedemptionScene');
				} else {
					Alert.alert('Alert', 'You do not have enough balance to redeem.', [
						{
							text: this.ls('ok')
						}
					]);
				}
				break;
			case 'points_unlock':
				this.navigate('PointsUnlockRedemptionScene');
				break;
			default:
				return;
		}
	}

	renderHeader(styles) {
		if (this.appConfig().isBrandLogoBarRequired()) {
			return (
				<View
					accessible={true}
					style={styles.appLogoViewStyle}
					ref={o => (this.headerTitle = o)}
					accessibilityLabel={VoiceOverUtils.getAccessibilityContentForImage(this.ls('accessibility_rewardHeaderText'))}
				>
					<Image source={this.appImages('logo').source} style={styles.appLogoStyle} />
				</View>
			);
		}
	}

	renderSwipeUpText(styles) {
		if (this.props.isLogin && this.props.userRewards > 0) {
			return <InfoText style={styles.swipeUpTextStyle} label={'Scroll to see offers'} />;
		}
	}

	renderNoOfferView(styles) {
		const { source, style } = this.appImages('noOffers');
		if (this.props.isLogin && this.props.userRewards == 0) {
			return (
				<View
					style={styles.noOfferViewStyle}
					accessible={true}
					accessibilityLabel={this.ls('accessibility_noOffersAvaiable')}
				>
					<Image source={source} style={[style, styles.noOfferViewImageStyle]} />
				</View>
			);
		}
	}

	renderMeter(styles) {
		return (
			<View style={{ flex: 1 }}>
				<MeterComponent
					onNavigate={(scene, params) => {
						if (scene === 'QRCodeScene') {
							this.checkUserEmailVerified(true, res => res && this.navigate(scene, params));
						} else {
							this.navigate(scene, params);
						}
					}}
					isLogin={this.props.isLogin}
					cardData={this.props.cardData}
					pointsBalance={this.props.pointsBalance}
					onRedeemPress={() => this.checkUserEmailVerified(false, res => res && this.fabButtonOnPress())}
				/>
				{this.renderSwipeUpText(styles)}
			</View>
		);
	}

	renderOfferList(styles) {
		return (
			<LazyLoad>
				<RewardListSceneWithRedux
					renderHeader={this.renderMeter(styles)}
					showSpinner={this.showSpinner}
					handleError={this.handleError}
					listContainerStyle={styles.listContainerStyle}
					emptyView={this.renderNoOfferView(styles)}
					navigation={this.props.navigation}
					onListRefresh={cb => this.fetchLoyalty(false, cb)}
					shouldFetchRewards={false}
				/>
			</LazyLoad>
		);
	}

	renderRedeemableCount(styles) {
		if (this.props.unlockedRedeemablesCount) {
			return <Text style={{ color: styles.fabTextColor }}>{this.props.unlockedRedeemablesCount}</Text>;
		}
	}

	renderBalance(styles) {
		if (this.props.bankedRewards) {
			return <Text style={{ color: styles.fabTextColor }}>{`$${this.props.bankedRewards}`}</Text>;
		}
	}

	renderFabButton(styles) {
		if (this.props.isLogin && this.appConfig().isFabButtonRequired()) {
			let child = null;
			switch (this.appConfig().meta.rewards_program) {
				case 'banked_currency':
					child = this.renderBalance(styles);
					break;
				case 'points_unlock':
					child = this.renderRedeemableCount(styles);
					break;
				default:
					return;
			}
			return (
				<FAB testID="fabButton" onPress={this.fabButtonOnPress.bind(this)} style={styles.redemptionCodeStyle}>
					{child}
				</FAB>
			);
		}
	}

	renderActiveRedemption(styles) {
		if (this.props.isLogin) {
			return <ActiveRedemptionWithRedux onPress={this.navigate} style={styles.activeRedemptionStyle} />;
		}
	}

	render() {
		const styles = this.defaultStyle();

		return (
			<SafeAreaView style={styles.safeAreaViewContainer}>
				<View testID="scrollView" style={styles.container}>
					<NavigationEvents onFocus={() => this.onWillFocus()} />
					{this.renderHeader(styles)}
					{this.renderOfferList(styles)}
					{this.renderFabButton(styles)}
					{this.renderActiveRedemption(styles)}
					{this.renderSpinner()}
				</View>
			</SafeAreaView>
		);
	}

	defaultStyle() {
		const { Colors } = this.theme();
		const paddingBottom = this.appConfig().tabBottomSpace();
		let redemptionCodeBottom = 10 + paddingBottom;
		if (this.props.userRedemptionCodes && this.props.userRedemptionCodes.length > 0) {
			redemptionCodeBottom += 22;
		}
		return {
			safeAreaViewContainer: {
				flex: 1
			},
			container: {
				flex: 1,
				backgroundColor: 'transparent'
			},
			appLogoViewStyle: {
				alignItems: 'center',
				justifyContent: 'center'
			},
			appLogoStyle: {
				width: 150,
				height: 70,
				resizeMode: 'contain',
				marginBottom: 3,
				...this.getTintColor(this.appConfig(), 'logo', Colors.REWARD_LOGO_COLOR)
			},
			redemptionCodeStyle: {
				bottom: redemptionCodeBottom
			},
			listContainerStyle: {
				paddingBottom: this.appConfig().tabBottomSpace()
			},
			activeRedemptionStyle: {
				paddingBottom: paddingBottom + 8
			},
			swipeUpTextStyle: {
				color: Colors.SWIPE_TEXT_COLOR,
				marginTop: 50
			},
			noOfferViewStyle: {
				width: '90%',
				marginTop: 25,
				marginBottom: 20,
				alignSelf: 'center',
				height: 250,
				borderColor: Colors.NO_OFFER_VIEW_BORDER_COLOR,
				borderRadius: 6,
				borderWidth: 1,
				alignItems: 'center',
				justifyContent: 'center'
			},
			noOfferViewImageStyle: {
				tintColor: Colors.NO_OFFER_IMAGE_TINT_COLOR
			},
			fabTextColor: Colors.FAB_TEXT_COLOR
		};
	}
}

RewardScene.propTypes = {
	cardData: PropTypes.object.isRequired,
	userData: PropTypes.object,
	isLogin: PropTypes.bool,
	userRewards: PropTypes.number,
	userRedemptionCodes: PropTypes.array,
	currentCheckInData: PropTypes.object,
	navigation: PropTypes.object,
	setUserBalanceData: PropTypes.func,
	setUserCheckInsData: PropTypes.func,
	setUserData: PropTypes.func,
	fetchLoyalty: PropTypes.func
};

RewardScene.defaultProps = {
	isLogin: false,
	userData: null,
	userRedemptionCodes: [],
	userRewards: 0,
	currentCheckInData: null,
	navigation: { navigate: () => {} },
	setUserBalanceData: () => {},
	setUserCheckInsData: () => {},
	setUserData: () => {},
	fetchLoyalty: () => {}
};

const RewardSceneWithRedux = connect(
	state => {
		let unlockedRedeemablesCount = 0,
			pointsBalance = 0,
			bankedRewards = 0;
		if (state.userBalanceData) {
			unlockedRedeemablesCount = LoyaltyHelper.getUnlockedRedeemablesCount(
				state.cardData.loyaltyRedeemables(),
				state.userBalanceData.net_balance
			);
			pointsBalance = state.userBalanceData.points_balance;
			bankedRewards = state.userBalanceData.banked_rewards;
		}
		return {
			cardData: state.cardData,
			userData: state.userData,
			isLogin: !!state.userData,
			unlockedRedeemablesCount,
			bankedRewards,
			pointsBalance,
			userRedemptionCodes: state.userRedemptionCodes,
			currentCheckInData: state.userCurrentCheckInData,
			userRewards: state.userRewardsData ? state.userRewardsData.length : 0
		};
	},
	{
		setUserBalanceData: Actions.setUserBalanceData,
		setUserCheckInsData: Actions.setUserCheckInsData,
		setCurrentCheckInData: Actions.setUserCurrentCheckInData,
		setUserData: Actions.setUserData,
		fetchLoyalty: Actions.fetchLoyalty
	}
)(RewardScene);

export default RewardSceneWithRedux;
