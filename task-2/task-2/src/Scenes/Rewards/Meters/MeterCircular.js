/**
 * Copyright (c) 2017-Present, Punchh, Inc.
 * All rights reserved.
 *
 * @flow
 */
'use strict';

import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { BaseComponent, Utility } from 'react-native-punchh-components';

export default class MeterCircular extends BaseComponent {
	render() {
		const styles = this.styleSheet();
		return (
			<View style={styles.container}>
				<View style={[{ width: 162, height: 162, borderRadius: 81 }, styles.meterStyle]}>
					<View style={[{ width: 128, height: 128, borderRadius: 64 }, styles.meterStyle]}>
						<AnimatedCircularProgress
							size={114}
							width={5}
							fill={this.props.percentage}
							tintColor={styles.meterContainer.tintColor}
							backgroundColor="transparent"
							rotation={180}
							lineCap={'round'}
							style={styles.meterContainer.shadow}
						>
							{() => (
								<View style={[styles.meterStyle, { width: 88, height: 88, borderRadius: 44 }]} accessible={true}>
									<Text testID="txtCheck-In" style={styles.textStyle}>
										{this.props.pointsBalance}
									</Text>
									<Text style={[styles.textStyle, { fontSize: 12 }]}>
										{this.props.pointsBalance === 1 ? 'Point' : 'Points'}
									</Text>
								</View>
							)}
						</AnimatedCircularProgress>
					</View>
				</View>
			</View>
		);
	}

	defaultStyles() {
		const { Colors } = this.theme();
		return {
			container: {
				alignItems: 'center',
				justifyContent: 'center',
				height: 230
			},
			meterStyle: {
				backgroundColor: Utility.addAlphaToColor(Colors.METER_BG_COLOR, 0.4),
				alignItems: 'center',
				justifyContent: 'center'
			},
			meterContainer: {
				tintColor: Colors.METER_FILL_COLOR,
				shadow: {}
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
