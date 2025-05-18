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
  
  
  import HeaderTitle from '@/components/HeaderTitle';
import NoNoticationIcon from '@/assets/images/Icons/No Notifications.svg'

const Notifications = () => {
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
    <HeaderTitle title='الاشعارات'/>
      <No_Notifications/>
    </View>
  )
}

export default Notifications



function No_Notifications(){
    const theme = useColorScheme()
    const isDark = theme === 'dark';
    const themeColors = isDark ? darkThem : lightThem;    
    const { width, height } = useWindowDimensions();
    return <View style={{alignSelf:"center",alignItems:"center",justifyContent:"center",height:"75%"}}>
            <NoNoticationIcon  width={scale_width(250)} height={verticalScale_hights(250)}/>
            <View style={{width:scale_width(289),marginTop:verticalScale_hights(20)}}>
                <Text style={{fontWeight:"bold",fontSize:moderateScale_Font(20),color:themeColors.textColor,textAlign:"center"}}>لا يوجد اشعارات</Text>
                <Text  style={{fontSize:moderateScale_Font(20),color:themeColors.subTextColor,textAlign:"center"}}>ليس لديك أي إشعارات حتى الآن. يرجى العودة لاحقا.</Text>
            </View>
    </View>
}