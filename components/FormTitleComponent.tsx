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
    subTitle:string;
    progressNamber?:number;
}

const FormTitleComponent = ({title,subTitle,progressNamber}:props) => {
      const router = useRouter();
        const theme = useColorScheme()
        const isDark = theme === 'dark';
        const themeColors = isDark ? darkThem : lightThem;
    
  return (
    <View>
        <TouchableOpacity style={[styles.backBtn,{backgroundColor:theme == "dark"?"#6666":""}]} onPress={()=>router.back()}>
            <AntDesign name="arrowright" size={scale_width(15.7)} color={themeColors.textColor} />
        </TouchableOpacity>
        {progressNamber&&<View style={[styles.track,{backgroundColor:themeColors.borderColor}]}>
            <View style={[styles.prog,{backgroundColor:themeColors.Primary,width:`${progressNamber}%`}]}/>
        </View>}
        <View style={styles.titlesContainer}>
            <Text style={[styles.title,{color:themeColors.textColor}]}>{title}</Text>
            <Text style={[styles.subTitle,{color:themeColors.subTextColor}]}>{subTitle}</Text>
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
        marginBottom:verticalScale_hights(30),
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

export default FormTitleComponent