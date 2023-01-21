/**
 * Copyright (c) 2017-Present, Punchh, Inc.
 * All rights reserved.
 *
 * @flow
 */
'use strict';

const imagePlaceholder = require('./common/placeholder.png');
const imagePlaceholderStyle = { width: 176, height: 176, resizeMode: 'contain' };

const imagePlaceholderSmall = require('./common/placeholder_small.png');
const imagePlaceholderSmallStyle = { width: 34, height: 34, resizeMode: 'contain' };

const imagePlaceholderSmallActive = require('./common/placeholder_small_active.png');
const imagePlaceholderSmallActiveStyle = { width: 34, height: 34, resizeMode: 'contain' };

const AppSpecific = {
	splashLogo: { source: require('./common/splashLogo.png') },
	commonSignupLogo: { source: require('./common/commonSignupLogo.png') },
	mapFocus: {
		source: require('./location/mapFocus.png'),
		style: {
			width: 64,
			height: 64,
			marginLeft: 5,
			marginRight: 5,
			alignItems: 'flex-end',
			justifyContent: 'flex-end',
			alignSelf: 'flex-end'
		}
	},
	buttonBG: {
		source: require('./common/button_bg.png')
	},
	tick: {
		source: require('./location/checkFavorite.png'),
		style: {
			width: 9,
			height: 7
		}
	},
	tickFav: {
		source: require('./location/checkFavoriteButton.png'),
		style: {
			width: 9,
			height: 7
		}
	},
	search: {
		source: require('./location/search.png'),
		style: {
			width: 34,
			height: 34
		}
	},
	radio: {
		source: require('./cell/radio.png'),
		style: {
			width: 34,
			height: 34
		}
	},
	radioSelected: {
		source: require('./cell/radioActive.png'),
		style: {
			width: 34,
			height: 34
		}
	},

	mapPinBasic: { source: require('./location/map_pin_basic.png') },
	mapPinBarbecue: { source: require('./location/map_pin_barbecue.png') },
	mapPinCafe: { source: require('./location/map_pin_cafe.png') },
	mapPinChinese: { source: require('./location/map_pin_chinese.png') },
	mapPinDessert: { source: require('./location/map_pin_dessert.png') },
	mapPinDrinks: { source: require('./location/map_pin_drinks.png') },
	mapPinFastCasual: { source: require('./location/map_pin_casual.png') },
	mapPinFastFood: { source: require('./location/map_pin_food.png') },
	mapPinDining: { source: require('./location/map_pin_dining.png') },
	mapPinPizza: { source: require('./location/map_pin_pizza.png') },
	mapPin: { source: null, style: { width: 34, height: 38 } },
	mapPinCurrentLocation: { source: require('./location/pinCurrentLoc.png') },

	welcomeLogo: {
		source: require('./common/aboardBg.png'),
		style: {
			width: '100%',
			height: '100%',
			resizeMode: 'cover'
		}
	},
	cameraPermission: { source: imagePlaceholder, style: imagePlaceholderStyle },
	LocationPermission: {
		source: require('./location/locationGraphics.png'),
		style: { width: 107, height: 107, marginVertical: '5%' }
	},
	notificationPermission: {
		source: imagePlaceholder,
		style: imagePlaceholderStyle
	},
	profilePlaceholder: { source: imagePlaceholder },
	profileEditButton: { source: imagePlaceholder },
	migrationLogo: {
		source: require('./common/migrate.png'),
		style: {
			width: '100%',
			height: '60%'
		}
	},
	commonPlaceholder: { source: imagePlaceholder },
	pointUnlockRedemption: { source: imagePlaceholder, style: imagePlaceholderSmallActiveStyle },
	inviteFriends: {
		source: require('./common/invite.png'),
		style: {
			width: '100%',
			height: undefined,
			aspectRatio: 1.05
		}
	},
	imageLock: { source: imagePlaceholder, style: imagePlaceholderSmallActiveStyle },

	noOffers: { source: require('./reward/no_offers.png'), style: { width: 80, height: 80 } },

	meterBucketBg: { source: require('./reward/bucket_meter_bg.png'), style: { width: 143, height: 161 } },
	meterBucketFg: { source: require('./reward/bucket_meter_fg.png'), style: { width: 143, height: 161 } },
	meterBurgerBg: { source: require('./reward/burger_meter_bg.png'), style: { width: 143, height: 197 } },
	meterBurgerFg: { source: require('./reward/burger_meter_fg.png'), style: { width: 143, height: 197 } },
	meterHorizontalBg: { source: require('./reward/meter_horizontal_bg.png'), style: { width: 228, height: 236 } },
	meterHorizontalFg: { source: require('./reward/meter_horizontal_fg.png'), style: { width: 228, height: 236 } },

	semiCircle: { source: require('./reward/meter.png'), style: { height: 166, width: 375 } },
	verticalStrip: { source: require('./reward/meter_progress.png'), style: { width: 150, height: 216 } },
	pizzaFilled: { source: require('./reward/pizza_filled.png'), style: { width: 200, height: 200 } },
	pizzaUnfilled: { source: require('./reward/pizza_unfilled.png'), style: { width: 200, height: 200 } },
	coffee: { source: require('./reward/coffee.png'), style: { width: 200, height: 200 } },
	cup: { source: require('./reward/cup.png'), style: { width: 200, height: 200 } },
	meterArc: { source: require('./reward/meter_arc.png'), style: { width: 375, height: 230 } },
	meterHorizontalStrip: { source: require('./reward/meter_horizontal_strip.png'), style: { width: 198, height: 155 } },

	meterBg: { source: require('./reward/meter_bg.png'), style: null },
	meterFg: { source: require('./reward/meter_fg.png'), style: null },
	surpriseDelightLogo: { source: require('./reward/meter_fg.png'), style: { width: 375, height: 230 } },

	breadcrumTick: { source: require('./common/breadcrumTick.png') },

	//About US
	infoLogo: {
		source: require('./common/about.png'),
		style: { width: '100%', height: undefined, aspectRatio: 1.05 }
	},

	//Congratulations
	congratsImage: { source: imagePlaceholder, style: imagePlaceholderStyle },

	//feedback
	rate_0_sel: { source: imagePlaceholderSmallActive },
	rate_1_sel: { source: imagePlaceholderSmallActive },
	rate_2_sel: { source: imagePlaceholderSmallActive },
	rate_3_sel: { source: imagePlaceholderSmallActive },
	rate_4_sel: { source: imagePlaceholderSmallActive },
	rate_0_nonsel: { source: imagePlaceholderSmall },
	rate_1_nonsel: { source: imagePlaceholderSmall },
	rate_2_nonsel: { source: imagePlaceholderSmall },
	rate_3_nonsel: { source: imagePlaceholderSmall },
	rate_4_nonsel: { source: imagePlaceholderSmall },
	rateImageStyle: { ...imagePlaceholderSmallStyle },
	star_sel: { source: require('./feedback/star_sel.png'), style: { height: 40, width: 40 } },
	star_nonsel: { source: require('./feedback/star_nonsel.png'), style: { height: 40, width: 40 } },
	activeRedemptionArrow: {
		source: require('./common/activeRedemptionArrow.png'),
		style: { width: 5, height: 8, top: 1.5 }
	}
};

const tabIconStyle = { width: 34, height: 34 };
const tabIconActiveStyle = { ...tabIconStyle };

const tabs = {
	tab1: { source: require('./tabs/tab1.png'), style: tabIconStyle },
	tab1Selected: { source: require('./tabs/tab1_active.png'), style: tabIconActiveStyle },
	tab2: { source: require('./tabs/tab2.png'), style: tabIconStyle },
	tab2Selected: { source: require('./tabs/tab2_active.png'), style: tabIconActiveStyle },
	tab3: { source: require('./tabs/tab3.png'), style: tabIconStyle },
	tab3Selected: { source: require('./tabs/tab3_active.png'), style: tabIconActiveStyle },
	tab4: { source: require('./tabs/tab4.png'), style: tabIconStyle },
	tab4Selected: { source: require('./tabs/tab4_active.png'), style: tabIconActiveStyle },
	tab5: { source: require('./tabs/tab5.png'), style: tabIconStyle },
	tab5Selected: { source: require('./tabs/tab5_active.png'), style: tabIconActiveStyle }
};

const moreSocialIconSize = { height: 30, width: 30 };
const more = {
	more_about: {
		source: require('./More/about.png')
	},
	more_gift: {
		source: require('./More/giftcard.png')
	},
	more_help: {
		source: require('./More/help.png')
	},
	more_history: {
		source: require('./More/history.png')
	},
	more_coupon: {
		source: require('./More/coupon.png')
	},
	more_invite: {
		source: require('./More/invite.png')
	},
	more_logout: {
		source: require('./More/logout.png')
	},
	more_news: {
		source: require('./More/help.png')
	},
	more_profile: {
		source: require('./More/profile.png')
	},
	facebook_follow: {
		source: require('./social/facebookFollow.png'),
		style: moreSocialIconSize,
		resizeMode: 'contain'
	},
	twitter_follow: {
		source: require('./social/twitterFollow.png'),
		style: { height: 30, width: 35 },
		resizeMode: 'contain'
	},
	youtube_follow: {
		source: require('./social/youtube.png'),
		style: { height: 30, width: 42 },
		resizeMode: 'contain'
	},
	instagram_follow: {
		source: require('./social/instagramFollow.png'),
		style: moreSocialIconSize,
		resizeMode: 'contain'
	},
	bgMoreScreen: {
		source: require('./background/bg.png'),
		style: { flex: 1 },
		resizeMode: 'contain'
	}
};

const registration = {
	fbIcon: { source: require('./social/facebookFollow.png') },
	fbIconConnect: { source: require('./social/fbIcon.png') },
	logo: { source: require('./common/logo.png') },
	hidePassword: { source: require('./common/hide.png') },
	showPassword: { source: require('./common/show.png') }
};

const user = {
	userPlaceHolder: { source: require('./User/profile.png'), style: null }
};

const common = {
	headerBackground: { source: require('./background/header.png') },
	close: { source: require('./common/close.png'), style: tabIconStyle },
	infoIcon: { source: require('./common/info.png'), style: { width: 30, height: 30 } }
};

const background = {
	default_bg: { source: require('./background/bg.png'), style: null },
	reward_bg: { source: require('./background/reward.png'), style: null },
	header: { source: require('./background/header.png'), style: null }
};

const button = {
	buttonFullWidth: { source: require('./button/button_full_width.png'), style: null }
};

module.exports = {
	...common,
	...more,
	...user,
	...registration,
	...AppSpecific,
	...tabs,
	...button,
	...background
};
