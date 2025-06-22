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
import { useLocalSearchParams } from 'expo-router';


import FormTitleComponent from '@/components/FormTitleComponent';
import OTPInputComponent from '@/components/OTPInputComponent';
import MainButtonComponent from '@/components/MainButtonComponent';

const OTP = () => {
  const {FinalResult} = useLocalSearchParams();
    const router = useRouter();
    const theme = useColorScheme()
    const isDark = theme === 'dark';
    const themeColors = isDark ? darkThem : lightThem;

    const { width, height } = useWindowDimensions();
    const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;

    const [counter, setCounter] = useState<number>(60);
    const [showResend, setShowResend] = useState<boolean>(false);
    React.useEffect(() => {
      let interval: NodeJS.Timeout | number | undefined = undefined;

      if (counter > 0) {
        interval = setInterval(() => {
          setCounter((prev) => prev - 1);
        }, 1000);
      } else {
        setShowResend(true);
        if (interval !== undefined) {
          clearInterval(interval);
        }
      }

      return () => {
        if (interval !== undefined) {
          clearInterval(interval);
        }
      };
    }, [counter]);


    const [OTP , setOTP ] = useState<string|null>(null)
    const [Generated_OTP , setGenerated_OTP ] = useState<string|null>(null)
    function generateOTP(length: number = 4): string {
        let otp = '';
        for (let i = 0; i < length; i++) {
          otp += Math.floor(Math.random() * 10).toString(); // رقم من 0 إلى 9
        }
        return otp;
    }
      console.log("SEND 2 OTP :",Generated_OTP," To ",FinalResult);

    function handelSendOTP(){
      setCounter(60);
      setShowResend(false);
        // Call Api
    }


    function checkOTP(generated_OTP:string,otp:string) : boolean{
        console.log("GEN OTP IS 1 : ",generated_OTP," ","OTP IS : ",otp)
        if (generated_OTP == otp) {
           console.log("GEN OTP IS : ",generated_OTP," ","OTP IS : ",otp)
           return true
        }
        return false
    }

      React.useEffect(()=>{
          setGenerated_OTP(generateOTP());  
      },[])

    function handleGoToNextStep(){
        if (Generated_OTP && OTP) { 
          const CheckResult :boolean = checkOTP(Generated_OTP,OTP)
          console.log(CheckResult)

        if (CheckResult) {
            router.push('/Auth/CreateNewPassword')
          }
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
            title='ادخل رمز التحقق'
            subTitle='أدخل رمز التحقق الذي تم إرساله إلى بريدك الالكتروني للتحقق من هويتك وضمان سلامة .'
        />
        <OTPInputComponent
            length={4} 
            onCodeFilled={(code) =>setOTP(code)} 
        />

        {showResend ? (
          <Text style={[{color:themeColors.subTextColor, fontSize:moderateScale_Font(16), marginTop:verticalScale_hights(10),textAlign:"center"}]}>
            لم تتلقَ رمز التحقق؟ 
            <Text onPress={handelSendOTP} style={[{color:themeColors.Primary}]}>  إعادة إرسال الرمز  </Text>
          </Text>
        ) : (
          <Text style={[{color:themeColors.subTextColor, fontSize:moderateScale_Font(16), marginTop:verticalScale_hights(10),textAlign:"center"}]}>
            إعادة إرسال الرمز بعد: <Text style={[{color:themeColors.Primary}]}> {counter} ثانية</Text> 
          </Text>
        )}
        
        <MainButtonComponent title='إرسال' onClick={handleGoToNextStep}/>
</View>
)
}

export default OTP