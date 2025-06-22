import { 
  View,
  ScrollView,
   Text,
   Image,
   TouchableNativeFeedback,
   TouchableOpacity,
   StyleSheet,
   useColorScheme,
    StatusBar,
     Platform,
     Animated, 
} from 'react-native'
import { I18nManager } from 'react-native';
import { router, useRouter } from 'expo-router';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState } from 'react'

import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';


interface props{
    data:any
}

const TextMessageComponent = ({data}:props) => {
      const theme = useColorScheme()
      const isDark = theme === 'dark';
      const themeColors = isDark ? darkThem : lightThem;    
      const { width, height } = useWindowDimensions();
      const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;
      console.log(Platform.OS,I18nManager.isRTL)
      const isMe = data.sender === 'me';
      const isRTL = I18nManager.isRTL
      const borderBottomLeftRadius = (isMe && !isRTL) || (!isMe && isRTL)
        ? verticalScale_hights(15)
        : 0;

     const borderBottomRightRadius = (isMe && isRTL) || (!isMe && !isRTL)
        ? verticalScale_hights(15)
        : 0;
  return (
    <View
        style={{
            alignSelf: isMe ? 'flex-start' : 'flex-end',
            backgroundColor: isMe ? themeColors.Primary : themeColors.BackGroundAndIcons,
            borderTopLeftRadius: verticalScale_hights(15),
            borderTopRightRadius: verticalScale_hights(15),
            // ثبّت الزوايا بدون أي علاقة بالـ RTL
            borderBottomLeftRadius: borderBottomLeftRadius,
            borderBottomRightRadius: borderBottomRightRadius,
            padding: scale_width(16),
            marginBottom: verticalScale_hights(10),
            maxWidth: '90%',
        }}
    >
      <Text style={{ color:data.sender === 'me'?"#FFF":themeColors.textColor ,fontSize:moderateScale_Font(16),marginBottom:verticalScale_hights(5)}}>
        {data.text}
      </Text>
      <View style={{flexDirection:data.sender === 'me'?'row':"row-reverse",alignItems:"center",justifyContent:"flex-start",gap:verticalScale_hights(5)}}>
        {data.sender === 'me' && <MaterialIcons name={data.isRead == "1"?"done-all":"done" } size={moderateScale_Font(10)} color={data.sender === 'me'?"#FFF":themeColors.textColor}/>}
        <Text style={{ color:data.sender === 'me'?"#FFF":themeColors.textColor , fontSize:moderateScale_Font(10)}}>11:00</Text>
      </View>
    </View>
  )
}

export default TextMessageComponent