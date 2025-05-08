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

import ModalComponent from '@/components/ModalComponent';

import FormTitleComponent from '@/components/FormTitleComponent';
import InputComponent from '@/components/InputComponent';
import MainButtonComponent from '@/components/MainButtonComponent';

const CreateNewPassword = () => {
      const router = useRouter();
        const theme = useColorScheme()
        const isDark = theme === 'dark';
        const themeColors = isDark ? darkThem : lightThem;
    
        const { width, height } = useWindowDimensions();
        const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;

        const [modalStatus,setModalStatus] = useState<boolean>(true)
        const [password,setPassword] = useState<string>("")

  return (
    <View   style={[
        { paddingTop,
          paddingHorizontal:scale_width(16),
          direction:"rtl",
          backgroundColor:themeColors.BackGroundAndIcons,
          marginTop: verticalScale_hights(30),
           width:width, height:height}
        ]} >
           {modalStatus&& <ModalComponent
                title='تم إنشاء حسابك بنجاح'
                onClose={(status)=>setModalStatus(status)}
            />}
             <FormTitleComponent
                title='إنشاء كلمه مرور جديده'
                subTitle='أنشئ كلمة مرور لحماية حسابك.' 
            />

            <View>
                <InputComponent 
                    title='كلمه المرور' 
                    placeholder='ادخل كلمه المرور هنا'
                    value={password}
                    keyboardType='email-address'
                    onTyping={(text)=>setPassword(text)}/>
                <InputComponent 
                    title='تأكيد كلمه المرور' 
                    placeholder='ادخل كلمه المرور هنا'
                    value={password}
                    keyboardType='email-address'
                    onTyping={(text)=>setPassword(text)}/>
            </View>
            <MainButtonComponent title='تسجيل دخول' onClick={()=>router.push('/')}/>
    </View>
  )
}

export default CreateNewPassword