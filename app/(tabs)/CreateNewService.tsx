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


import LocalStorage from '@/utils/LocalStorage';



import UserCreateNewOrder from '../UI/(User_UI)/UserCreateNewOrder';
import CreatorHomeScreen from '../UI/(Creator_UI)/UsefHome';


import HeaderTitle from '@/components/HeaderTitle';
import IconInputComponent from '@/components/IconInputComponent';

const CreateNewService = () => {
    const router = useRouter()
  
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
    <HeaderTitle isTab={true}  title="إنشاء خدمة جديدة" />
    {/* STRAT PAGE CONTENT */}
    <View style={{alignSelf:"center"}}>
      {isCreator?null:<UserCreateNewOrder/>}

    </View>
</View>
)
}

export default CreateNewService