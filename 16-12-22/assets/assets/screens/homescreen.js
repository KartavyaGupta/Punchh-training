import { Link } from "@react-navigation/native";
import { View } from "react-native";
import { Text } from "react-native";
const HomeScreen = () => {
  return (
    //   <View>
    //     <Text>Homescreen</Text>
    //   </View>
    <View>
      <Text>homescreen</Text>
      <Link to={{screen:'Contact'}}>go to contact</Link>
      <Link to={{screen:'Service'}}>go to service</Link>
    </View>
  );
};
export default HomeScreen;
