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

import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';


interface props{
  title:string;
  onClose:(status:boolean)=>void;
}

export default function ModalComponent({title,onClose}:props) {
        const theme = useColorScheme()
    
        const { width, height } = useWindowDimensions();
        const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;

  return (
    <View   
      style={[
        { paddingTop,
          paddingHorizontal:scale_width(16),
          direction:"rtl",
          alignItems:"center",
          justifyContent:"center",
          backgroundColor:"rgba(0, 0, 0, 0.37)",
          position:"absolute",
          top:0,
          left:0,
          zIndex:99999,
           width:width, height:height}
        ]} 
        onTouchStart={()=>onClose(false)}>
      <View style={styles.modal}>
        <Image source={require("../assets/images/sucsess.webp")} resizeMode='contain' style={{alignSelf:"center",width:"50%",height:"40%"}}/>
          <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modal:{
    backgroundColor:"#ffffff",
    width:"95%",
    height:"35%",
    marginBottom:"35%",
    borderRadius:15,
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center",
    gap:verticalScale_hights(15)
  },
  title:{
    fontWeight:300,
    fontSize:moderateScale_Font(22),
    textAlign:"center",
  },

});
