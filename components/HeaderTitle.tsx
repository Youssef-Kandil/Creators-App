import { 
    View,
     Text,
     TouchableOpacity,
     StyleSheet,
     useColorScheme,
} from 'react-native'
import { useRouter } from 'expo-router';

import React from 'react'

import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'


import AntDesign from '@expo/vector-icons/AntDesign';


interface props{
    title:string;
    isTab?:boolean;
}

const HeaderTitle = ({title,isTab=false}:props) => {
        const router = useRouter();
        const theme = useColorScheme()
        const isDark = theme === 'dark';
        const themeColors = isDark ? darkThem : lightThem;
  return (
    <View style={{flexDirection:"row", alignItems:"center",marginBottom:verticalScale_hights(30),}}>
        <TouchableOpacity style={[styles.backBtn,{backgroundColor:theme == "dark"?"#6666":""}]} onPress={()=>isTab?router.navigate('/(tabs)/Home'):router.back()}>
            <AntDesign name="arrowright" size={scale_width(15.7)} color={themeColors.textColor} />
        </TouchableOpacity>
        <View style={[styles.titleContainer]}>
            <Text style={[styles.title,{color:themeColors.textColor}]}>{title}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    backBtn:{
        width:scale_width(30),
        height:scale_width(30),
        borderRadius:scale_width(50),
        alignItems:"center",
        justifyContent:"center",
    },

    titleContainer:{
        flex:1
    },

    title:{
        fontWeight:500,
        fontSize:moderateScale_Font(27),
        textAlign:"center"

    },
    subTitle:{
        fontSize:moderateScale_Font(16)

    },

})

export default HeaderTitle