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
import OTPInputComponent from '@/components/OTPInputComponent';
import MainButtonComponent from '@/components/MainButtonComponent';

const OTP = () => {
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
            onCodeFilled={(code) => console.log('OTP Code:', code)} 
        />
        <Text style={[{color:themeColors.subTextColor, fontSize:moderateScale_Font(16), marginTop:verticalScale_hights(10),textAlign:"center"}]}>لم تتلقي رمز التحقق ؟<Link push href={'/Register/chooseAccountType'} style={[{color:themeColors.Primary}]}>   إعادة إرسال الرمز   </Link></Text>
        <MainButtonComponent title='إرسال' onClick={()=>router.push('/Auth/CreateNewPassword')}/>
</View>
)
}

export default OTP