import { View,Text, ScrollView,Image,ImageSourcePropType,useColorScheme,StatusBar,Platform } from 'react-native';
import React from 'react';

import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';

import TitleWithReadMoreComponent from '@/components/TitleWithReadMoreComponent'
import CompaniesCardComponent from '@/components/Cards/CompaniesCardComponent';
import CreatorCardComponent from '@/components/Cards/CreatorCardComponent';

import ServicesCardComponent from '@/components/Cards/ServicesCardComponent';

import  ModelIcon  from '@/assets/images/Icons/model.svg';
import  VideoPlayIcon  from '@/assets/images/Icons/video-play.svg';
import  AnnouncementIcon  from '@/assets/images/Icons/announcement.svg';
import  PaintBoardIcon  from '@/assets/images/Icons/paint board.svg';
import PenIcon from '@/assets/images/Icons/pen.svg'
import CameraIcon from '@/assets/images/Icons/camera.svg'

const CreativeServices = () => {
          const theme = useColorScheme()
          const isDark = theme === 'dark';
          const themeColors = isDark ? darkThem : lightThem;    
          const { width, height } = useWindowDimensions();
          const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;

          const TEST_DATA = [
            {
              imgUrl:<CameraIcon  width={scale_width(40)} height={verticalScale_hights(30)}/>,
              title:"مصور",
            },
            {
              imgUrl:<PenIcon  width={scale_width(40)} height={verticalScale_hights(30)} />,
              title:"مصمم",
            },
            {
              imgUrl:<ModelIcon  width={scale_width(40)} height={verticalScale_hights(30)} />,
              title:"مودل",
            },
            {
              imgUrl:<AnnouncementIcon  width={scale_width(40)} height={verticalScale_hights(30)} />,
              title:"معلق صوتي",
            },
            {
              imgUrl:<VideoPlayIcon  width={scale_width(40)} height={verticalScale_hights(30)} />,
              title:"مونتير",
            },
            {
              imgUrl:<PaintBoardIcon  width={scale_width(40)} height={verticalScale_hights(30)} />,
              title:"ميكاب ارتست",
            },
          ]


  return (
       <ScrollView
          showsVerticalScrollIndicator={false}
         style={{
           maxHeight:verticalScale_hights(420)
         }}
       >  
        <TitleWithReadMoreComponent title="خدمات ابداعية" readMore=""/>
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: scale_width(16),
          }}>
            {TEST_DATA.map((service, index) => {
              return <ServicesCardComponent title={service.title} icon={service.imgUrl}/>
            })}
        </ScrollView>

        <TitleWithReadMoreComponent title="خدمات ابداعية عن قرب" readMore=""/>
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: scale_width(16),
          }}>
            {[1, 2, 3, 4].map((_, index) => {
              return(
                <CreatorCardComponent 
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

        <TitleWithReadMoreComponent title="خدمات ابداعية عن بعد" readMore=""/>
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: scale_width(16),
          }}>
            {[1, 2, 3, 4].map((_, index) => {
              return(
                <CreatorCardComponent 
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

export default CreativeServices