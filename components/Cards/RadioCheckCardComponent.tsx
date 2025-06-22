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
import React from 'react'

import { steps } from '@/Config/OnboardingSteps'
import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';

interface UserTypeCardProps {
    title:string;
    subTitle:string;
    onClick:()=>void;
    isSelected:boolean;
    theme:{
        textColor:string;
        subTextColor:string;
        Primary:string;
        borderColor:string;
    };
}


const RadioCheckCardComponent = ({title,subTitle,onClick,isSelected,theme}:UserTypeCardProps) => {
    const themeType = useColorScheme()
    return <View style={cardStyles.card}>
        <View onTouchStart={onClick} style={[cardStyles.rightContainer]}>
            {/* <View style={{overflow:"hidden",width:scale_width(40),height:scale_width(40)}}>
                <Image source={imgSrc} resizeMode='contain' style={{height:"100%",width:"100%"}}/>
            </View>         */}
            <View style={cardStyles.titlesContainer}>
                <Text style={[cardStyles.title,{color:theme.textColor}]}>{title}</Text>
                <Text style={[cardStyles.subTitle,{color:theme.subTextColor}]}>{subTitle}</Text>
            </View>
        </View>
        <View style={[cardStyles.RadioButton,isSelected?{backgroundColor:theme.Primary}:{borderColor:themeType == "light"?"#777777":theme.borderColor,borderWidth:1}]}>
            {isSelected&&
                <View style={{backgroundColor:"#FFFFFF", width:"50%",height:"50%", borderRadius:20}}/>
            }
        </View>
    </View>
}

const cardStyles = StyleSheet.create({
    card:{
        boxShadow:'0 2px 4px rgba(0, 0, 0, 0.15)',
        height:verticalScale_hights(70),
        maxWidth:"100%",
        backgroundColor:"#33333319",
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:scale_width(20),
        borderRadius:verticalScale_hights(10),
        overflow: 'hidden',
        flexDirection:"row",
    },
    titlesContainer:{
        flex:1,
        // width:"80%",
        height:"100%",
        alignItems:"flex-start"

    },
    title:{
        fontWeight:500,
        fontSize:moderateScale_Font(18)

    },
    subTitle:{
        fontSize:moderateScale_Font(12)

    },

    rightContainer:{
        flexDirection:"row",
        gap:scale_width(10),
        alignItems:"center",
    },


    RadioButton:{
        width:verticalScale_hights(20),
        height:verticalScale_hights(20),
        borderRadius:30,
        // backgroundColor:"#333",
        alignItems:"center",
        justifyContent:"center",
    },

})

export default RadioCheckCardComponent


