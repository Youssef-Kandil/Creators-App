import { View,Text,TouchableOpacity, ScrollView,Image,StyleSheet,useColorScheme,StatusBar,Platform } from 'react-native';
import React from 'react';

import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';

import HeaderTitle from '@/components/HeaderTitle';
import LinkPreview from '@/components/LinkPreview';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import UserIcon from '@/assets/images/Icons/user.svg';
import ExperienceIcon from '@/assets/images/Icons/experience.svg';
import SkillsIcon from '@/assets/images/Icons/skills.svg'
import BK_Fram from '@/assets/images/Icons/Fram1.svg';


const portfolioLinks = [
  'https://youtu.be/Ln-Q7oS_ZtY?si=4CV1-fW4ww03XDoA',
  'https://pin.it/E7bCkh930',
  'https://www.pinterest.com/',
  'https://www.pinterest.com/',
  'https://www.pinterest.com/',
  'https://www.pinterest.com/',
  'https://www.pinterest.com/',
  'https://www.pinterest.com/',
  'https://www.pinterest.com/',
];

const Profile = () => {
    const theme = useColorScheme()
    const isDark = theme === 'dark';
    const themeColors = isDark ? darkThem : lightThem;    
    const { width, height } = useWindowDimensions();
    const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;

    const [showLinks, setShowLinks] = React.useState(false);

    const handleScroll = (event : any) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    console.log(yOffset)
    if (yOffset > 110) { // لما المستخدم يمرر لحد معين
        setShowLinks(true);
    }
    };

  return (
    <View style={[
        { paddingTop,
          paddingHorizontal:scale_width(16),
          direction:"rtl",
          backgroundColor:themeColors.BackGroundAndIcons,
          marginTop: verticalScale_hights(30),
           width:width, height:height}]}>
            <ScrollView
                scrollEventThrottle={16}
                onScroll={handleScroll}
                contentContainerStyle={{ alignItems:"flex-start",}}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews={true}
                style={{
                    maxHeight:verticalScale_hights(720)
              }}
            >

                <HeaderTitle title='الصفحة الشخصية'/>

                <View style={styles.headerContainer}>
                    <BK_Fram width={width} height={verticalScale_hights(200)} fill={"#FDD0A3"}/>
                    <View style={[{width:verticalScale_hights(140),height:verticalScale_hights(140),borderColor:themeColors.Primary,borderWidth:moderateScale_Font(6),borderRadius:200,position:"absolute",bottom:"-25%",alignSelf:"center",backgroundColor:"#333"}]}>
                        <Image source={require('@/assets/images/ProfileTest.png')} style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:200}} />
                    </View>
                </View>

                <View style={{alignSelf:"center",marginTop:verticalScale_hights(60),}}>
                    <Text style={{color:themeColors.textColor,fontSize:moderateScale_Font(25),fontWeight:"bold",textAlign:"center"}}>محمد مدني</Text>
                    <Text style={{color:themeColors.subTextColor,fontSize:moderateScale_Font(12),textAlign:"center"}}>@Madani5625</Text>
                    <Text style={{color:themeColors.subTextColor,fontSize:moderateScale_Font(18),textAlign:"center"}}>مبدع في الاخراج</Text>
                </View>

            {/* === Buttons SECTION == */}
                <View style={{flexDirection:"row",gap:scale_width(10),marginTop:verticalScale_hights(15),alignSelf:"center"}}>
                    <View style={{width:verticalScale_hights(40),height:verticalScale_hights(40),borderWidth:moderateScale_Font(1),borderColor:themeColors.Primary,borderRadius:verticalScale_hights(300),justifyContent:"center",alignItems:"center"}}>
                        {/* <Entypo name="dots-three-horizontal" size={moderateScale_Font(16)} color={themeColors.subTextColor} /> */}
                        <FontAwesome name="share" size={moderateScale_Font(14)} color={themeColors.subTextColor} />
                    </View>
                    <TouchableOpacity style={[styles.BTNS,{backgroundColor:themeColors.Primary,}]}>
                        <Text style={{ color:'#fff' ,fontSize:moderateScale_Font(17),textAlign:"center"}}>تعيين</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.BTNS,{borderColor:themeColors.Primary,borderWidth:verticalScale_hights(1)}]}>
                        <Text style={{ color:themeColors.Primary ,fontSize:moderateScale_Font(17),textAlign:"center"}}>كتابة تعليق</Text>
                    </TouchableOpacity>

                </View>


            {/* === BIO SECTION == */}
                <View style={{marginTop:verticalScale_hights(30),paddingHorizontal:scale_width(30)}}>
                    <View style={{flexDirection:"row",alignItems:"center",gap:scale_width(5)}}>
                        <UserIcon/>
                        <Text style={{color:themeColors.textColor,fontSize:moderateScale_Font(19)}}>نبذة عني</Text>
                    </View>
                    <Text style={{color:themeColors.subTextColor,fontSize:moderateScale_Font(16),paddingHorizontal:scale_width(10),marginTop:verticalScale_hights(5)}}>
                        أنا [اسم الموهبة]، صانع فيديوهات محترف بخبرة تتجاوز [عدد السنوات] سنوات في تحويل الأفكار إلى محتوى بصري ينبض بالحياة. أُتقن إنتاج فيديوهات تسويقية، تعليمية، بروموهات، وموشن جرافيك بطريقة تُبقي المشاهد مركزًا وتجعل الرسالة تصل بأقصى فعالية.
                    </Text>
                </View>



            {/* === PORTOFOLIO SECTION == */}
                {showLinks && (
                <View style={{marginTop:verticalScale_hights(30),paddingHorizontal:scale_width(30),width:"100%"}}>
                    <View style={{flexDirection:"row",alignItems:"center",gap:scale_width(5)}}>
                        <ExperienceIcon/>
                        <Text style={{color:themeColors.textColor,fontSize:moderateScale_Font(19)}}>معرض أعمالي</Text>
                    </View>
                    <View style={{flexDirection:"row",gap:scale_width(10),flexWrap:"wrap",width:scale_width(300),marginTop:verticalScale_hights(20)}}>
                        {portfolioLinks.map((url ,index)=><LinkPreview key={index} url={url}/>)}        
                    </View>
                </View>
                )}

            {/* === LANG SECTION == */}
                <View style={{marginVertical:verticalScale_hights(30),paddingHorizontal:scale_width(30)}}>
                    <View style={{flexDirection:"row",alignItems:"center",gap:scale_width(5)}}>
                        <SkillsIcon/>
                        <Text style={{color:themeColors.textColor,fontSize:moderateScale_Font(19)}}>اللغات</Text>
                    </View>

                    <View style={{flexDirection:"row",flexWrap:"wrap",width:"100%",gap:scale_width(12),marginTop:verticalScale_hights(10)}}>
                        {["English","German","Arabic"].map((lang,index)=>{
                            return <View  key={index} style={{backgroundColor: themeColors.borderColor,height:verticalScale_hights(36),minWidth:scale_width(80),alignItems:"center",justifyContent:"center",borderRadius:verticalScale_hights(12)}}>
                                <Text style={{color:themeColors.textColor}}>{lang}</Text>
                            </View>
                        })}
                    </View>

                </View>




            </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    headerContainer:{
        alignSelf:"center",
    },
    BTNS:{
        minWidth:scale_width(130),
        height:verticalScale_hights(37),
        padding:verticalScale_hights(5),
        borderRadius: verticalScale_hights(8),
        alignItems:"center",
        justifyContent:"center",
    },
})

export default Profile