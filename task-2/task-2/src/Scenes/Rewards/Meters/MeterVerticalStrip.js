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

export default class MeterVerticalStrip extends BaseComponent {
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
			})
		};

		const meter = this.appImages().meterFg;
		return (
			<View style={styles.container}>
				<Image source={meter.source} resizeMode={'contain'} style={meter.style} />
				<View style={styles.meterContainer} accessible={true}>
					<View style={styles.barContainer}>
						<View style={styles.baseBar} />
						<Animated.View style={[animatedStyle, styles.animatedBar]} />
					</View>
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
				height: 230,
				justifyContent: 'flex-end',
				alignSelf: 'center'
			},
			meterContainer: {
				alignSelf: 'center',
				position: 'absolute',
				right: 0,
				bottom: 24,
				justifyContent: 'center',
				alignItems: 'center'
			},
			barContainer: {
				justifyContent: 'center',
				alignItems: 'center',
				width: 20,
				height: 147
			},
			textStyle: {
				fontSize: 24,
				color: Colors.METER_TEXT_COLOR
			},
			animatedBar: {
				width: 6,
				bottom: 2,
				backgroundColor: Colors.METER_FILL_COLOR,
				position: 'absolute',
				borderRadius: 20,
				borderTopRightRadius: 4,
				borderTopLeftRadius: 4
			},
			baseBar: {
				width: 10,
				height: '100%',
				backgroundColor: Colors.METER_BG_COLOR,
				borderRadius: 10
			}
		};
	}
}
