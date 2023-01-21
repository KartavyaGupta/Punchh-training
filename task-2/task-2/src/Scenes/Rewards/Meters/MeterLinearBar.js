/**
 * Copyright (c) 2017-Present, Punchh, Inc.
 * All rights reserved.
 *
 * @flow
 */
'use strict';

import React from 'react';
import { View, Animated, Easing, Text } from 'react-native';
import { BaseComponent } from 'react-native-punchh-components';

export default class MeterLinearBar extends BaseComponent {
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

		const animatedTextStyle = {
			left: this._animatedValue.interpolate({
				inputRange: [0, 1],
				outputRange: ['0%', '1%']
			})
		};
		return (
			<View style={styles.container}>
				<Text style={[styles.textStyle, { marginTop: 30, marginLeft: -5 }]}>0</Text>
				<View style={{ alignSelf: 'center', width: '100%' }}>
					<View style={styles.baseBar} />
					<Animated.View
						style={[animatedStyle, this.props.pointBalance === 1 ? styles.animatedBarStyle : styles.animatedBar]}
					/>
				</View>
				<Animated.Text style={[styles.textStyle, { marginLeft: -7, marginTop: -20, ...animatedTextStyle }]}>
					{this.props.pointsBalance}
				</Animated.Text>
				<Text style={[styles.textStyle, { marginTop: 30, right: -10 }]}>{this.props.redemptionMark}</Text>
			</View>
		);
	}

	defaultStyles() {
		const { Colors } = this.theme();
		return {
			container: {
				alignSelf: 'center',
				width: '83%',
				marginTop: 40,
				marginBottom: 30,
				flexDirection: 'row',
				justifyContent: 'space-between'
			},
			animatedBar: {
				height: 22,
				backgroundColor: Colors.METER_FILL_COLOR,
				position: 'absolute',
				borderRadius: 20,
				borderTopRightRadius: this.props.percentage >= 99 ? 20 : 0,
				borderBottomRightRadius: this.props.percentage >= 99 ? 20 : 0
			},
			animatedBarStyle: {
				height: 18,
				backgroundColor: Colors.METER_FILL_COLOR,
				position: 'absolute',
				borderRadius: 200,
				borderTopRightRadius: 0,
				borderBottomRightRadius: 0,
				marginTop: 2,
				borderTopLeftRadius: 100,
				borderBottomLeftRadius: 100
			},
			textStyle: {
				position: 'absolute',
				color: Colors.METER_TEXT_COLOR
			},
			baseBar: {
				width: '100%',
				height: 22,
				backgroundColor: Colors.METER_BG_COLOR,
				borderRadius: 10
			}
		};
	}
}
