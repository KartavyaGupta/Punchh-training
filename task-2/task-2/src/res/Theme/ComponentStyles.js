/**
 * Copyright (c) 2017-Present, Punchh, Inc.
 * All rights reserved.
 *
 * @flow
 */
'use strict';

import Fonts from './Fonts';
import { Colors } from './Colors';

module.exports = {
	Description: () => ({
		textStyle: {
			...Fonts.light(14)
		},
		tagsStyles: {
			a: {
				color: Colors.DESCRIPTION_TEXT_SECONDARY,
				textDecorationLine: 'underline'
			}
		},
		fontFamilies: Fonts.getFontFamilies()
	}),
	Heading: () => ({
		...Fonts.medium(24)
	}),
	Button: function () {
		const style = {};
		switch (this.appConfig().meta.theme.button) {
			case 'rect':
				style.borderRadius = 0;
				break;
			case 'capsule':
				style.borderRadius = 22;
				break;
			case 'diamond':
			case 'image':
				style.elevation = 0;
				break;
			default:
				style.borderRadius = 5;
		}
		return {
			container: {
				shadowColor: 'rgba(0, 0, 0, 0.3)',
				shadowOffset: { width: 0, height: 6 },
				shadowOpacity: 0.8,
				shadowRadius: 5,
				elevation: 5,
				...style
			},
			textStyle: {
				...Fonts.medium(14)
			}
		};
	},
	QuantityButton: () => ({
		buttonStyle: {
			height: 44,
			width: 48
		}
	}),
	LinkButton: () => ({
		textStyle: {
			...Fonts.regular(12)
		}
	}),
	Header: () => ({
		titleTextStyle: {
			...Fonts.medium(14)
		},
		container: {
			elevation: 1,
			shadowColor: Colors.HEADER_SHADOW_COLOR,
			shadowOffset: { width: 0, height: 0 },
			shadowOpacity: 0.2,
			shadowRadius: 3
		}
	}),
	FAB: () => ({
		textStyle: {
			...Fonts.medium(40)
		}
	}),
	DefaultRow: () => ({
		mainContainer: {
			backgroundColor: 'transparent',
			paddingTop: 20,
			paddingBottom: 20
		}
	}),
	Card: () => ({
		container: {
			backgroundColor: 'white',
			elevation: 1,
			shadowColor: 'rgba(0,0,0,0.3)',
			shadowOffset: { width: 0, height: 1.5 },
			shadowOpacity: 0.5,
			borderWidth: 0.3,
			shadowRadius: 5
		},
		dateTextStyle: {
			color: 'rgb(55,62,69)',
			...Fonts.regular(11)
		},
		titleTextStyle: {
			color: Colors.DESCRIPTION_TEXT_PRIMARY,
			...Fonts.medium(24)
		},
		descriptionTextStyle: {
			color: Colors.DESCRIPTION_TEXT_PRIMARY,
			...Fonts.medium(14)
		},
		tagsStyles: {
			a: {
				color: Colors.DESCRIPTION_TEXT_SECONDARY,
				textDecorationLine: 'underline'
			}
		}
	}),
	Cell: () => ({
		primaryLabelStyle: {
			...Fonts.bold(14)
		},
		descriptionStyle: {
			...Fonts.regular(12)
		},
		sep: {
			backgroundColor: 'rgba(55,62,69,0.1)'
		}
	}),
	FloatingTextInput: function () {
		const style = {};
		switch (this.appConfig().meta.theme.form_input) {
			case 'rect':
				style.borderRadius = 0;
				break;
			case 'underline':
				style.borderWidth = 0;
				style.borderRadius = 0;
				style.borderBottomWidth = 1;
				break;
			case 'leftline':
				style.borderWidth = 0;
				style.borderRadius = 0;
				style.borderLeftWidth = 1.5;
				break;
			default:
		}

		return {
			headerText: {
				fontSize: 14,
				...Fonts.medium(14)
			},
			datePickerStyle: {
				datePicker: {
					justifyContent: 'center'
				}
			},
			textInputContainer: style
		};
	},
	PunchhText: () => ({
		bold: {
			...Fonts.bold(14)
		},
		alpha: {
			color: 'rgba(55,62,69,0.7)',
			...Fonts.regular(12)
		}
	}),
	SectionText: () => ({
		color: 'rgb(55,62,69)',
		...Fonts.medium(14)
	}),
	Spinner: () => null
};
