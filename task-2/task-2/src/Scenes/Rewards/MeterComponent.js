/**
 * Copyright (c) 2017-Present, Punchh, Inc.
 * All rights reserved.
 *
 * @flow
 */
'use strict';

import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { BaseComponent, Button, Heading } from 'react-native-punchh-components';

import Meters from './Meters';
import PromotionLogo from './PromotionLogo';
import { VoiceOverUtils } from '#Utils';

class MeterComponent extends BaseComponent {
	renderButton(styles) {
		const earnButtomStyle =
			this.props.isLogin && !this.appConfig().isFabButtonRequired()
				? { ...styles.buttonStyle, width: 124, marginRight: 5 }
				: { ...styles.buttonStyle };
		const button = (
			<View style={{ flexDirection: 'row', alignContent: 'space-between' }}>
				<Button
					testID={this.props.isLogin ? 'earnCredits' : 'loginOrSignup'}
					style={earnButtomStyle}
					textStyle={styles.buttonLabelStyle}
					onPress={() => this.props.onNavigate(this.props.isLogin ? 'QRCodeScene' : 'CommonSignUp')}
				>
					{this.props.isLogin ? this.ls('earnCredits') : this.ls('loginOrSignup')}
				</Button>
				{this.props.isLogin && !this.appConfig().isFabButtonRequired() && (
					<Button
						testID={'redeemButton'}
						style={styles.redeemButtonStyle}
						textStyle={styles.buttonLabelStyle}
						onPress={this.props.onRedeemPress}
					>
						{this.ls('redeem')}
					</Button>
				)}
			</View>
		);
		if (this.props.isLogin) {
			return button;
		}
		return <View style={{ flex: 1, height: 50 }}>{button}</View>;
	}

	renderMeter(_, redemptionMark) {
		const meta = this.appConfig().meta;
		switch (meta.rewards_program) {
			case 'visit_based':
				return;
			case 'surprise_delight':
				return <PromotionLogo />;
		}

		let MeterView = Meters.MeterCircular;
		switch (meta.theme.reward_meter.type) {
			case 'horizontal_strip':
				MeterView = Meters.MeterHorizontalStrip;
				break;
			case 'horizontal_fill':
				MeterView = Meters.MeterImageFillHorizontal;
				break;
			case 'vertical_fill':
				MeterView = Meters.MeterImageFillVertical;
				break;
			case 'arc':
				MeterView = Meters.MeterArc;
				break;
			case 'semi_circle':
				MeterView = Meters.MeterSemiCircle;
				break;
			case 'pie':
				MeterView = Meters.MeterPie;
				break;
			case 'vertical_strip':
				MeterView = Meters.MeterVerticalStrip;
				break;
			case 'zoom_out':
				MeterView = Meters.MeterCoffeeCup;
				break;
			case 'circular':
			default:
				MeterView = Meters.MeterCircular;
		}

		const percentage = this.props.isLogin ? (this.props.pointsBalance / redemptionMark) * 100 : 0;
		return (
			<View style={{ width: '100%', marginBottom: 0 }}>
				<View style={[{ width: '100%', justifyContent: 'space-around', alignItems: 'center' }]}>
					<MeterView pointsBalance={this.props.pointsBalance} redemptionMark={redemptionMark} percentage={percentage} />
				</View>
			</View>
		);
	}

	renderText(text) {
		if (!!text) {
			return <Heading testID={text} textAlign={'center'} label={text} style={{ fontSize: 14 }} />;
		}
	}

	renderTextContainer(styles, redemptionMark) {
		const { Colors } = this.theme();
		const info =
			this.props.cardData && this.props.cardData.description
				? this.props.cardData.description.replace(
						'{{{current_points_balance}}}',
						redemptionMark - this.props.pointsBalance
				  )
				: '';
		return (
			<View style={{ justifyContent: 'center', marginBottom: 10 }}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: -6,
						flexWrap: 'wrap'
					}}
				>
					{this.renderText(info.replace(/\\n/g, '\n'))}
					<TouchableOpacity
						accessibilityLabel={VoiceOverUtils.getAccessibilityContentForButton('Reward info')}
						onPress={() => this.props.onNavigate('OnDemandTutorialScene', { type: 'reward' })}
						accessible={true}
						style={{ alignSelf: 'center' }}
					>
						<Image
							source={this.appImages('infoIcon').source}
							style={[this.appImages('infoIcon').style, { tintColor: Colors.INFO_ICON_IMAGE_COLOR }]}
							resizeMode="contain"
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	render() {
		const styles = this.styleSheet();
		const redemptionMark = this.props.cardData ? this.props.cardData.redemption_mark : 1;
		return (
			<View style={styles.container}>
				{this.renderMeter(styles, redemptionMark)}
				{this.renderTextContainer(styles, redemptionMark)}
				{this.renderButton(styles)}
			</View>
		);
	}

	defaultStyles() {
		return {
			container: {
				flex: 0.9,
				justifyContent: 'center',
				alignItems: 'center'
			},
			textStyle: {
				fontSize: 24,
				fontWeight: '600',
				color: 'white',
				textAlign: 'center'
			},
			buttonStyle: {
				alignSelf: 'center',
				width: 186
			},
			buttonLabelStyle: {
				alignSelf: 'center'
			},
			redeemButtonStyle: { alignSelf: 'center', width: 124, marginLeft: 5 }
		};
	}
}

export default MeterComponent;
