import { View, ScrollView,ImageSourcePropType,useColorScheme,StatusBar,Platform } from 'react-native';
import React from 'react';

import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';

import TitleWithReadMoreComponent from '@/components/TitleWithReadMoreComponent';
import CompaniesCardComponent from '@/components/Cards/CompaniesCardComponent';
import CreatorCardComponent from '@/components/Cards/CreatorCardComponent';

const All = () => {
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
        {/* ==== Start Companies Section ==== */}
        <TitleWithReadMoreComponent title="الشركات الأعلى تقييماً" readMore=""/>
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: scale_width(16),
          }}>
            {[1, 2, 3, 4].map((_, index) => {
              return(
                <CompaniesCardComponent
                      key={index} 
                      imgUrl={require("@/assets/images/Test/Card.png") as ImageSourcePropType}
                      profileImgUrl={require("@/assets/images/Test/Profil.png") as ImageSourcePropType}
                      fullName='محمد أحمد'
                      userName='@Ibraheem216545'
                      userType='مزود خدمه '
                      description='استأجر استوديو احترافي لمشاريعك الإبداعية'
                      rate={5}
                      price={140}
                  />
              )
            })}
        </ScrollView>

        {/* ==== Start Creators Section ==== */}
        <TitleWithReadMoreComponent title="مواهب مميزة" readMore=""/>
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: scale_width(16),
          }}>
            {[1, 2, 3, 4].map((_, index) => {
              return(
                <CreatorCardComponent 
                    key={index} 
                    imgUrl={require("@/assets/images/Test/Card.png") as ImageSourcePropType}
                      fullName='محمد أحمد'
                      userName='@Ibraheem216545'
                      userType='مزود خدمه '
                      rate={5}
                      price={140}
                  />
              )
            })}
        </ScrollView>



    </ScrollView>
  )
}

export default All