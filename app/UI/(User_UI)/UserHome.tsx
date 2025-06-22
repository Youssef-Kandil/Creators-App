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
import { router, useRouter } from 'expo-router';
import { Link } from 'expo-router';
import React, { useState } from 'react'

import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';

import All from './HomeFilterScreens/All';
import CreativeServices from './HomeFilterScreens/CreativeServices';
import OtherServices from './HomeFilterScreens/OtherServices';
import TitleWithReadMoreComponent from '@/components/TitleWithReadMoreComponent';


const UserHomeScreen = () => {
      const theme = useColorScheme()
      const isDark = theme === 'dark';
      const themeColors = isDark ? darkThem : lightThem;    
      const { width, height } = useWindowDimensions();
      const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;

      // Handle Filter ===
      const [ selectedFilter,setSelectedFilter] = React.useState("الكل")
      const [filterBtns] = React.useState([
        { id: 1, label: 'الكل' },
        { id: 2, label: 'خدمات ابداعية' },
        { id: 3, label: 'خدمات للتصوير' },
      ]);

      const renderContent = () => {
        switch (selectedFilter) {
          case 'الكل':
            return <All />;
          case 'خدمات ابداعية':
            return <CreativeServices />;
          case 'خدمات للتصوير':
            return <OtherServices />;
          default:
            return null;
        }
      };

      function hnadelFiltersBtnBorderColor(btnLabel:string){
        if(isDark && btnLabel === selectedFilter){
            return  ""
        }
        if(isDark && btnLabel !== selectedFilter){
            return  themeColors.borderColor
        }

        if(!isDark && btnLabel == selectedFilter){
            return  ""
        }
        if(!isDark && btnLabel !== selectedFilter){
            return  "rgba(0, 0, 0, 0.4)"
        }

        
        
      }



  return (
    <View >
       {/* ==== START FILTER BTNS === */}
      <View style={[styles.filter,{gap:scale_width(10),paddingVertical:verticalScale_hights(10)}]}>
        {filterBtns.map((btn,index) => (
          <TouchableOpacity
            onPressOut={()=>setSelectedFilter(btn.label)}
            key={index}
            onPress={() => {
              console.log(`Button ${btn.label} pressed`);
            }}
            style={{
              backgroundColor:(selectedFilter == btn.label)? themeColors.Primary:"transparent",
              minWidth:scale_width(107),
              height:verticalScale_hights(37),
              // padding: verticalScale_hights(10),
              padding:verticalScale_hights(5),
              borderRadius: verticalScale_hights(12),
              borderColor:hnadelFiltersBtnBorderColor(btn.label),
              borderWidth:(selectedFilter !== btn.label)?scale_width(1):0,
              alignItems:"center",
              justifyContent:"center",
            }}
          >
            <Text style={{ color:(selectedFilter == btn.label)?'#fff':themeColors.subTextColor ,fontSize:moderateScale_Font(14),textAlign:"center"}}>{btn.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* ==== END FILTER BTNS === */}
      

      {/* ==== START CONTANT ===== */}
      {/* {selectedFilter == 'الكل'? <All/>:null}
      {selectedFilter == 'خدمات ابداعية'?<CreativeServices/>:null}
      {selectedFilter == 'خدمات للتصوير'?<OtherServices/>:null} */}
      {renderContent()}

    </View>
  )
}

const styles = StyleSheet.create({
  filter:{
    flexDirection:"row",
    alignItems:"center",
    width:"100%"
  },
  mediaSection:{
    flexDirection:"row",
    alignItems:"center",
  },
  navHelloUser:{
    textAlign:"left",
  },
  navUserTitle:{
    textAlign:"left",
  },
  navUserName:{
    textAlign:"left",
  },

});


export default UserHomeScreen