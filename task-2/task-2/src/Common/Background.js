/**
 * Copyright (c) 2017-Present, Punchh, Inc.
 * All rights reserved.
 *
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, View } from 'react-native';

import { BaseComponent } from 'react-native-punchh-components';

class Background extends BaseComponent {
	render() {
		const { Colors } = this.theme();
		const metaBG = this.appConfig().meta.theme.background;
		if (!!this.props.type && metaBG[`${this.props.type}`] === 'image') {
			const viewStyle = { flex: 1, width: '100%', height: '100%', backgroundColor: 'transparent' };
			const { source, style } = this.appImages(`${this.props.type}_bg`);
			return (
				<ImageBackground source={source} style={[viewStyle, style, this.props.style]}>
					{this.props.children}
				</ImageBackground>
			);
		} else {
			return <View style={{ flex: 1, backgroundColor: Colors.BASE_BACKGROUND_COLOR }}>{this.props.children}</View>;
		}
	}
}

Background.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
	type: PropTypes.oneOf(['default', 'reward']),
	style: PropTypes.object
};

Background.defaultProps = {
	type: 'default',
	style: null
};

const BackgroundHOC = (SomeComponent, { type = 'default', style = null } = {}) => {
	return class extends React.Component {
		render() {
			return (
				<Background type={type} style={style}>
					<SomeComponent {...this.props} />
				</Background>
			);
		}
	};
};

module.exports = {
	Background,
	BackgroundHOC
};
