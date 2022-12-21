import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Activityindicatorinclass from './components/activityindicator';
import Imageinclass from './components/imageinclass';
import Switchinclass from './components/switchinclass';
import Pressableinclass from './components/pressableinclass';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your</Text>
      <StatusBar style="auto" />
      <Activityindicatorinclass/>
      <Imageinclass />
      <Switchinclass />
      
      <Pressableinclass />
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
