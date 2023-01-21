/**
 * Copyright (c) 2017-Present, Punchh, Inc.
 * All rights reserved.
 *
 * @flow
 */
'use strict';

import React from 'react';
import { View, Animated, Easing, Text, Image } from 'react-native';
import { BaseComponent, Utility } from 'react-native-punchh-components';

export default class MeterImageFillHorizontal extends BaseComponent {
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
		const animatedStyle = {
			width: this._animatedValue.interpolate({
				inputRange: [0, 1],
				outputRange: ['0%', '1%']
			})
		};

		const styles = this.styleSheet();
		const unfilled = this.appImages().meterBg;
		const filled = this.appImages().meterFg;
		return (
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image source={unfilled.source} resizeMode={'contain'} style={[unfilled.style]} />
					<Animated.View style={[animatedStyle, styles.animatedViewStyle]}>
						<Image source={filled.source} resizeMode={'contain'} style={[filled.style]} />
					</Animated.View>
				</View>
				<View style={styles.textContainer} accessible={true}>
					<Text style={styles.textStyle}>{this.props.pointsBalance}</Text>
					<Text style={[styles.textStyle, { fontSize: 12 }]}>
						{this.props.pointsBalance === 1 ? 'Point' : 'Points'}
					</Text>
				</View>
			</View>
		);
	}

	defaultStyles() {
		const { Colors } = this.theme();
		return {
			container: {
				width: '100%',
				height: 230,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center'
			},
			imageContainer: {
				flexWrap: 'wrap',
				justifyContent: 'center',
				alignSelf: 'center'
			},
			animatedViewStyle: {
				overflow: 'hidden',
				position: 'absolute',
				height: '100%',
				flexDirection: 'row'
			},
			textContainer: {
				alignSelf: 'center',
				alignItems: 'center',
				justifyContent: 'center',
				position: 'absolute',
				backgroundColor: Utility.addAlphaToColor(Colors.METER_BG_COLOR, 0.7),
				borderRadius: 41,
				width: 60,
				height: 60
			},
			textStyle: {
				fontSize: 24,
				fontWeight: '600',
				color: Colors.METER_TEXT_COLOR,
				textAlign: 'center'
			}
		};
	}
}
