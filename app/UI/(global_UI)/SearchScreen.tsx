import { 
    View,
     Text,
     TextInput,
     Keyboard,
     TouchableOpacity,
     StyleSheet,
     useColorScheme,
      StatusBar,
       Platform,
       Animated, 
} from 'react-native'
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';
import React, { useState ,useRef } from 'react'

import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';

import { useLocalSearchParams } from 'expo-router';
import LocalStorage from '@/utils/LocalStorage';

import NotificationsIcon from '@/assets/images/Icons/Notification.svg'
import AntDesign from '@expo/vector-icons/AntDesign';
import IconInputComponent from '@/components/IconInputComponent';


const SearchScreen = () => {
    const router = useRouter();
    const inputRef = useRef<TextInput | null>(null)
  // const { isCreator } = useLocalSearchParams();

    const [isCreator, setIsCreator] = React.useState<number| null >(null)
  

    React.useEffect(() => {
        // inputRef.current?.focus();
      const fetchUserType = async () => {
        const userType = await LocalStorage.loadData('userType');
        if(userType !== null){
          setIsCreator(Number(userType))
        }
      };
    
      fetchUserType();
      
      const timeoutId = setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    
      // تنظيف الـ setTimeout عند تدمير الـ effect أو تغييره
      return () => {
        clearTimeout(timeoutId);
      };
    }, []);
    console.log("from index : ",isCreator)


      const theme = useColorScheme()
      const isDark = theme === 'dark';
      const themeColors = isDark ? darkThem : lightThem;    
      const { width, height } = useWindowDimensions();
      const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;

    // Handle Search ===
     const [SearchInput , setSearchInput] = React.useState("")


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
            <View style={[styles.nav,{gap:scale_width(10)}]}>
                <TouchableOpacity style={[styles.backBtn,{backgroundColor:theme == "dark"?"#6666":""}]} onPress={()=>router.back()}>
                    <AntDesign name="arrowright" size={scale_width(15.7)} color={themeColors.textColor} />
                </TouchableOpacity>
                <IconInputComponent
                    ref={inputRef}
                    Width={"80%"}
                    editable={true}
                    placeholder='أبحث عن مبدع او مزود خدمه'
                    value={SearchInput}
                    onTyping={(text)=>{setSearchInput(text)}}
                    onClick={()=>{}}
                    onSubmitEditing={()=>router.navigate({pathname:'/(tabs)',params:{searchText:SearchInput}})}
                    keyboardType="web-search"
                />   
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    nav:{
        flexDirection:'row',
        alignItems:"center",
        alignSelf:"center",
    },
    backBtn:{
        width:scale_width(30),
        height:scale_width(30),
        borderRadius:scale_width(50),
        alignItems:"center",
        justifyContent:"center",
    },
    track:{
        width:"100%",
        height:verticalScale_hights(10),
        borderRadius:scale_width(10),
        marginBottom:verticalScale_hights(30),
    },
    prog:{
        height:"100%",
        borderRadius:scale_width(10),
    },
    titlesContainer:{
        width:"100%",
        alignItems:"flex-start",
        marginBottom:verticalScale_hights(30),

    },
    title:{
        fontWeight:500,
        fontSize:moderateScale_Font(22)

    },
    subTitle:{
        fontSize:moderateScale_Font(16)

    },

})

export default SearchScreen