import React from 'react';
import TimelineList from '@punchh/react-native-punchh-components/src/UI/AccountHistory/TimelineList';
import { CapsuleView } from '#CommonComponents';
import { Dimensions, SectionList, Text, View } from 'react-native';
const { height } = Dimensions.get('window');
import { LoyaltyHelper } from '#Utils';
import data from './data.json'
TimelineList.prototype.renderBarItems = function (styles, item) {
	return (
		<View style={styles.barItemContainer}>
			<CapsuleView style={styles.barItemCapsuleView} textStyle={styles.barItemCapsuleText}>
				{item.bar_column1}

			</CapsuleView>
			{/* <CapsuleView style={styles.barItemCapsuleView} textStyle={styles.barItemCapsuleText}>
				{item.bar_column2}
			</CapsuleView> */}
			<CapsuleView style={styles.barItemCapsuleView} textStyle={styles.barItemCapsuleText}>
				{item.bar_column3}
			</CapsuleView>
		</View>
	);
}

TimelineList.prototype.render = function () {
	const styles = this.styleSheet();
	// const content = LoyaltyHelper.processTimelineData(this.props.userAccountHistoryData);
	const content = LoyaltyHelper.processTimelineData(data);
	console.log(data);
	return (
		<SectionList
			renderSectionHeader={this.renderSectionHeader}
			renderItem={this.renderItem}
			sections={content}
			style={styles.listStyle}
			refreshControl={this.renderRefreshControl()}
			keyExtractor={(item, index) => item.title + index}
			ListEmptyComponent={this.listEmptyComponent(styles)}
			stickySectionHeadersEnabled
		/>
	);
}


TimelineList.prototype.customStyles = function () {
	const { Colors } = this.theme();
	return {
		container: {
			flexDirection: 'row',
			backgroundColor: "#edefee",
			// backgroundColor: "black",
		},
		listStyle: {
			flex: 1,
			marginTop: 5,
			paddingRight: 8,
		},
		EDSImageStyle: {
			tintColor: Colors.ACCOUNT_HISTORY_IMAGE_TINT_COLOR
		},
		EDSImageContainTextStyle: {
			color: Colors.ACCOUNT_TEXT_COLOR,
			top: 5
		},
		sectionYearContainer: {
			flex: 1,
			marginLeft: this.props.dateContentPadding,
			paddingTop: 5,
			justifyContent: 'center',
			width: this.props.dateCircleWidth,
			// backgroundColor: Colors.ACCOUNT_HISTORY_YEAR_BG,
		},
		sectionYearCapsuleText: {
			fontSize: 10,
			fontSize: 14,
			color: 'white',
			borderColor: 'white',
			borderWidth: 0,
		},
		capsuleViewStyle: {
			marginRight: undefined,
			alignSelf: 'center',
			backgroundColor: 'red',
			borderWidth: 0,
		},
		dateContainer: {
			alignItems: 'center',
			paddingLeft: this.props.dateContentPadding
		},
		contentContainer: {
			marginLeft: 15,
			paddingVertical: this.props.contentVerticalPadding,
			flex: 1,
			backgroundColor: '#f6f6f6',
			paddingHorizontal: 15,
			marginBottom: 10,
			borderRadius: 20,
			marginRight: 10,
		},
		verticalTopSeparatorView: {
			flex: 0,
			height: this.props.contentVerticalPadding,
			// borderWidth: 0,
			// borderColor: 'yellow',
			width: 0.5,
			backgroundColor: 'red'
		},
		verticalSeparatorView: {
			flex: 1,
			backgroundColor: Colors.ACCOUNT_HISTORY_VERTICAL_SEP_LINE,
			width: 0.5,
			backgroundColor: 'red',
		},
		dateCircleView: {
			width: this.props.dateCircleWidth,
			height: this.props.dateCircleWidth,
			borderRadius: this.props.dateCircleWidth / 2,
			borderWidth: 0,
			padding: 2,
			backgroundColor: Colors.ACCOUNT_HISTORY_DATE_CIRCLE_BG,
			// borderColor: Colors.ACCOUNT_HISTORY_DATE_CIRCLE_BORDER_COLOR,
			// borderWidth: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: 'red',
		},
		dateText: {
			textAlign: 'center',
			// color: Colors.ACCOUNT_HISTORY_DATE_TEXT,
			color: 'white',
			fontSize: 14,

		},
		titleText: {
			fontSize: 14,
			fontWeight: 'bold',
			color: Colors.ACCOUNT_HISTORY_TITLE_TEXT
		},
		eventNegativeText: {
			color: Colors.ACCOUNT_HISTORY_EVENT_NEGATIVE_TEXT
		},
		eventPendingText: {
			color: Colors.ACCOUNT_HISTORY_EVENT_PENDING_TEXT
		},
		eventPositiveText: {
			color: Colors.ACCOUNT_HISTORY_EVENT_POSITIVE_TEXT,
			fontStyle: 'italic',
			color: '#116db1'
		},
		eventStyle: {
			color: Colors.ACCOUNT_HISTORY_DESC_TEXT
		},
		descriptionText: {
			flex: 0,
			color: Colors.ACCOUNT_HISTORY_DESC_TEXT,
			marginVertical: 8
		},
		barItemContainer: {
			flexDirection: 'row',
			flex: 1,
			flexWrap: 'wrap',
			// backgroundColor: 'red',
		},
		barItemCapsuleView: {
			marginRight: 10,
			backgroundColor: '#e0e7ef',

		},
		barItemCapsuleText: {
			fontSize: 11,
			color: "#0f6caf"
		},
		emptyViewStyle: {
			marginTop: height / 2 - 60,
			alignItems: 'center'
		},
		textTitleStyle: {},
		emptyListCell: { flex: 1, height: height - 64 - 49 }
	};
}	