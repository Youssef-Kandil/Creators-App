import { View, Text,useColorScheme } from 'react-native';
import React ,{ReactNode} from 'react';

import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';

interface props{
    title:string;
    icon:ReactNode
}

const ServicesCardComponent = ({title,icon}:props) => {
              const theme = useColorScheme()
              const isDark = theme === 'dark';
              const themeColors = isDark ? darkThem : lightThem;    
              const { width, height } = useWindowDimensions();

  return (
    <View style={{width:verticalScale_hights(80),height:verticalScale_hights(96)}}>
          <View style={[{width:"100%",height:verticalScale_hights(74),borderRadius:verticalScale_hights(8),backgroundColor:themeColors.cardBackground,alignItems:"center",justifyContent:"center"}]}>
            {icon}
         </View>
        <Text style={[{color:themeColors.textColor,fontSize:moderateScale_Font(13),backgroundColor:themeColors.BackGroundAndIcons,textAlign:"center"}]}>{title}</Text>
    </View>
  )
}

export default ServicesCardComponent