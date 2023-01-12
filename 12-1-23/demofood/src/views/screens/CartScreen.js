import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';
import {PrimaryButton} from '../components/Button';

const CartScreen = ({navigation}) => {
  const CartCard = ({item}) => {
    return (
      <View style={[style.borderadd,style.cartCard]}>
        <Image source={item.image} style={{height: 80, width: 80}} />
        <View
          style={[style.borderadd,{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }]}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {item.ingredients}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>${item.price}</Text>
        </View>
        <View style={[style.borderadd,{marginRight: 20, alignItems: 'center'}]}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>3</Text>
          <View style={[style.borderadd,style.actionBtn]}>
            <Icon name="remove" size={25} color={COLORS.white} />
            <Icon name="add" size={25} color={COLORS.white} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={[style.borderadd,{backgroundColor: COLORS.white, flex: 1}]}>
      <View style={[style.borderadd,style.header]}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={foods}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={[style.borderadd,{marginTop: 20, paddingHorizontal: 30,}]}
        ListFooterComponent={() => (
          <View style={style.borderadd}>
            <View
              style={[style.borderadd,{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }]}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total Price
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>$50</Text>
            </View>
            <View style={[style.borderadd,{marginHorizontal: 30}]}>
              <PrimaryButton title="CHECKOUT" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignContent: 'center',
  },
  borderadd:{
    // borderColor:'red',
    // borderWidth:2,
  }
});

export default CartScreen;
