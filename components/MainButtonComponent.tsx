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
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';
import React, { useState } from 'react'

import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';

import FormTitleComponent from '@/components/FormTitleComponent';
import InputeComponent from '@/components/InputComponent';

interface props {
    title:string;
    onClick:()=>void;
}

const MainButtonComponent = ({title,onClick}:props) => {
      const router = useRouter();
      const theme = useColorScheme()
      const isDark = theme === 'dark';
      const themeColors = isDark ? darkThem : lightThem;
    
      const { width, height } = useWindowDimensions();

  return (
        <TouchableOpacity onPress={onClick} style={{width:"100%",marginTop:verticalScale_hights(20)}}>
            <View style={[styles.btn,{backgroundColor:themeColors.Primary}]}>
                <Text style={[styles.btnTitle]}>{title}</Text>
            </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    btn:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        height:verticalScale_hights(50),
        borderRadius:verticalScale_hights(10),
        marginTop: verticalScale_hights(20),
    },
    btnTitle:{
        color:"#FFFFFF",
        fontSize:moderateScale_Font(22),
    },

})

export default MainButtonComponent