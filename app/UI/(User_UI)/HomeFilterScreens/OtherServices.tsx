import { View,Text, ScrollView,Image,ImageSourcePropType,useColorScheme,StatusBar,Platform } from 'react-native';
import React from 'react';

import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';

import TitleWithReadMoreComponent from '@/components/TitleWithReadMoreComponent'
import CompaniesCardComponent from '@/components/Cards/CompaniesCardComponent';
import CreatorCardComponent from '@/components/Cards/CreatorCardComponent';

import OtherServicesCardComponent from '@/components/Cards/OtherServiceCardComponent';


import  Cam  from '@/assets/images/Icons/cam.svg';
import  Capa  from '@/assets/images/Icons/Capa_1.svg';
import  Car  from '@/assets/images/Icons/car.svg';
import  Layer  from '@/assets/images/Icons/Layer_1.svg';


const OtherServices = () => {
  const TEST_DATA = [
    {
      imgUrl:<Cam  width={scale_width(40)} height={verticalScale_hights(30)}/>,
      title:"ستوديو تصوير",
    },
    {
      imgUrl:<Car  width={scale_width(40)} height={verticalScale_hights(30)} />,
      title:"سيارات تصوير",
    },
    {
      imgUrl:<Layer  width={scale_width(40)} height={verticalScale_hights(30)} />,
      title:"بيوت تصوير",
    },
    {
      imgUrl:<Capa  width={scale_width(40)} height={verticalScale_hights(30)} />,
      title:"معدات تصوير",
    },

  ]
  return (
    <ScrollView          
        showsVerticalScrollIndicator={false}
        style={{
           maxHeight:verticalScale_hights(420)
        }}
    >  
        <TitleWithReadMoreComponent title="خدمات للتصوير" readMore=""/>
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: scale_width(16),
          }}>
            {TEST_DATA.map((service, index) => {
              return <OtherServicesCardComponent title={service.title} icon={service.imgUrl}/>
            })}
        </ScrollView>

      <TitleWithReadMoreComponent title="خدمات قريبة منك" readMore=""/>
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: scale_width(16),
          }}>
            {[1, 2, 3, 4].map((_, index) => {
              return(
                <CompaniesCardComponent 
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
        

      <TitleWithReadMoreComponent title="متاح للحجز الآن" readMore=""/>
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: scale_width(16),
          }}>
            {[1, 2, 3, 4].map((_, index) => {
              return(
                <CompaniesCardComponent 
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
    </ScrollView>
  )
}

export default OtherServices

