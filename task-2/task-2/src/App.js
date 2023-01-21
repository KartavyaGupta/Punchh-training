/**
 * Copyright (c) 2017-Present, Punchh, Inc.
 * All rights reserved.
 *
 * @flow
 */
'use strict';

import React from 'react';
import { Text, TextInput, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import DatePicker from 'react-native-date-picker';
import { enableScreens } from 'react-native-screens';
import { enableLatestRenderer } from 'react-native-maps';
import {
	AppRoot,
	AssetMapper,
	PunchhProvider,
	SplashSceneWithRedux,
	Text as PunchhText
} from 'react-native-punchh-components';

import AppControlFlow from './AppControlFlow';
import { AppConfig, Images, Forms as form, Strings, Theme, QuickActions } from '@res';
import { mapColors } from '@res/Theme/Colors';
import { mapFonts } from '@res/Theme/Fonts';
import { Background } from '@Common';

import './protos';

const value = 1.4;
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = true;
Text.defaultProps.maxFontSizeMultiplier = value;

TextInput.defaultProps = Text.defaultProps || {};
TextInput.defaultProps.maxFontSizeMultiplier = value;
TextInput.defaultProps.allowFontScaling = true;

WebView.defaultProps = {
	...WebView.defaultProps,
	useWebKit: true
};

DatePicker.defaultProps = DatePicker.defaultProps || {};
DatePicker.defaultProps.allowFontScaling = false;
if (Platform.OS === 'android') {
	enableScreens(false);
	enableLatestRenderer();
}

export default (
	props,
	{ images = Images, theme = Theme, config = AppConfig, strings = Strings, component = AppControlFlow } = {}
) => {
	AssetMapper.setPropsTheme(props, config, theme, mapColors, mapFonts);
	AssetMapper.mapImages(images, config);

	return (
		<PunchhProvider
			firstLoad={(grp, setReducer, setMiddleWare) => {
				if (config.isNativeOloAvailable()) {
					const { OLOBootLoader } = require('react-native-punchh-olo');
					OLOBootLoader(grp, setReducer);
				}
				if (config.isNativeGiftCardAvailable()) {
					const { GCBootLoader } = require('react-native-giftcard');
					GCBootLoader(grp, setReducer, setMiddleWare);
				}
			}}
			config={config}
			images={images}
			strings={strings}
			theme={theme}
			afterFormUpdate={(updateFields, updateDetails) => {
				if (config.isNativeOloAvailable()) {
					const { OloForms } = require('react-native-punchh-olo');
					updateFields(OloForms.formFields());
					updateDetails(OloForms.formDetails());
				}

				updateFields(form.formFields());
				updateDetails(form.formDetails());
			}}
		>
			<AppRoot
				{...props}
				quickActions={QuickActions}
				initialScene={startAppFlow => (
					<Background type="none">
						<SplashSceneWithRedux
							moveToNextScreen={startAppFlow}
							imageSource={images.splashLogo.source}
							navBarHeight={props.navBarHeight}
						/>
					</Background>
				)}
				appFlow={<AppControlFlow props />}
			/>
		</PunchhProvider>
	);
};
