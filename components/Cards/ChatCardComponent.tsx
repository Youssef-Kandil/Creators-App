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
import { router, useRouter } from 'expo-router';
import { Link } from 'expo-router';
import React, { useState } from 'react'



import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';



import LocalStorage from '@/utils/LocalStorage';


interface props{
    userTitle:string;
    lastMSG:string;
    lastMSG_Date:string;
    onClick:()=>void;
}
const ChatCardComponent = ({userTitle,lastMSG,lastMSG_Date,onClick}:props) => {
  const theme = useColorScheme()
  const isDark = theme === 'dark';
  const themeColors = isDark ? darkThem : lightThem;    
  const { width, height } = useWindowDimensions();
  const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;

return (
<TouchableOpacity 
    onPress={onClick}
    style={[
   { 
        direction:"rtl",
        alignItems:'center',
        backgroundColor:themeColors.BackGroundAndIcons,
        marginTop: verticalScale_hights(1),
        borderColor:themeColors.borderColor,
        borderBottomWidth:moderateScale_Font(2),
        flexDirection:"row",
        marginVertical:verticalScale_hights(10),
        paddingVertical:verticalScale_hights(5),
        
    }
  ]} >
    <View style={{flexDirection:"row",gap:verticalScale_hights(15),alignItems:"center",flex:1}}>
        <Image source={require('@/assets/images/ProfileTest.png')} style={{width:verticalScale_hights(50),height:verticalScale_hights(50),objectFit:"cover",borderRadius:verticalScale_hights(300)}} />
        <View style={{alignItems:"flex-start"}}>
            <Text style={{color:themeColors.textColor,fontSize:moderateScale_Font(20)}}>{userTitle}</Text>
            <Text style={{color:themeColors.subTextColor,fontSize:moderateScale_Font(14)}}>{lastMSG}</Text>
        </View>
    </View>
    <View style={{alignItems:"flex-end",height:"100%",gap:verticalScale_hights(10)}}>
      <Text style={{color:themeColors.Primary,fontSize:moderateScale_Font(14)}}>{lastMSG_Date}</Text>
      <View style={{width:verticalScale_hights(20),height:verticalScale_hights(20),backgroundColor:themeColors.Primary,alignItems:"center",justifyContent:"center",borderRadius:verticalScale_hights(300),marginLeft:verticalScale_hights(5)}}>
        <Text style={{color:"#FFFFFF",fontSize:moderateScale_Font(12)}}>{1}</Text>
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default ChatCardComponent