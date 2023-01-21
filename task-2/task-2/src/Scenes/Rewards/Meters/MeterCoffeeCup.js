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

export default class MeterCoffeeCup extends BaseComponent {
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
			height: this._animatedValue.interpolate({
				inputRange: [0, 1],
				outputRange: ['0%', '0.95%']
			}),
			width: this._animatedValue.interpolate({
				inputRange: [0, 1],
				outputRange: ['0%', '0.95%']
			})
		};

		const unfilled = this.appImages().meterBg;
		const filled = this.appImages().meterFg;
		return (
			<View style={styles.container}>
				<View style={styles.imgContainer}>
					<Image source={unfilled.source} resizeMode={'contain'} style={unfilled.style} />
					<Animated.View style={[animatedStyle, styles.coffeeContainer]}>
						<Image source={filled.source} resizeMode={'contain'} style={[filled.style, styles.imgStyle]} />
					</Animated.View>
				</View>
				<View style={styles.textContainer} accessible={true}>
					<Text style={[styles.textStyle]}>{this.props.pointsBalance}</Text>
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
				alignItems: 'center',
				width: 200,
				height: 230
			},
			imgContainer: {
				justifyContent: 'center',
				alignItems: 'center'
			},
			coffeeContainer: {
				justifyContent: 'center',
				alignItems: 'center',
				position: 'absolute'
			},
			imgStyle: {
				width: '100%',
				height: '100%'
			},
			textContainer: {
				justifyContent: 'center',
				alignItems: 'center',
				position: 'absolute',
				bottom: 20
			},
			textStyle: {
				fontSize: 24,
				color: Colors.METER_TEXT_COLOR
			}
		};
	}
}
