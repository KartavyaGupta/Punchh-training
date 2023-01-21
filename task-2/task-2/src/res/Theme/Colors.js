/**
 * Copyright (c) 2017-Present, Punchh, Inc.
 * All rights reserved.
 *
 * @flow
 */
'use strict';

import meta from '../../meta.json';
import { Utility } from 'react-native-punchh-components';

const mapColors = metaJSON => {
	const {
		color1,
		color2,
		color3,
		color4,
		colorContrast1,
		colorContrast2,
		colorContrast3,
		colorContrast4
	} = metaJSON.theme.colors;

	const contrastColor3BW = Utility.getContrastColor(color3);
	const antiContrastColor3BW = contrastColor3BW == 'white' ? 'black' : 'white';

	const white = 'white';
	const black = 'black';
	const clear = 'transparent';
	const semiDark = 'rgb(236, 236, 236)';
	const lightGray = '#d8d8d8';
	const appShadowColor = 'rgba(0, 0, 0, 0.36)';

	const Reward = {
		METER_FILL_COLOR: metaJSON.theme.reward_meter.fgColor,
		METER_BG_COLOR: metaJSON.theme.reward_meter.bgColor,
		METER_TEXT_COLOR: metaJSON.theme.reward_meter.textColor,
		REWARD_LOGO_COLOR: color3,
		INFO_ICON_IMAGE_COLOR: colorContrast1,
		SWIPE_TEXT_COLOR: Utility.addAlphaToColor(colorContrast1, 0.5),
		NO_OFFER_VIEW_BORDER_COLOR: Utility.addAlphaToColor(colorContrast1, 0.3),
		NO_OFFER_IMAGE_TINT_COLOR: colorContrast1,
		QR_HEADER_ICON_COLOR: Utility.addAlphaToColor(colorContrast1, 0.8)
	};

	const AccountHistory = {
		ACCOUNT_HISTORY_VERTICAL_SEP_LINE: lightGray,
		ACCOUNT_HISTORY_DATE_CIRCLE_BORDER_COLOR: color2,
		ACCOUNT_HISTORY_DATE_TEXT: color2
	};

	const Buttons = {
		LINK_BUTTON_TEXT: colorContrast3,
		FAB_BG: color4,
		BUTTON_BG: color3,
		BUTTON_TEXT: colorContrast3,
		GHOST_SEARCH_TEXT: antiContrastColor3BW
	};

	const Switch = {
		SWITCH_BORDER_COLOR: semiDark,
		SWITCH_CIRCLE_BORDER_COLOR: semiDark,
		SWITCH_CIRCLE_ACTIVE: color3,
		SWITCH_CIRCLE_INACTIVE: semiDark
	};

	const Header = {
		HEADER_BG: color1,
		HEADER_BAR_BUTTON_TEXT: colorContrast1,
		HEADER_BAR_ICON_TINT_COLOR: colorContrast1,
		HEADER_CENTER_TEXT: colorContrast1,
		HEADER_SEP: clear,
		HEADER_SHADOW_COLOR: Utility.addAlphaToColor(colorContrast1, 0.7)
	};

	const RefreshControl = {
		REFRESH_CONTROL_TINT: color3,
		REFRESH_CONTROL_TEXT: color3,
		REFRESH_CONTROL_BG: colorContrast3
	};

	const Shimmer = {
		DEFAULT_SHIMMER_BG_COLOR: Utility.addAlphaToColor(color1, 0.4),
		DEFAULT_SHIMMER_FG_COLOR: color1
	};

	const CapsuleView = {
		CAPSULE_VIEW_BORDER: color2,
		CAPSULE_VIEW_TEXT: color2
	};

	const Texts = {
		DESCRIPTION_TEXT_PRIMARY: colorContrast1,
		DESCRIPTION_TEXT_SECONDARY: black,
		FAB_TEXT_COLOR: colorContrast4,
		HEADING_TEXT_PRIMARY: colorContrast1,
		HEADING_TEXT_SECONDARY: black,
		INFO_TEXT_PRIMARY: colorContrast1,
		INFO_TEXT_SECONDARY: black,
		SEPARATOR_TEXT_PRIMARY: colorContrast2,
		SEPARATOR_TEXT_SECONDARY: colorContrast1,
		SEPARATOR_TEXT_LINE_PRIMARY: colorContrast2,
		SEPARATOR_TEXT_LINE_SECONDARY: colorContrast1
	};

	const Redemption = {
		ACTIVE_REDEMPTION_CODE_TEXT: white,
		ACTIVE_REDEMPTION_TIME_TEXT: white
	};

	const SegmentControl = {
		SEGMENT_CONTROL_DEFAULT_TAB_BORDER: colorContrast1,
		SEGMENT_CONTROL_ACTIVE_TAB_BG: colorContrast1,
		SEGMENT_CONTROL_ACTIVE_TAB_BORDER: colorContrast1,
		SEGMENT_CONTROL_DEFAULT_TEXT: colorContrast1,
		SEGMENT_CONTROL_ACTIVE_TEXT: color1
	};

	const SnackBar = {
		SNACK_BAR_CANCEL_TEXT: color3
	};

	const Spinner = {
		SPINNER_BG: 'rgba(0, 0, 0, 0.7)',
		SPINNER_TITLE_TEXT: white,
		SPINNER_SUB_TITLE_TEXT: white
	};

	const MoreTab = {
		MORE_TAB_BG: color1,
		MORE_CELL_BG: color3,
		MORE_CELL_BORDER: color3,
		MORE_CELL_TITLE_TEXT: colorContrast3,
		MORE_CELL_IMAGE_TINT: colorContrast3,
		MORE_CELL_SUBTITLE_TEXT: colorContrast3,
		MORE_SOCIAL_TEXT: colorContrast1,
		MORE_SOCIAL_IMAGE_TINT: color3
	};

	const LocationBar = {
		LOCATION_BAR_BG: black
	};

	const Common = {
		TAB_BAR_COLOR: color3,
		TAB_ITEMS_ACTIVE_COLOR: colorContrast3,
		TAB_ITEMS_INACTIVE_COLOR: Utility.addAlphaToColor(colorContrast3, 0.4),
		BASE_BACKGROUND_COLOR: color1,
		BASE_BACKGROUND_TEXT_COLOR: colorContrast1,
		DEFAULT_BACKGROUND_COLOR: white,
		PERMISSIONS_CONTAINER_BG: color1,
		SHADOW_COLOR: appShadowColor,
		LOCATION_TIMING: color2,
		SEARCH_ICON_COLOR: colorContrast1,
		EXPLORE_AS_GUEST: colorContrast1,
		APP_LOGO_TINT_COLOR: colorContrast1,
		EMPTY_INBOX_IMAGE_TINT_COLOR: Utility.addAlphaToColor(color3, 0.5),
		EMPTY_INBOX_TEXT_COLOR: colorContrast1,
		ACCOUNT_HISTORY_IMAGE_TINT_COLOR: Utility.addAlphaToColor(color3, 0.5),
		ACCOUNT_TEXT_COLOR: colorContrast1
	};

	const frameworkCopy = {
		...Reward,
		...AccountHistory,
		...Buttons,
		...Switch,
		...Header,
		...RefreshControl,
		...Shimmer,
		...CapsuleView,
		...Texts,
		...LocationBar,
		...Redemption,
		...SegmentControl,
		...SnackBar,
		...Spinner,
		...MoreTab,
		...Common
	};

	const OLO = {
		MENU_SELECTED_COLOR: black,
		LOCATION_BAR_TEXT_COLOR: 'rgba(40, 40, 41, 1)',
		BREADCRUMB_BG: color1,
		BREADCRUMB_SELECTED_COLOR: colorContrast1,
		BREADCRUMB_DEFAULT_COLOR: colorContrast1,
		CREDIT_CARD_CELL_BG: color4,
		CREDIT_CARD_BORDER_COLOR: color4,
		CART_TINT_COLOR: colorContrast1,
		CART_ITEM_BG_COLOR: color1,
		CART_ITEM_BORDER_COLOR: colorContrast1,
		CART_ITEM_TEXT_COLOR: colorContrast1
	};

	const GiftCard = {
		GC_INVALID_INPUT_COLOR: color3,
		GC_GIFT_A_CARD_BACKGROUND_COLOR: color1,
		GC_GIFT_A_CARD_TEXT_COLOR: colorContrast1
	};

	const themeColors = {
		color1,
		color2,
		color3,
		color4,
		colorContrast1,
		colorContrast2,
		colorContrast3,
		colorContrast4
	};

	return {
		...OLO,
		...GiftCard,
		...frameworkCopy,
		themeColors
	};
};

module.exports = { Colors: mapColors(meta), mapColors };
