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

export default class MeterImageFillVertical extends BaseComponent {
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

	renderLineTextContainer(styles, imgStyle) {
		const animatedTextStyle = {
			bottom: this._animatedValue.interpolate({
				inputRange: [0, 1],
				outputRange: ['0%', '1%']
			})
		};
		return (
			<Animated.View style={[styles.lineTextContainerStyle, animatedTextStyle]}>
				<View style={[styles.lineStyle, { width: imgStyle?.width }]} />
				<View style={styles.textContainerStyle} accessible={true}>
					<Text style={styles.textStyle}>{this.props.pointsBalance}</Text>
					<Text style={[styles.textStyle, { fontSize: 12 }]}>
						{this.props.pointsBalance === 1 ? 'Point' : 'Points'}
					</Text>
				</View>
			</Animated.View>
		);
	}

	render() {
		const styles = this.styleSheet();
		const animatedStyle = {
			height: this._animatedValue.interpolate({
				inputRange: [0, 1],
				outputRange: ['0%', '1%']
			})
		};
		const unfilled = this.appImages().meterBg;
		const filled = this.appImages().meterFg;
		return (
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image source={unfilled.source} resizeMode={'contain'} style={[unfilled.style, styles.imgStyle]} />
					<Animated.View style={[animatedStyle, styles.animatedViewStyle]}>
						<Image source={filled.source} resizeMode={'contain'} style={[filled.style, styles.imgStyle]} />
					</Animated.View>
					{this.renderLineTextContainer(styles, filled.style)}
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
				alignItems: 'center',
				justifyContent: 'center'
			},
			imageContainer: {
				justifyContent: 'center',
				alignSelf: 'center'
			},
			imgStyle: {},
			animatedViewStyle: {
				overflow: 'hidden',
				position: 'absolute',
				alignItems: 'flex-end',
				justifyContent: 'flex-end',
				bottom: 0
			},
			textContainerStyle: {
				justifyContent: 'center',
				alignItems: 'center',
				top: '10%',
				right: -5
			},
			lineTextContainerStyle: {
				flexDirection: 'row',
				position: 'absolute',
				justifyContent: 'flex-start',
				alignItems: 'flex-end'
			},
			lineStyle: {
				width: '100%',
				height: 2,
				backgroundColor: Colors.METER_FILL_COLOR
			},
			textStyle: {
				fontSize: 24,
				color: Colors.METER_TEXT_COLOR
			}
		};
	}
}
