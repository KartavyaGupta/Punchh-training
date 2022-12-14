import {React,useState} from 'react'
import {View, Stylesheet, Text,TextInput,Appearance} from 'react-native'

export default function Darkmode() {
    const colorScheme = Appearance.getColorScheme();

    console.log(colorScheme)
    const [name,setName] = useState("")
    const [age,setAge] = useState(0)
    return(
        <View style = {{
            flex:1,
            padding:20,
            backgroundColor:colorScheme ==='light' ? "white" : "gray",

        }}>
            <TextInput style={{
                marginTop:20,
                backgroundColor:colorScheme==='light' ? "gray" : "white",
                color:colorScheme==='light' ? "white" : "black",
                
            }}
            placeholder = "Enter your Name"
            onChangeText = {(text) =>setName(text) }
            />
            <TextInput style={{
                marginTop:20,
                backgroundColor:colorScheme==='light' ? "gray" : "white",
                color:colorScheme==='light' ? "white" : "black"
            }}
            placeholder = "Enter your Age"
            onChangeText = {(text) =>setAge(text) }
            />
            <Text style = {{
                fontSize:20,
                marginTop:20,
                color:colorScheme==='light' ? "gray" : "white"
            }}
            >{name} {age}</Text>
        </View>
    )
}