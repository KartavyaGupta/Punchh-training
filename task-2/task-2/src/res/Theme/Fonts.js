/**
 * Copyright (c) 2017-Present, Punchh, Inc.
 * All rights reserved.
 *
 * @flow
 */
'use strict';

import meta from '../../meta.json';
let header = meta.theme?.fonts.header;
let defaultFont = meta.theme?.fonts.default;

const mapFonts = metaJSON => {
	header = metaJSON.theme?.fonts.header;
	defaultFont = metaJSON.theme?.fonts.default;
	return {
		header,
		defaultFont
	};
};

const Fonts = {
	medium: (s = 12, isHeader = false) => {
		return {
			fontSize: s,
			fontFamily: `${isHeader ? header : defaultFont}-Regular`,
			fontWeight: '500'
		};
	},
	regular: (s = 12, isHeader = false) => {
		return {
			fontSize: s,
			fontFamily: `${isHeader ? header : defaultFont}-Regular`
		};
	},
	bold: (s = 12, isHeader = false) => {
		return {
			fontSize: s,
			fontFamily: `${isHeader ? header : defaultFont}-Bold`,
			fontWeight: 'bold'
		};
	},
	light: (s = 12, isHeader = false) => {
		return {
			fontFamily: `${isHeader ? header : defaultFont}-Light`,
			fontWeight: 'normal',
			fontSize: s
		};
	}
};

const getFontFamilies = () => {
	const fontFamilies = [];
	for (const font in Fonts) {
		fontFamilies.push(Fonts[font]()?.fontFamily ?? '');
	}
	return fontFamilies;
};

module.exports = { mapFonts, ...Fonts, getFontFamilies };
