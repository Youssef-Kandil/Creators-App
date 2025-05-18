import { View, Text ,Image,ImageSourcePropType, StyleSheet,Platform,useColorScheme,StatusBar} from 'react-native'
import { router, useRouter } from 'expo-router';
import { Link } from 'expo-router';
import React, { useState } from 'react'

import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';


interface props{
  imgUrl:ImageSourcePropType|string;
  profileImgUrl:ImageSourcePropType|string;
  fullName:string;
  userName:string;
  userType:string;
  description:string;
  rate:number;
  price:number;
}

const CompaniesCardComponent = ({imgUrl,profileImgUrl,fullName,userName,userType,description,rate,price}:props) => {
        const theme = useColorScheme()
        const isDark = theme === 'dark';
        const themeColors = isDark ? darkThem : lightThem;    
        const { width, height } = useWindowDimensions();
        const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;
  
  return (
    <View style={[styles.card,{backgroundColor:themeColors.borderColor}]}>
      <View>
        <Image 
          source={typeof imgUrl === 'string' ? { uri: imgUrl } : imgUrl} 
          alt='JopIMAGE' 
          style={{width:scale_width(256),height:scale_width(170),resizeMode: 'cover',}}  
        />
      </View>


      <View style={[]}>
        <View style={[styles.cardMidSection]}>
          <Image          
            source={typeof profileImgUrl === 'string' ? { uri: profileImgUrl } : profileImgUrl} 
            alt='PrifilIMAGE' 
            style={{width:scale_width(34),height:scale_width(34),resizeMode: 'cover',}}  
          />
            <View style={[]}>
              <Text style={[{color:themeColors.textColor,fontSize:moderateScale_Font(14),textAlign:"left"}]}>{fullName}</Text>
              <Text style={[{color:themeColors.subTextColor,fontSize:moderateScale_Font(14),textAlign:"left"}]}>{userName}</Text>
              <Text style={[{color:themeColors.subTextColor,fontSize:moderateScale_Font(14),textAlign:"left"}]}>{userType}</Text>
            </View>
        </View>

        <Text style={[{color:themeColors.textColor,fontSize:moderateScale_Font(17),fontWeight:"bold", marginTop:verticalScale_hights(10),textAlign:"left"}]}>{description}</Text>
        <View style={[styles.cardFooter]}>
          <Text style={[{color:themeColors.textColor,fontSize:moderateScale_Font(13),textAlign:"left"}]}>{rate}</Text>
          <Text style={[{color:themeColors.textColor,fontSize:moderateScale_Font(16),textAlign:"left"}]}>{price}</Text>
        </View>

      </View>
 {/* ======= END ==== */}
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    width:scale_width(256),
    paddingHorizontal:verticalScale_hights(12),
    paddingBottom:verticalScale_hights(12),
    direction:"rtl",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:verticalScale_hights(8),
    overflow:"hidden",

  },
  cardMidSection:{
    flexDirection:"row",
    alignItems:"flex-start",
    gap:scale_width(10),
    marginTop:verticalScale_hights(20),

  },
  cardFooter:{
    marginTop:verticalScale_hights(10),
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
  },

});


export default CompaniesCardComponent