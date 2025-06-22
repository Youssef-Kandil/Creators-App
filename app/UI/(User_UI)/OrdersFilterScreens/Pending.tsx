import { View, ScrollView,ImageSourcePropType,useColorScheme,StatusBar,Platform } from 'react-native';
import React from 'react';

import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';

import TitleWithReadMoreComponent from '@/components/TitleWithReadMoreComponent';
import CompaniesCardComponent from '@/components/Cards/CompaniesCardComponent';
import CreatorCardComponent from '@/components/Cards/CreatorCardComponent';

const Pending = () => {
        const theme = useColorScheme()
        const isDark = theme === 'dark';
        const themeColors = isDark ? darkThem : lightThem;    
        const { width, height } = useWindowDimensions();
        const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
      style={{
        maxHeight:verticalScale_hights(420)
      }}
    >

    </ScrollView>
  )
}

export default Pending