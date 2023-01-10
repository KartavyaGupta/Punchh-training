import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native";
import COLORS from "../../consts/colors";
import { PrimaryButton } from "../components/Button";
// import { PrimaryButton } from "../components/Button";

const OnBoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ height: 400 }}>
        <Image
          // style={{ width: "100%", resizeMode: "contain", top: -150, borderColor:'red',borderWidth:2  }}
          style={{ width: "100%", resizeMode: "contain", top: -150 }}
          source={require("../../assets/onboardImage.png")}
        />
      </View>
      <View style={style.textcontainer}>
        <View>
          <Text style={{fontSize:32,fontWeight:'bold',textAlign:'center'}}>Delicious Food</Text>
          <Text style={{fontSize:20, marginTop:18, color:COLORS.grey, textAlign:'center'}}>We help you to find best and delicious food</Text>
        </View>
        <View style={style.indicatorcontainer}>
          <View style={style.currentindicator}></View>
          <View style={style.indicator}></View>
          <View style={style.indicator}></View>
        </View>
        {/* add primary button here */}
        <PrimaryButton title="Get Started" onPress={()=>{navigation.navigate('Home')}} />
      </View>
    </SafeAreaView>
  );
};

const style=StyleSheet.create({
  textcontainer:{
    // borderColor:'red',
    // borderWidth:2,
    flex:1,
    paddingHorizontal:50,
    justifyContent:'space-between',
    paddingBottom:40,
    paddingHorizontal:50,
  },
  indicatorcontainer:{
    // borderColor:'red',
    // borderWidth:2,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:50,
  },
  currentindicator:{
    height:12,
    width:30,
    borderRadius:10,
    backgroundColor:COLORS.primary,
    marginHorizontal:5,
  },
  indicator:{
    height:12,
    width:12,
    borderRadius:6,
    backgroundColor:COLORS.grey,
    marginHorizontal:5,
  }

})

export default OnBoardScreen;
// const OnBoardScreen = ({navigation}) => {
//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
//       <View style={{height: 400}}>
//         <Image
//           style={{
//             width: '100%',
//             resizeMode: 'contain',
//             top: -150,
//           }}
//           source={require('../../assets/onboardImage.png')}
//         />
//       </View>
//       <View style={style.textContainer}>
//         <View>
//           <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>
//             Delicious Food
//           </Text>
//           <Text
//             style={{
//               marginTop: 20,
//               fontSize: 18,
//               textAlign: 'center',
//               color: COLORS.grey,
//             }}>
//             We help you to find best and delicious food
//           </Text>
//         </View>
//         <View style={style.indicatorContainer}>
//           <View style={style.currentIndicator} />
//           <View style={style.indicator} />
//           <View style={style.indicator} />
//         </View>
//         <PrimaryButton
//           onPress={() => navigation.navigate('Home')}
//           title="Get Started"
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const style = StyleSheet.create({
//   textContainer: {
//     flex: 1,
//     paddingHorizontal: 50,
//     justifyContent: 'space-between',
//     paddingBottom: 40,
//     // borderColor:'red',
//     // borderWidth:2,
//   },
//   indicatorContainer: {
//     height: 50,
//     flex: 1,
//     justifyContent: 'center',
//     flexDirection: 'row',
//     alignItems: 'center',
//     // borderColor:'red',
//     // borderWidth:2,
//   },
//   currentIndicator: {
//     height: 12,
//     width: 30,
//     borderRadius: 10,
//     backgroundColor: COLORS.primary,
//     marginHorizontal: 5,
//     // borderColor:'red',
//     // borderWidth:2,
//   },
//   indicator: {
//     height: 12,
//     width: 12,
//     borderRadius: 6,
//     backgroundColor: COLORS.grey,
//     marginHorizontal: 5,
//     // borderColor:'red',
//     // borderWidth:2,
//   },
// });

// export default OnBoardScreen;
