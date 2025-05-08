import { View, Text, TextInput, KeyboardTypeOptions, StyleSheet, useColorScheme, Platform, StatusBar } from 'react-native';
import React, { ForwardedRef, Ref } from 'react';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';


import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';

interface props {
    title:string;
    placeholder:string;

    value:string;
    onTyping?:(text:string)=>void;

    editable?:boolean;
    keyboardType?:KeyboardTypeOptions;

    ref?: ForwardedRef<TextInput>;
    onSubmitEditing?:()=>void;
}

const InputComponent = ({
    title,
    placeholder,
    value,
    onTyping,
    editable=true,
    keyboardType,
    ref,
    onSubmitEditing
}:props) => {
          const theme = useColorScheme()
          const isDark = theme === 'dark';
          const themeColors = isDark ? darkThem : lightThem;
      
          const { width, height } = useWindowDimensions();

          const [isFocus,setIsFocus] = React.useState<boolean>()

    return (
    <View style={[styles.inpute,{width:width-scale_width(16)}]}>
      <Text style={[styles.title,{color:themeColors.textColor}]}>{title}</Text>
      <TextInput
        keyboardType={keyboardType}
        ref={ref?ref:null} // Set the ref here
        style={[styles.field,{color:themeColors.textColor, borderColor:isFocus?themeColors.Primary:themeColors.borderColor, opacity:isFocus?0.7:1,  borderWidth:scale_width(2)}]}
        onChangeText={(txt)=>onTyping?.(txt)} 
        placeholder={placeholder}
        placeholderTextColor={themeColors.subTextColor} 
        value={value}
        onSubmitEditing={onSubmitEditing}
        onFocus={()=>setIsFocus(true)}
        onBlur={()=>setIsFocus(false)}
        editable={editable}/>
    </View>
  )
}

const styles = StyleSheet.create({
    inpute:{
        alignItems:"flex-start",
        justifyContent:"center",
        alignSelf:"center",
        marginBottom:verticalScale_hights(15)
    },
    title:{
        fontWeight:400,
        fontSize:moderateScale_Font(19),
        paddingHorizontal:scale_width(5),
        marginBottom:verticalScale_hights(3)
    },
    field:{
        fontWeight:200,
        fontSize:moderateScale_Font(14),
        paddingHorizontal:scale_width(10),
        paddingVertical:verticalScale_hights(10),
        borderRadius:scale_width(8),
        width:"100%",
        // height:scale_width(50),
        alignSelf:"center",
        textAlign:"right"
    },

})

export default InputComponent