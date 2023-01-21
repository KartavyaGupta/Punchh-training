/**
 * Copyright (c) 2017-Present, Punchh, Inc.
 * All rights reserved.
 *
 * @flow
 */
'use strict';

import metaJSON from '../../meta.json';

export default {
	PUNCHH_APP_DATE_FORMAT: 'MM-DD-YYYY',
	INITIAL_ROUTE_NAME: 'tab3',
	DEFAULT_TAB_NAME: 'tab3',
	RICH_MESSAGE_ON_TAB: true,
	MANAGE_PAYMENT_CARDS_IN_EDIT_PROFILE: false,
	USER_HAS_PHONE_MIGRATION_TOGGLE: true,
	OLO_SCENE: 'tab2',
	SCANNER_ANIMATION: true,
	meta: metaJSON,
	isFabButtonRequired: function () {
		return this.meta.isFabButtonRequired;
	},
	isBrandLogoBarRequired: function () {
		return this.meta.brand_logo_bar;
	},
	isNativeGiftCardAvailable: function () {
		const gcPaymentProcessors = ['braintree', 'payeezy', 'heartland', 'world_pay'];
		return !!this.meta.gift_card && gcPaymentProcessors.includes(this.meta.gift_card);
	},
	isNativeOloAvailable: function () {
		return !!this.meta.online_ordering && this.meta.online_ordering == 'native_olo';
	},
	isOLOAvailable: function () {
		return !!this.meta.online_ordering && this.meta.online_ordering !== 'none';
	},
	isWebOloAvailable: function () {
		return !!this.meta.online_ordering && this.meta.online_ordering === 'web_olo';
	},
	tabBottomSpace: function () {
		switch (this.meta.theme.tab) {
			case 'left_tilted':
			case 'right_tilted':
			case 'top_oval':
			case 'round_curve':
			case 'top_diamond':
				return 22;
			case 'round_corner':
			case 'top_circle':
				return 10;
			case 'underline':
				return 4;
			case 'linear':
			default:
				return 0;
		}
	}
};
