import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { Text } from "react-native";
const Stack = createStackNavigator();
console.log(Stack);
import HomeScreen from "./assets/screens/homescreen";
import AboutScreen from "./assets/screens/aboutscreen";
import ContactScreen from "./assets/screens/contactscreen";
import ServiceScreen from "./assets/screens/servicescreen";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home" screenOptions={{headerStyle:{backgroundColor:'blue'}}}>
    //     <Stack.Screen name="About" component={AboutScreen} />
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Home"
    //     screenOptions={{ headerStyle: { backgroundColor: "blue" } }}
    //   >
    //     <Stack.Screen name="About" component={AboutScreen} />
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="About">
    //     <Stack.Screen
    //       name="About"
    //       component={AboutScreen}
    //       options={{
    //         headerStyle: { backgroundColor: "blue" },
    //         title: "about screen",
    //         headerTintColor: "red",
    //         headerTitleStyle: { fontStyle: "italic" },
    //         headerTitleAlign:'center',headerShown:true,
    //       }}
    //     />
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="About">
    //     <Stack.Screen
    //       name="About"
    //       component={AboutScreen}
    //       options={{
    //         headerStyle: { backgroundColor: "blue" },
    //         title: "about screen",
    //         headerTintColor: "red",
    //         headerTitleStyle: { fontStyle: "italic" },
    //         headerTitleAlign: "center",
    //         headerShown: true,
    //       }}
    //     />
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Group screenOptions={{ headerStyle: { backgroundColor: "blue" } }}
        >
        <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Group >
        <Stack.Screen name="Service" component={ServiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
