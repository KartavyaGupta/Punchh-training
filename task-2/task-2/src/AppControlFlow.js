/**
 * Copyright (c) 2017-Present, Punchh, Inc.
 * All rights reserved.
 *
 * @flow
 */
'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Actions, BaseControlFlow, AppFlow } from 'react-native-punchh-components';

import AppNavigation from './Navigation/AppNavigation';
import * as RootNavigation from './Navigation/RootNavigation';

class AppControlFlow extends BaseControlFlow {
	getAppNavigation() {
		return <AppNavigation navigationActions={RootNavigation} />;
	}

	setupAppFlow() {
		AppFlow.shared.setup({
			AppNavigation: this.getAppNavigation(),
			navigation: RootNavigation,
			flow: this.handleAllScene
		});
	}

	navigate(screen, object) {
		RootNavigation.navigate(screen, object);
	}
}

export default connect(
	state => ({
		isMigrationAllowed: state.cardData.migration_allowed,
		enablePromotionalCoupons: state.cardData.enable_promotional_coupons,
		enableChallenges: state.cardData.enable_challenges,
		enableGiftCards: state.cardData.enable_gift_cards,
		userData: state.userData,
		isLogin: !!state.userData
	}),
	{
		setCurrentCheckInData: Actions.setUserCurrentCheckInData,
		fetchLoyalty: Actions.fetchLoyalty
	}
)(AppControlFlow);
