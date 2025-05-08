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
    imgSrc:number;
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

const UserTypeCard = ({imgSrc,title,subTitle,theme,onClick,isSelected}:UserTypeCardProps)=>{
    const themeType = useColorScheme()
    return <View style={cardStyles.card}>
        <View onTouchStart={onClick} style={[cardStyles.rightContainer]}>
            <View style={{overflow:"hidden",width:scale_width(40),height:scale_width(40)}}>
                <Image source={imgSrc} resizeMode='contain' style={{height:"100%",width:"100%"}}/>
            </View>        
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

const chooseAccountType = () => {
      const router = useRouter();
        const theme = useColorScheme()
        const isDark = theme === 'dark';
        const themeColors = isDark ? darkThem : lightThem;
    
        const { width, height } = useWindowDimensions();
        const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;

        const [selectedIndex, setSelectedIndex] = React.useState<number|null>(null)
        const handleSelect = (index: number) => {
            setSelectedIndex(index)
          }

          const handelGoToCreateAcountForm = ()=>{
            console.log(selectedIndex)
            if (selectedIndex != null && selectedIndex == 0) {
                router.push({pathname:'/Register/User_ui/createAccountForm',params:{isCreator:selectedIndex}})
            }else{
                router.navigate('/Register/Creator_ui/createAccountForm')
            }
          }



          
  return (
    <View   style={[
        { paddingTop,
          paddingHorizontal:scale_width(16),
          direction:"rtl",
          alignItems:"center",
          backgroundColor:themeColors.BackGroundAndIcons,
          marginTop: verticalScale_hights(30),
           width:width, height:height}
        ]} >

        <Image source={require('../../assets/images/logo1.webp')} style={{width:scale_width(300),height:verticalScale_hights(200),objectFit:"contain"}}/>
        {/* ===== START TITLES ===== */}
        <View style={styles.titlesContainer}>
            <Text style={[styles.title,{color:themeColors.textColor}]}>انضم لــ كريتورز</Text>
            <Text style={[styles.subTitle,{color:themeColors.subTextColor}]}>قم بتوظيف مبدعين موهوبين للعمل معك
            </Text>
        </View>
        {/* ==== START CARDS ==== */}
        <View style={{marginTop:verticalScale_hights(30),gap:verticalScale_hights(20)}}>
                {[
                { title: 'أنا مستفيد', sub: 'ابحث عن مبدعين', img: require('../../assets/images/Image1.webp') },
                { title: 'أنا مبدع', sub: 'أقدم خدمات إبداعية', img: require('../../assets/images/Image1.webp') },
                ].map((item, idx) => (
                    <UserTypeCard
                        key={idx}
                        imgSrc={item.img}
                        title={item.title}
                        subTitle={item.sub}
                        theme={themeColors}
                        isSelected={selectedIndex === idx}
                        onClick={() => handleSelect(idx)}
                    />
                ))}
        </View>
        {/* ===== START BUTTON ===== */}
        <TouchableOpacity onPress={handelGoToCreateAcountForm} style={{width:"100%",marginTop:verticalScale_hights(20)}} disabled={selectedIndex==null}>
            <View style={[styles.btn,selectedIndex!=null?{backgroundColor:themeColors.Primary}:{backgroundColor:"rgba(0, 0, 0, 0.25)"}]}>
                <Text style={[styles.btnTitle]}>انشاء حساب</Text>
            </View>
        </TouchableOpacity>
        {/* ==== START ROUTE TO LOGIN ==== */}
        <Text style={[{color:themeColors.subTextColor, fontSize:moderateScale_Font(16), marginTop:verticalScale_hights(10)}]}>لديك حساب؟<Link push href={'/Auth/Login'} style={[{color:themeColors.Primary}]}> تسجيل دخول </Link></Text>
    </View>
  )
}


const styles = StyleSheet.create({
    titlesContainer:{
        width:"100%",
        alignItems:"flex-start"

    },
    title:{
        fontWeight:500,
        fontSize:moderateScale_Font(22)

    },
    subTitle:{
        fontSize:moderateScale_Font(16)

    },

    btn:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        height:verticalScale_hights(50),
        borderRadius:verticalScale_hights(10),
        marginTop: verticalScale_hights(20),
    },
    btnTitle:{
        color:"#FFFFFF",
        fontSize:moderateScale_Font(22),
    },

})

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

export default chooseAccountType