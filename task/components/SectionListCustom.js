import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  SectionList,
} from "react-native";
import RenderDate from "./renderDate";
import RenderRest from "./renderRest";
const DATA = [
  {
    title: "2022",
    data: [
      {
        date: "Dec 23",
        title: "Item gifted",
        subtitle: "+item",
        description:
          "SU - 25 cents per gallon Max 20 Gallons(SU - 25 cents per gallon Max 20 Gallons)",
        points: 0,
        Items: 1,
        last: true,
      },
      {
        date: "Dec 24",
        title: "Item gifted",
        subtitle: "+item",
        description: "test Donation (Sign up camoaign)",
        points: 0,
        Items: 2,
        last: false,
      },
    ],
  },
];

const SectionListCustom = () => {
  const customRenderItem = (e) => {
    let { item } = e;
    let { date, title, subtitle, description, points, Items, last } = item;
    // console.log(points, Items);
    return (
      <View style={styles.itemcontainer}>
        <View style={styles.datecontainer}>
          <RenderDate date_in={date} />
        </View>
        {last ? (
          <View style={[styles.roadcontainer]}></View>
        ) : (
          <View style={[styles.hollowcontainer]}></View>
        )}
        <View style={styles.restcontainer}>
          <RenderRest
            title_in={title}
            subtitle_in={subtitle}
            description_in={description}
            points_in={points}
            items_in={Items}
          />
        </View>
      </View>
    );
  };

  const customRenderHeader = (k) => {
    let {
      section: { title },
    } = k;
    console.log("title is ", title);
    return (
      <View>
        <Text>{title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.listcontainer}>
      <SectionList
        sections={DATA}
        renderItem={(e) => customRenderItem(e)}
        renderSectionHeader={(k) => (
          <View style={styles.headercontainer}>
            <View style={styles.header}>
              <Text style={styles.headertext}>{k.section.title}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listcontainer: {
    backgroundColor: "rgba(239,239,239,255)",
    // marginTop: 4,
    padding: 2,
  },
  headercontainer: {
    // borderColor:'black',
    // borderWidth:1,
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  header: {
    marginLeft: 9,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: "rgba(216,42,51,255)",
    borderRadius: 10,
  },
  headertext: {
    color: "white",
  },
  itemcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    // borderColor: "black",
    // borderWidth: 1,
    height: 170,
  },
  datecontainer: {
    backgroundColor: "rgba(216,42,51,255)",
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 10,
    marginLeft: 15,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  restcontainer: {
    backgroundColor: "white",
    flex: 0.95,
    // borderColor: "black",
    // borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    alignSelf: "flex-start",
    marginLeft: 30,
    marginTop: 12,
  },
  roadcontainer: {
    width: 3,
    height: 200,
    backgroundColor: "rgba(216,42,51,255)",
    marginLeft: -28.5,
    zIndex: -1,
  },
  hollowcontainer: {
    width: 5,
    height: 0,
    backgroundColor: "rgba(216,42,51,255)",
    marginLeft: -28.5,
    zIndex: -1,
  },
});

export default SectionListCustom;
