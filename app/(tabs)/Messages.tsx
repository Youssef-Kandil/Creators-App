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
     ScrollView, 
} from 'react-native'
import { router, useRouter } from 'expo-router';
import { Link } from 'expo-router';
import React, { useState } from 'react'

import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';


import HeaderTitle from '@/components/HeaderTitle';
import IconInputComponent from '@/components/IconInputComponent';
import ChatCardComponent from '@/components/Cards/ChatCardComponent';


const Messages = () => {
  const router = useRouter()
        const theme = useColorScheme()
        const isDark = theme === 'dark';
        const themeColors = isDark ? darkThem : lightThem;    
        const { width, height } = useWindowDimensions();
        const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;

        function handleOpenChat(){
          console.log("hi")
          router.push({pathname:"/UI/(global_UI)/ChatScreen",params:{userID:1}})
        }
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
          <HeaderTitle isTab={true}  title="الرسائل" />
          <IconInputComponent
            placeholder='البحث'
            value=''
            onClick={()=>{}}
          />

          <ScrollView style={{width:"100%",maxHeight:verticalScale_hights(439),marginTop:verticalScale_hights(30)}}>
            <ChatCardComponent userTitle='محمد مدني' lastMSG='مرحبًا، كيف الاحوال' lastMSG_Date='10:20AM' onClick={handleOpenChat}/>

          </ScrollView>
          
    </View>
  )
}

export default Messages