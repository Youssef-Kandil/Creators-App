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
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';
import React, { useState } from 'react'




import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';


interface props {
    icon:React.ReactNode;
    title:string;
    subTitle?:string;
    onClick:()=> void;
}

const SettingsCard = ({icon,title,subTitle,onClick}:props) => {
      const theme = useColorScheme()
      const isDark = theme === 'dark';
      const themeColors = isDark ? darkThem : lightThem;    
      const { width, height } = useWindowDimensions();
      const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;
  return (
    <View 
       style={{
         flexDirection:"row",
         alignItems:"center",
         justifyContent:"space-between",
         width:"100%",
         borderColor:themeColors.borderColor,
         borderBottomWidth:moderateScale_Font(1),
         paddingHorizontal:verticalScale_hights(10),
         paddingVertical:verticalScale_hights(10),
        }} 
       onTouchEnd={onClick}>
    
    {/* =========== */}
        <View style={{flexDirection:"row", alignItems:"center",gap:verticalScale_hights(10)}}>
            <View style={{backgroundColor:themeColors.borderColor,width:verticalScale_hights(40),height:verticalScale_hights(40),alignItems:"center",justifyContent:"center",borderRadius:verticalScale_hights(100)}}>
                {icon}
            </View>

            <View style={{flexDirection:"row",alignItems:"center",width:"80%",justifyContent:"space-between"}}>
                <Text style={{color:themeColors.textColor,fontSize:moderateScale_Font(18)}}>{title}</Text>
                {subTitle&&<Text  style={{color:themeColors.subTextColor,fontSize:moderateScale_Font(16)}}>{subTitle}</Text>}
            </View>
        </View>
    {/* ============== */}
      <AntDesign style={{}} name="left" size={moderateScale_Font(18)} color={themeColors.textColor} />
    </View>
  )
}

export default SettingsCard