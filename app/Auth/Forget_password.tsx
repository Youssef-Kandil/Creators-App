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
import InputComponent from '@/components/InputComponent';
import MainButtonComponent from '@/components/MainButtonComponent';

const Forget_password = () => {
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
        const [phoneNumber,setPhoneNumber] = useState<string>("")
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
                title='نسيت كلمه المرور'
                subTitle='لا تقلق! . الرجاء إدخال رقم الهاتف المرتبط بحسابك.'
            />
                <InputComponent 
                    title='رقم الهاتف' 
                    placeholder='ادخل البريد الالكتروني هنا'
                    value={phoneNumber}
                    keyboardType='numeric'
                    onTyping={(text)=>setPhoneNumber(text)}/>
            <MainButtonComponent
                title='إرسال الكود'
                onClick={()=>router.push("/Auth/OTP")}
            />
    </View>
  )
}

export default Forget_password