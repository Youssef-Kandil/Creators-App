import { 
    View,
     Text,
     useColorScheme,
      StatusBar,
       Platform,
} from 'react-native'
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';
import React, { useState } from 'react'

import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';


import FormTitleComponent from '@/components/FormTitleComponent';
import InputeComponent from '@/components/InputComponent';

const createAccountForm = () => {
      const router = useRouter();
        const theme = useColorScheme()
        const isDark = theme === 'dark';
        const themeColors = isDark ? darkThem : lightThem;
    
        const { width, height } = useWindowDimensions();
        const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;

        const [progNumber,setProgNumber] = useState<number>(10)
        const handelGoToTheNextStep =()=>{
          if (!(progNumber >= 100)) {
            setProgNumber(progNumber+10)   
            console.log(progNumber)
          }
        }
        const [email,setEmail] = useState<string>("")
        const [password,setPassword] = useState<string>("")

  return (
    <View style={[
        { paddingTop,
          paddingHorizontal:scale_width(16),
          direction:"rtl",
          backgroundColor:themeColors.BackGroundAndIcons,
          marginTop: verticalScale_hights(30),
           width:width, height:height}
        ]} >
      <FormTitleComponent
        title='إنشاء حساب مبدع / مزود خدمه'
        subTitle='قم بإدخال نوع الحساب و الفئة الخاصه بك'
        progressNamber={progNumber}
      />
      <View onTouchStart={handelGoToTheNextStep}><Text>Click</Text></View>
    </View>
  )
}

export default createAccountForm