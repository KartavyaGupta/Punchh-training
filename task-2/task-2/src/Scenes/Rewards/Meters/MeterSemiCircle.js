/**
 * Copyright (c) 2017-Present, Punchh, Inc.
 * All rights reserved.
 *
 * @flow
 */
'use strict';

import React from 'react';
import { View, Text, Image } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { BaseComponent } from 'react-native-punchh-components';

export default class MeterSemiCircle extends BaseComponent {
	render() {
		const styles = this.styleSheet();
		const meter = this.appImages().meterFg;
		return (
			<View style={styles.meterContainer}>
				<AnimatedCircularProgress
					size={132}
					width={5}
					arcSweepAngle={210}
					fill={this.props.percentage}
					tintColor={styles.meterStyle.tintColor}
					backgroundColor={styles.meterStyle.backgroundColor}
					lineCap={'round'}
					rotation={-105}
					style={styles.meterStyle.style}
				/>
				<View style={styles.textContainer} accessible={true}>
					<Text style={styles.textStyle}>{this.props.pointsBalance}</Text>
					<Text style={[styles.textStyle, { fontSize: 12 }]}>
						{this.props.pointsBalance === 1 ? 'Point' : 'Points'}
					</Text>
					<Image source={meter.source} resizeMode={'contain'} style={[meter.style, styles.imgStyle]} />
				</View>
			</View>
		);
	}

	defaultStyles() {
		const { Colors } = this.theme();
		return {
			meterContainer: {
				width: '100%',
				height: 230,
				borderRadius: 69,
				alignItems: 'center',
				justifyContent: 'flex-start'
			},
			meterStyle: {
				tintColor: Colors.METER_FILL_COLOR,
				backgroundColor: Colors.METER_BG_COLOR,
				style: {
					marginTop: 5
				}
			},
			textContainer: {
				marginTop: '6%',
				alignItems: 'center',
				justifyContent: 'center',
				position: 'absolute'
			},
			textStyle: {
				fontSize: 24,
				fontWeight: '600',
				color: Colors.METER_TEXT_COLOR,
				textAlign: 'center'
			},
			imgStyle: {
				marginTop: -7
			}
		};
	}
}
