/**
 * Copyright (c) 2017-Present, Punchh, Inc.
 * All rights reserved.
 *
 * @flow
 */
'use strict';

export default sharedGRP => [
	{
		type: 'Stores', // Required
		title: 'Stores', // Optional, if empty, `type` will be used instead
		subtitle: 'View locations nearby.',
		icon: 'stores', // Pass any of UIApplicationShortcutIconType<name>
		userInfo: {
			url: 'app://locations' // provide custom data, like in-app url you want to open
		}
	},
	...(sharedGRP.config.isOLOAvailable()
		? [
				{
					type: 'Order',
					title: 'Order',
					subtitle: 'Order Online.',
					icon: 'orders',
					userInfo: {
						url: 'app://online-ordering'
					}
				}
		  ]
		: []),
	{
		type: 'Rewards',
		title: 'Rewards',
		subtitle: 'Earn/Redeem rewards.',
		icon: 'rewards',
		userInfo: {
			url: 'app://offers'
		}
	},
	{
		type: 'Inbox',
		title: 'Inbox',
		subtitle: 'View inbox.',
		icon: 'inbox',
		userInfo: {
			url: 'app://news'
		}
	}
];
