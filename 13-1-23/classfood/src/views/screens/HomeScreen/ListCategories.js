import React, { Component } from 'react'
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../../consts/colors';
import categories from '../../../consts/categories';
import foods from '../../../consts/foods';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;


export default class ListCategories extends Component {
    constructor(props) {
      super(props)
      this.state={
        selectedCategoryIndex:0
      }
    }
  render() {
    return (
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => this.setState({selectedCategoryIndex:index})}>
            <View
              style={{
                backgroundColor:
                this.state.selectedCategoryIndex == index
                    ? COLORS.primary
                    : COLORS.secondary,
                ...style.categoryBtn,
              }}>
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{height: 35, width: 35, resizeMode: 'cover'}}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                  this.state.selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.primary,
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }
}


// const ListCategories = () => {
//     return (
    //   <ScrollView
    //     horizontal
    //     showsHorizontalScrollIndicator={false}
    //     contentContainerStyle={style.categoriesListContainer}>
    //     {categories.map((category, index) => (
    //       <TouchableOpacity
    //         key={index}
    //         activeOpacity={0.8}
    //         onPress={() => setSelectedCategoryIndex(index)}>
    //         <View
    //           style={{
    //             backgroundColor:
    //               selectedCategoryIndex == index
    //                 ? COLORS.primary
    //                 : COLORS.secondary,
    //             ...style.categoryBtn,
    //           }}>
    //           <View style={style.categoryBtnImgCon}>
    //             <Image
    //               source={category.image}
    //               style={{height: 35, width: 35, resizeMode: 'cover'}}
    //             />
    //           </View>
    //           <Text
    //             style={{
    //               fontSize: 15,
    //               fontWeight: 'bold',
    //               marginLeft: 10,
    //               color:
    //                 selectedCategoryIndex == index
    //                   ? COLORS.white
    //                   : COLORS.primary,
    //             }}>
    //             {category.name}
    //           </Text>
    //         </View>
    //       </TouchableOpacity>
    //     ))}
    //   </ScrollView>
//     );
//   };

  const style = StyleSheet.create({
    header: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    inputContainer: {
      flex: 1,
      height: 50,
      borderRadius: 10,
      flexDirection: 'row',
      backgroundColor: COLORS.light,
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    sortBtn: {
      width: 50,
      height: 50,
      marginLeft: 10,
      backgroundColor: COLORS.primary,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    categoriesListContainer: {
      paddingVertical: 30,
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    categoryBtn: {
      height: 45,
      width: 120,
      marginRight: 7,
      borderRadius: 30,
      alignItems: 'center',
      paddingHorizontal: 5,
      flexDirection: 'row',
    },
    categoryBtnImgCon: {
      height: 35,
      width: 35,
      backgroundColor: COLORS.white,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      height: 220,
      width: cardWidth,
      marginHorizontal: 10,
      marginBottom: 20,
      marginTop: 50,
      borderRadius: 15,
      elevation: 13,
      backgroundColor: COLORS.white,
    },
    addToCartBtn: {
      height: 30,
      width: 30,
      borderRadius: 20,
      backgroundColor: COLORS.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  