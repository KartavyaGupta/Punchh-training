/**
 * Copyright (c) 2017-Present, Punchh, Inc.
 * All rights reserved.
 *
 * @flow
 */
'use strict';

import React from 'react';
import { View, Animated, Easing, Text, Image } from 'react-native';
import { BaseComponent } from 'react-native-punchh-components';

export default class MeterHorizontalStrip extends BaseComponent {
	componentWillMount() {
		this._animatedValue = new Animated.Value(0);
	}

	shouldComponentUpdate() {
		setTimeout(() => {
			Animated.timing(this._animatedValue, {
				toValue: this.props.percentage,
				duration: 1000,
				easing: Easing.linear
			}).start();
		}, 100);
		return true;
	}

	render() {
		const styles = this.styleSheet();
		const animatedStyle = {
			width: this._animatedValue.interpolate({
				inputRange: [0, 1],
				outputRange: ['0%', '1%']
			})
		};
		const meter = this.appImages().meterFg;
		return (
			<View style={styles.container}>
				<Image source={meter.source} resizeMode={'contain'} style={[meter.style, styles.imgStyle]} />
				<View style={styles.meterContainer}>
					<View style={styles.baseBar} />
					<Animated.View style={[animatedStyle, styles.animatedBar]} />
					<View style={styles.leftCircleStyle} />
					<View style={styles.rightCircleStyle} />
					<Text style={styles.textStyle}>
						{this.props.pointsBalance} {this.props.pointsBalance === 1 ? 'Point' : 'Points'}
					</Text>
				</View>
			</View>
		);
	}

	defaultStyles() {
		const { Colors } = this.theme();
		return {
			container: {
				width: '83%',
				height: 230,
				marginBottom: 30,
				alignItems: 'center',
				justifyContent: 'center'
			},
			meterContainer: {
				alignSelf: 'center',
				width: 215,
				height: 26,
				alignItems: 'center',
				justifyContent: 'center',
				overflow: 'hidden'
			},
			animatedBar: {
				height: 26,
				left: 0,
				backgroundColor: Colors.METER_FILL_COLOR,
				position: 'absolute'
			},
			leftCircleStyle: {
				height: 12,
				width: 12,
				borderRadius: 6,
				backgroundColor: Colors.BASE_BACKGROUND_COLOR,
				position: 'absolute',
				top: 7,
				left: -6
			},
			rightCircleStyle: {
				height: 12,
				width: 12,
				borderRadius: 6,
				backgroundColor: Colors.BASE_BACKGROUND_COLOR,
				position: 'absolute',
				top: 7,
				right: -6
			},
			textStyle: {
				fontSize: 12,
				position: 'absolute',
				color: Colors.METER_TEXT_COLOR
			},
			baseBar: {
				width: '100%',
				height: 26,
				backgroundColor: Colors.METER_BG_COLOR
			}
		};
	}
}
