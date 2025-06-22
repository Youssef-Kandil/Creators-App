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

import Handle_PhoneNumbers from '@/utils/Handle_PhoneNumbers';
import { isValidPhone } from '@/utils/Regex';


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

        const [phoneNumber,setPhoneNumber] = useState<string>("")

        function handelRouteTo_OTPScreen(){
          if(phoneNumber.length == 0){
            alert("يجيب ادخال رقم الهاتف الخاص بك");
          }
          if(!isValidPhone(phoneNumber)){
            alert("رقم الهاتف غير صحيح");
          }

          // ===============
          const phoneWithCode = Handle_PhoneNumbers.addCountryCode(phoneNumber)
          if(phoneWithCode){

            const isNumberWithCode = Handle_PhoneNumbers.isPhoneWithCountryCode(phoneWithCode)
            if(!isNumberWithCode){
              alert("ادخل رمز دولتك في بداية الرقم");
            }
 
            const FinalResult = Handle_PhoneNumbers.removePlusSign(phoneWithCode)
            console.log(FinalResult)
            router.push({pathname:"/Auth/OTP",params:{FinalResult}})
          }
          
        }

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
                    placeholder='ادخل  رقم هاتفك هنا'
                    value={phoneNumber}
                    keyboardType='numeric'
                    onTyping={(text)=>setPhoneNumber(text)}/>
            <MainButtonComponent
                title='إرسال الكود'
                onClick={handelRouteTo_OTPScreen}
            />
    </View>
  )
}

export default Forget_password