import { 
    View,
     useColorScheme,
      Text,
       ScrollView,
       StatusBar,
       Platform,
       TouchableOpacity
} from 'react-native'
import { useRouter } from 'expo-router';
import React from 'react'


import {darkThem ,lightThem} from '@/Config/app_identity'
import { verticalScale_hights ,moderateScale_Font,scale_width } from '@/utils/responsive'
import { useWindowDimensions, StyleSheet } from 'react-native';
import RadioCheckCardComponent from '@/components/Cards/RadioCheckCardComponent'
import SuccessIcon from '@/assets/images/Icons/SuccessIcon.svg'
import SA_CurIcon from '@/assets/images/Icons/SA_CUR.svg'

const SuccessStep = () => {
  const router = useRouter()
      const theme = useColorScheme()
      const isDark = theme === 'dark';
      const themeColors = isDark ? darkThem : lightThem;
        
            const { width, height } = useWindowDimensions();
            const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;
  return (
    <ScrollView
        contentContainerStyle={{
          alignItems:"center",
          alignSelf:"center",
          // backgroundColor:"red",
          paddingHorizontal:scale_width(16),
          width:width 
        }}  
        style={[
                { paddingTop,
                  paddingHorizontal:scale_width(16),
                  direction:"rtl",  
                  backgroundColor:themeColors.BackGroundAndIcons,
                  
                  }
                ]} >
      <View style={{alignSelf:"center"}}>
          <SuccessIcon width={scale_width(200)} height={scale_width(200)}/>
         <Text style={{color:themeColors.textColor,fontSize:moderateScale_Font(25),textAlign:"center",marginTop:verticalScale_hights(15)}}>تهانينا! 🎉</Text>
      </View>

      <View style={{alignSelf:"center",width:width-scale_width(30),marginTop:verticalScale_hights(15)}}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={{color:themeColors.Primary,fontSize:moderateScale_Font(12),borderColor:themeColors.Primary,borderWidth:verticalScale_hights(1),borderRadius:verticalScale_hights(15),textAlign:"center",width:verticalScale_hights(100)}}>{"قيد المراجعة"}</Text>
        </View>

        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:verticalScale_hights(10)}}>
            <Text style={{color:themeColors.subTextColor,fontSize:moderateScale_Font(12),width:scale_width(100),marginBottom:verticalScale_hights(2),textAlign:"left"}}>تكلفة خدمتك المطلوبة</Text>
            <Text style={{color:themeColors.subTextColor,fontSize:moderateScale_Font(14),textAlign:"center"}}>
                من 
               {"700"} 
              <SA_CurIcon fill={themeColors.textColor} width={verticalScale_hights(15)} height={verticalScale_hights(15)}/>{" "}
                الى 
                {"1000"} 
              <SA_CurIcon fill={themeColors.textColor} width={verticalScale_hights(15)} height={verticalScale_hights(15)}/>{" "}
            </Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:verticalScale_hights(10)}}>
            <Text style={{color:themeColors.subTextColor,fontSize:moderateScale_Font(12),width:scale_width(100),marginBottom:verticalScale_hights(2),textAlign:"left"}}>الموهبه المطلوبة</Text>
            <Text style={{color:themeColors.subTextColor,fontSize:moderateScale_Font(14),width:scale_width(100),marginBottom:verticalScale_hights(2)}}>التصميم والمنتاج</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:verticalScale_hights(10)}}>
            <Text style={{color:themeColors.subTextColor,fontSize:moderateScale_Font(15),width:scale_width(100),marginBottom:verticalScale_hights(2),textAlign:"left"}}>الوصف</Text>
        </View>
        <Text style={{color:themeColors.subTextColor,fontSize:moderateScale_Font(14),marginBottom:verticalScale_hights(50),marginHorizontal:verticalScale_hights(10),textAlign:"left"}}>
          أبحث عن محرر فيديو محترف ومصمم موشن جرافيك للعمل على 3 فيديوهات ترويجية قصيرة (مدة كل فيديو من 30 ثانية إلى 1 دقيقة) لصالح منصة/خدمة رقمية.
        </Text>
      </View>



       <View style={{width:"100%",alignItems:"center"}}>
            <TouchableOpacity onPress={()=>router.replace('/(tabs)/Jobs')} style={{width:"100%"}} >
                <View style={{backgroundColor:themeColors.Primary,padding:scale_width(4),paddingHorizontal:verticalScale_hights(18),borderRadius:verticalScale_hights(10),width:"100%"}}>
                    <Text style={{color:"#FFFFFF",fontSize:moderateScale_Font(20),textAlign:"center"}}>عودة إلى الطلبات</Text>
                </View>
          </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default SuccessStep