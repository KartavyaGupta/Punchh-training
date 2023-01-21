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

export default class MeterCircular extends BaseComponent {
	render() {
		const styles = this.styleSheet();
		const meterArc = this.appImages().meterArc;
		return (
			<View style={styles.container}>
				<Image source={meterArc.source} resizeMode={'contain'} style={[meterArc.style, styles.imgStyle]} />
				<View style={styles.meterContainer}>
					<AnimatedCircularProgress
						size={600}
						width={8}
						arcSweepAngle={44}
						backgroundWidth={12}
						fill={this.props.percentage}
						tintColor={styles.meterStyle.tintColor}
						backgroundColor={styles.meterStyle.backgroundColor}
						lineCap={'round'}
						rotation={-22}
						style={styles.meterStyle.style}
					/>
					<View style={styles.textContainer} accessible={true}>
						<Text testID="txtCheck-In" style={styles.textStyle}>
							{this.props.pointsBalance}
						</Text>
						<Text style={[styles.textStyle, { fontSize: 12 }]}>
							{this.props.pointsBalance === 1 ? 'Point' : 'Points'}
						</Text>
					</View>
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
				alignItems: 'center'
			},
			meterContainer: {
				position: 'absolute',
				bottom: 14,
				width: '100%',
				height: 100,
				alignItems: 'center',
				justifyContent: 'flex-start',
				overflow: 'hidden'
			},
			meterStyle: {
				tintColor: Colors.METER_FILL_COLOR,
				backgroundColor: Colors.METER_BG_COLOR,
				style: {
					marginTop: 5
				}
			},
			imgStyle: {},
			textContainer: {
				marginTop: 5,
				alignItems: 'center',
				justifyContent: 'center',
				position: 'absolute',
				width: 82,
				height: 82
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
