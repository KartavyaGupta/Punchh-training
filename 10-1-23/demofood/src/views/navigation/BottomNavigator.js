import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import { View } from "react-native";
import { Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: COLORS.primary,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="home-filled" size={28} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="LocalMall"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="local-mall" size={28} color={color} />;
          },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <View style={{height:60,width:60,borderColor:COLORS.primary,borderWidth:2,justifyContent:'center',alignItems:'center',top:-25,backgroundColor:COLORS.white,borderRadius:30,elevation:5}}>
                <Icon name="search" size={28} color={color} />
              </View>
            );
          },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="whoknows"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="favorite" size={28} color={color} />;
          },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="CartScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="shopping-cart" size={28} color={color} />;
          },
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};
export default BottomNavigator;
