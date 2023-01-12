import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {SecondaryButton} from '../components/Button';

const DetailsScreen = (e) => {
  let {navigation, route} =e;
  const item = route.params;
  console.log(e);
  return (
    <SafeAreaView style={[style.borderadd,{backgroundColor: COLORS.white}]}>
      <View style={[style.borderadd,style.header]}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View
          style={[style.borderadd,{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }]}>
          <Image source={item.image} style={{height: 220, width: 220}} />
        </View>
        <View style={[style.borderadd,style.details]}>
          <View
            style={[style.borderadd,{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }]}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: COLORS.white}}>
              {item.name}
            </Text>
            <View style={[style.borderadd,style.iconContainer]}>
              <Icon name="favorite-border" color={COLORS.primary} size={25} />
            </View>
          </View>
          <Text style={style.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, possimus! Magni exercitationem, amet eos nobis ad porro rem dicta earum officia. Accusamus quis vel quam eveniet? Expedita saepe dolores ea aut eum voluptate, pariatur beatae assumenda debitis adipisci perspiciatis, laborum nemo. Blanditiis nihil totam dolores consequatur officiis nobis, sint iure repellendus praesentium. Quod doloremque alias, aliquam voluptatem ullam reiciendis adipisci quo harum autem quis quidem sunt, minus tempore at fuga quam, odio minima natus atque nihil doloribus repellendus consectetur beatae! Quos necessitatibus officia, nam dolorum laborum excepturi accusamus quod, dicta aut, quidem commodi. Nobis aliquid minima, quisquam repudiandae rem illum assumenda numquam. Fugiat porro quas eligendi aliquid ipsa praesentium dolorum magnam? Impedit corrupti maxime sequi voluptatem assumenda iste autem provident? Qui ea veritatis, dolor inventore tenetur ratione facere natus obcaecati ad omnis distinctio. Quas quos asperiores magnam, velit ipsam sunt provident sequi debitis impedit nam? Ut autem suscipit dolor, accusantium veniam sed rerum repellendus commodi tempore illum beatae tenetur doloribus atque sit sint odio nesciunt earum accusamus nobis illo obcaecati corrupti dolorum iste. Maxime magni quia molestiae numquam dolorem porro labore esse dolor aut, ut commodi perspiciatis eveniet ipsam dolore quas accusantium. Cupiditate aperiam nisi, vero animi provident similique quo.
          </Text>
          <View style={[style.borderadd,{marginTop: 40, marginBottom: 40}]}>
            <SecondaryButton title="Add To Cart" />
          </View>
        </View>
      </ScrollView>
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
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
  borderadd:{
    // borderColor:'red',
    // borderWidth:2
  }
});

export default DetailsScreen;
