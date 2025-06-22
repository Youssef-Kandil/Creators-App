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


import { useLocalSearchParams } from 'expo-router';
import LocalStorage from '@/utils/LocalStorage';

import NotificationsIcon from '@/assets/images/Icons/Notification.svg'
import IconInputComponent from '@/components/IconInputComponent';

import UserHomeScreen from '../UI/(User_UI)/UserHome';
import CreatorHomeScreen from '../UI/(Creator_UI)/UsefHome';

export default function TabOneScreen() {
  const router = useRouter()
  const  {searchText}  = useLocalSearchParams();

    const [isCreator, setIsCreator] = React.useState<number| null >(null)
  
    React.useEffect(() => {
      const fetchUserType = async () => {
        const userType = await LocalStorage.loadData('userType');
        if(userType !== null){
          setIsCreator(Number(userType))
        }
      };
    
      fetchUserType();
    }, []);


    console.log("from SearchInput : ",searchText);
    console.log("from index : ",isCreator);


      const theme = useColorScheme()
      const isDark = theme === 'dark';
      const themeColors = isDark ? darkThem : lightThem;    
      const { width, height } = useWindowDimensions();
      const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;


      // Handle Search ===
      const [SearchInput , setSearchInput] = React.useState("");
      React.useEffect(() => {
        setSearchInput(Array.isArray(searchText) ? searchText.join(', ') : searchText || "");
      }, [searchText]);


  return (
    <View   style={[
        { paddingTop,
          paddingHorizontal:scale_width(16),
          direction:"rtl",
          alignItems:"flex-start",
          backgroundColor:themeColors.BackGroundAndIcons,
          marginTop: verticalScale_hights(30),
           width:width, height:height}
        ]} >
          {/* START NAV */}
          <View style={[styles.nav]}>
            {/* START MEDIA SECTION */}
            <View style={[styles.mediaSection,{gap:scale_width(10)}]}>
              <View style={{width:verticalScale_hights(50),height:verticalScale_hights(50),borderRadius:scale_width(50),backgroundColor:"#333"}}/>
              {/* START TEXT CONTAINER */}
              <View >
                <Text style={[styles.navHelloUser,{fontSize:moderateScale_Font(16),color:themeColors.subTextColor}]}>اهلا بعودتك  👋</Text>
                <Text  style={[styles.navUserTitle,{fontSize:moderateScale_Font(20),color:themeColors.textColor}]}>يوسف قنديل</Text>
                <Text  style={[styles.navUserName,{fontSize:moderateScale_Font(10),color:themeColors.subTextColor}]}>@Kandil216545</Text>
              </View>
            </View>
            {/* START NOTIFICATION CONTAINER */}
            <View onTouchEnd={()=>router.push('/UI/(global_UI)/Notifications')}>
              <NotificationsIcon width={verticalScale_hights(45)} height={verticalScale_hights(45)} fill={themeColors.cardBackground}/>
            </View>
          </View>
          <View>
            <IconInputComponent
              editable={false}
              placeholder='أبحث عن مبدع او مزود خدمه'
              value={SearchInput}
              onClick={()=>router.navigate('/UI/(global_UI)/SearchScreen')}
              keyboardType="web-search"
            />   
          </View>

          {/* STRAT PAGE CONTENT */}
          {isCreator?<CreatorHomeScreen/>:<UserHomeScreen/>}
    </View>
  );
}

const styles = StyleSheet.create({
  nav:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
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
