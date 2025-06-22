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

import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';

import FormTitleComponent from '@/components/FormTitleComponent';
import InputComponent from '@/components/InputComponent';
 import LocalStorage from '@/utils/LocalStorage';

const Login = () => {
      const router = useRouter();
        const theme = useColorScheme()
        const isDark = theme === 'dark';
        const themeColors = isDark ? darkThem : lightThem;
    
        const { width, height } = useWindowDimensions();
        const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;

        const [email,setEmail] = useState<string>("")
        const [password,setPassword] = useState<string>("")

        // === Check User Is Already Loged In Or Not ===
            const [isCreator, setIsCreator] = React.useState<number| null >(null)
        const [isLogedIn, setIsLogedIn] = React.useState<number| null >(null)
        React.useEffect(() => {
            const fetchUserType = async () => {
                const userType = await LocalStorage.loadData('userType');
                if(userType !== null){
                  setIsCreator(Number(userType))
                }
                const isLogedIn = await LocalStorage.loadData("isLogedIn");
                if(isLogedIn !== null){
                      setIsLogedIn(Number(isLogedIn))
                  }
                if (Number(isLogedIn) === 1 && userType ) {
                      router.replace('/(tabs)/Home')
                }
               };
              fetchUserType();
            }, []);



        function handelLogin(){
            if(email.length > 0 && password.length > 0 ){
                if (isCreator) {
                    LocalStorage.SaveData("userType","1")
                }else{
                    LocalStorage.SaveData("userType","0")
                }
                LocalStorage.SaveData("isLogedIn","1")
                router.replace('/(tabs)/Home')
            }else{
                alert("الرجاء إدخال جميع المعلومات")
            }

        }

  return (
    <View   style={[
        { paddingTop,
          paddingHorizontal:scale_width(16),
          direction:"rtl",
          backgroundColor:themeColors.BackGroundAndIcons,
          marginTop: verticalScale_hights(30),
           width:width, height:height}
        ]} >

            <FormTitleComponent
                title='اهلا، مرحبًا بعودتك! 👋'
                subTitle='مرحبا مره اخري! الرجاء إدخال معلومات حسابك' 
            />
            <View>
                <InputComponent 
                    title='البريد الالكتروني' 
                    placeholder='ادخل البريد الالكتروني هنا'
                    value={email}
                    keyboardType='email-address'
                    onTyping={(text)=>setEmail(text)}/>
                <InputComponent 
                    title='كلمه المرور' 
                    placeholder='ادخل كلمه المرور هنا'
                    value={password}
                    keyboardType='email-address'
                    onTyping={(text)=>setPassword(text)}/>
                <Link push href={'/Auth/Forget_password'} style={[{color:themeColors.subTextColor, fontSize:moderateScale_Font(14),textAlign:"left"}]}>نسيت كلمه المرور؟</Link>
            </View>
        {/* ===== START BUTTON ===== */}
        <TouchableOpacity onPress={handelLogin} style={{width:"100%",marginTop:verticalScale_hights(20)}}>
            <View style={[styles.btn,{backgroundColor:themeColors.Primary}]}>
                <Text style={[styles.btnTitle]}>تسجيل دخول</Text>
            </View>
        </TouchableOpacity>
        {/* ==== START ROUTE TO LOGIN ==== */}
        <Text style={[{color:themeColors.subTextColor, fontSize:moderateScale_Font(16), marginTop:verticalScale_hights(10),textAlign:"center"}]}>ليس لديك حساب؟<Link push href={'/Register/chooseAccountType'} style={[{color:themeColors.Primary}]}>  انشاء حساب  </Link></Text>
    </View>
  )
}

const styles = StyleSheet.create({
    backBtn:{
        width:scale_width(30),
        height:scale_width(30),
        borderRadius:scale_width(50),
        alignItems:"center",
        justifyContent:"center",
        marginBottom:verticalScale_hights(30),
    },
    titlesContainer:{
        width:"100%",
        alignItems:"flex-start",
        marginBottom:verticalScale_hights(30),

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

export default Login