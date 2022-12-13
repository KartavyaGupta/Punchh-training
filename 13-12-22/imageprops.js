import React from 'react'
import { View } from 'react-native';
import { Image } from 'react-native';
const Imageprops = () => {
  return (
    <View>
        <Image source={require('./assets/flower.jpg')} style={{width:500,height:500,resizeMode:'contain',borderWidth:10,borderColor:"red",borderRadius:10,opacity:0.8,marginTop:30}}/>
    </View>
  )
}

export default Imageprops;