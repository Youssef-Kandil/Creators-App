import { 
    View,
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
  import { router, useRouter } from 'expo-router';
  import { Link } from 'expo-router';
  import React, { useState } from 'react'
  
  import {darkThem ,lightThem} from '@/Config/app_identity'
  import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
  import { useWindowDimensions } from 'react-native';

interface props{
    title:string;
    readMore:string
}

const TitleWithReadMoreComponent = ({title,readMore}:props) => {
          const theme = useColorScheme()
          const isDark = theme === 'dark';
          const themeColors = isDark ? darkThem : lightThem;    
          const { width, height } = useWindowDimensions();
          const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;
  return (
    <View style={{marginVertical:verticalScale_hights(30),width:"100%",flexDirection:"row",justifyContent:"space-between"}}>
      <Text style={{color:themeColors.textColor,fontSize:moderateScale_Font(16),fontWeight:"bold"}}>{title}</Text>
      <Text style={{color:themeColors.subTextColor,fontSize:moderateScale_Font(14)}}>عرض المزيد</Text>
    </View>
  )
}

export default TitleWithReadMoreComponent