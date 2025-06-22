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

// === ICONS
import Email from '@/assets/images/Icons/Email.svg'
import Password from '@/assets/images/Icons/Password.svg'
import Phone from '@/assets/images/Icons/Phone.svg'


import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';


import HeaderTitle from '@/components/HeaderTitle';
import SettingsCard from '@/components/Cards/SettingsCard';

const EditeAccountInfo = () => {
  const theme = useColorScheme()
  const isDark = theme === 'dark';
  const themeColors = isDark ? darkThem : lightThem;    
  const { width, height } = useWindowDimensions();
  const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;
return (
<View style={[
  { paddingTop,
    paddingHorizontal:scale_width(16),
    direction:"rtl",
    alignItems:"flex-start",
    backgroundColor:themeColors.BackGroundAndIcons,
    marginTop: verticalScale_hights(30),
     width:width, height:height}
  ]} >
    <HeaderTitle title="تعديل بيناتك الشخضيه" />
      <View style={{marginTop:verticalScale_hights(20)}}>
        <SettingsCard title='البريد الالكتروني' icon={<Email/>} onClick={()=>{}}/>
        <SettingsCard title='رقم الهاتف' icon={<Phone/>} onClick={()=>{}}/>
        <SettingsCard title='كلمه المرور' icon={<Password/>} onClick={()=>{}}/>
      </View>
    </View>
  )
}

export default EditeAccountInfo