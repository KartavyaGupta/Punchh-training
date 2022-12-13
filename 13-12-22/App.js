import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Androidtoast from './androidtoast';
import Touchablenativefeedback_imp from './touchablenativefeedback';
import Imageprops from './imageprops';
import Viewprops from './viewprops';
import Textprops from './textprops';
import Pressable_ex from './mypressble';
import Refresh_ex from './refershcontrol_ex';
import Iav_ex from './inputaccessory_ex';

export default function App() {
  return (
    <View style={styles.container}>   
      {/* <Androidtoast/>
      <Pressable_ex/> */}
      {/* <Refresh_ex/> */}
      {/* <Iav_ex/> */}
      <Touchablenativefeedback_imp/> 
      {/* <Imageprops />
      <Viewprops/>
      <Textprops/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
