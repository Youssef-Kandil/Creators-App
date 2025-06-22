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

import SA_CurIcon from '@/assets/images/Icons/SA_CUR.svg'



import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';



import LocalStorage from '@/utils/LocalStorage';

interface Props{
    imgURL:string;
    userName:string;
    date:string;
    status:string;

    title:string;
    details:string;


    creatorType:string;
    numberـofـMSGS:string;

    startPraiceRange:string;
    endPraiceRange:string;
}

const OrdersCardComponent = () => {
      const theme = useColorScheme()
      const isDark = theme === 'dark';
      const themeColors = isDark ? darkThem : lightThem;    
      const { width, height } = useWindowDimensions();
      const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;
  return (
    <View 
        style={{
            backgroundColor:themeColors.cardBackground,
            alignItems:"flex-start",
            padding:verticalScale_hights(16),
            borderRadius:verticalScale_hights(20),
            marginTop:verticalScale_hights(15)
        }}>
    {/* ======= START HEADER ====== */}
        <View style={{flexDirection:"row"}}>

          <View style={{flexDirection:"row",gap:verticalScale_hights(15),alignItems:"center",flex:1}}>
              <Image source={require('@/assets/images/ProfileTest.png')} style={{width:verticalScale_hights(30),height:verticalScale_hights(30),objectFit:"cover",borderRadius:verticalScale_hights(300)}} />
              <View style={{alignItems:"flex-start"}}>
                  <Text style={{color:themeColors.textColor,fontSize:moderateScale_Font(14)}}>{"(أنت) "}{"محمد مدني"}</Text>
              </View>
          </View>

          <View style={{alignItems:"center"}}>
            <Text style={{color:themeColors.subTextColor,fontSize:moderateScale_Font(12),textAlign:"center",width:scale_width(100),marginBottom:verticalScale_hights(2)}}>{"منذ 5 د"}</Text>
            <Text style={{color:themeColors.Primary,fontSize:moderateScale_Font(12),borderColor:themeColors.Primary,borderWidth:verticalScale_hights(1),borderRadius:verticalScale_hights(15),textAlign:"center",width:verticalScale_hights(100)}}>{"قيد المراجعة"}</Text>
          </View>

          

        </View>

    {/* ======= START Content ====== */}
        <View style={{width:"100%",marginTop:verticalScale_hights(15)}}>
                {/* ===== ORDER Titles */}
                <Text style={{color:themeColors.textColor,fontSize:moderateScale_Font(20),width:"90%",alignItems:"flex-start",textAlign:'left'}}>{"تحرير فيديو لمدة 3 دقائق الفيديوهات ترويجية قصيرة."}</Text>
                <Text style={{color:themeColors.subTextColor,fontSize:moderateScale_Font(16),width:"90%",textAlign:'left'}}>
                    {"أبحث عن محرر فيديو محترف ومصمم موشن جرافيك للعمل على 3 فيديوهات ترويجية قصيرة (مدة كل فيديو من 30 ثانية إلى 1 دقيقة) لصالح منصة/خدمة رقمية."}
                </Text>

{               /* ==== CREATOR TYPE */}
                <Text style={{color:themeColors.Primary,fontSize:moderateScale_Font(13),width:"100%",marginTop:verticalScale_hights(10),alignItems:"flex-start",textAlign:'left'}}>
                    {"مونتبر مبدع"}
                </Text>

                {/* ===== ORDER DELTAILS */}
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:verticalScale_hights(15)}}>
                    <View>
                        <Text style={{color:themeColors.subTextColor,fontSize:moderateScale_Font(17),textAlign:"center",fontWeight:"bold"}}>
                            {"0"}
                        </Text>
                        <Text style={{color:themeColors.subTextColor,fontSize:moderateScale_Font(14),textAlign:"center"}}>
                            الرسائل
                        </Text>
                    </View>
                    <View>
                        <Text style={{color:themeColors.subTextColor,fontSize:moderateScale_Font(17),textAlign:"center"}}>
                           من 
                           {"700"} 
                           <SA_CurIcon fill={themeColors.textColor} width={verticalScale_hights(15)} height={verticalScale_hights(15)}/>{" "}
                           الى 
                           {"1000"} 
                           <SA_CurIcon fill={themeColors.textColor} width={verticalScale_hights(15)} height={verticalScale_hights(15)}/>{" "}
                        </Text>
                    </View>
                </View>


        </View>



    </View>
  )
}

export default OrdersCardComponent