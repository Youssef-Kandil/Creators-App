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


import UserOrders from '../UI/(User_UI)/UserOrders';
import CreatorHomeScreen from '../UI/(Creator_UI)/UsefHome';


import HeaderTitle from '@/components/HeaderTitle';
import IconInputComponent from '@/components/IconInputComponent';

const Jobs = () => {
  const theme = useColorScheme()
  const isDark = theme === 'dark';
  const themeColors = isDark ? darkThem : lightThem;    
  const { width, height } = useWindowDimensions();
  const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;
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
    <HeaderTitle isTab={true}  title="طلبات" />
    <IconInputComponent
      placeholder='ابحث عن خدمة'
      value=''
      onClick={()=>{}}
    />
    {/* STRAT PAGE CONTENT */}
    {isCreator?null:<UserOrders/>}
    
</View>
)
}

export default Jobs