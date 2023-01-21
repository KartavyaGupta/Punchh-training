/**
 * Copyright (c) 2017-Present, Punchh, Inc.
 * All rights reserved.
 *
 * @flow
 */
'use strict';

import React from 'react';
import { View, Image } from 'react-native';
import { BaseComponent } from 'react-native-punchh-components';

export default class PromotionLogo extends BaseComponent {
	render() {
		const styles = this.styleSheet();
		const meter = this.appImages().meterFg;

		return (
			<View style={styles.container}>
				<Image source={meter.source} resizeMode={'contain'} style={[meter.style, styles.imgStyle]} />
			</View>
		);
	}

	defaultStyles() {
		return {
			container: {
				height: 230,
				justifyContent: 'center',
				alignItems: 'center'
			},
			imgStyle: {}
		};
	}
}
