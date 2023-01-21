/**
 * Copyright (c) 2017-Present, Punchh, Inc.
 * All rights reserved.
 *
 * @flow
 */
'use strict';

import React from 'react';
import { View, Image as ImageRN, Text } from 'react-native';
import { BaseComponent, Utility } from 'react-native-punchh-components';

import Svg, { Defs, G, ClipPath, Path, Image } from 'react-native-svg';

export default class MeterPie extends BaseComponent {
	constructor(props) {
		super(props);
		this.size = 200;
	}

	polarToCartesian(centerX, centerY, radius, angleInDegrees) {
		var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
		return {
			x: centerX + radius * Math.cos(angleInRadians),
			y: centerY + radius * Math.sin(angleInRadians)
		};
	}

	circlePath(x, y, radius, startAngle, endAngle) {
		var start = this.polarToCartesian(x, y, radius, endAngle * 0.9999);
		var end = this.polarToCartesian(x, y, radius, startAngle);
		var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
		var d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y, 'L', radius, radius];
		return d.join(' ');
	}

	renderSvg(styles) {
		const pizzaFilled = this.appImages().meterFg;
		const circlePath = this.circlePath(
			this.size / 2,
			this.size / 2,
			this.size / 2,
			180,
			180 + this.props.percentage * 3.6
		);
		return (
			<View style={styles.imageUnfill}>
				<Svg height="200" width="200" fill="blue" key={this.props.percentage}>
					<Defs>
						<ClipPath id="clip">
							<Path d={circlePath} strokeWidth={0} />
						</ClipPath>
					</Defs>
					<Image
						x="0"
						y="0"
						width="200"
						height="200"
						preserveAspectRatio="xMidYMid slice"
						opacity="1"
						href={pizzaFilled.source}
						clipPath="url(#clip)"
					/>
				</Svg>
			</View>
		);
	}

	render() {
		const styles = this.styleSheet();
		const pizzaUnfilled = this.appImages().meterBg;
		return (
			<View style={styles.meterContainer}>
				<ImageRN source={pizzaUnfilled.source} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
				{this.renderSvg(styles)}
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
			meterContainer: {
				width: 200,
				height: 230,
				alignItems: 'center',
				justifyContent: 'center'
			},
			imageUnfill: {
				position: 'absolute'
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
