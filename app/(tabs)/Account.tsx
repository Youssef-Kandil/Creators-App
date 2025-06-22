import { 
  View,
  ScrollView,
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
import { router, useRouter } from 'expo-router';
import { Link } from 'expo-router';
import React, { useState } from 'react'

// === ICONS
import User from '@/assets/images/Icons/User2.svg'
import Visa from '@/assets/images/Icons/Visa.svg'
import Wallet from '@/assets/images/Icons/Wallet.svg'
import Langs from '@/assets/images/Icons/Langs.svg'
import Contact from '@/assets/images/Icons/Contact.svg'
import Conditions from '@/assets/images/Icons/Conditions.svg'
import Secure from '@/assets/images/Icons/Secure.svg'
import Cancel from '@/assets/images/Icons/Cancel.svg'
import Out from '@/assets/images/Icons/Out.svg'

import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';


import HeaderTitle from '@/components/HeaderTitle';
import SettingsCard from '@/components/Cards/SettingsCard';
import LocalStorage from '@/utils/LocalStorage';

import BottomSheetModal from '@/components/BottomSheetModal';
import RadioCheckCardComponent from '@/components/Cards/RadioCheckCardComponent';
const Account = () => {
  const theme = useColorScheme()
  const isDark = theme === 'dark';
  const themeColors = isDark ? darkThem : lightThem;    
  const { width, height } = useWindowDimensions();
  const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;

  const [showLangModal, setShowLangModal] = React.useState(false);
  const [showDeleteAccountModal, setShowDeleteAccountModal] = React.useState(false);
  async function handleLogOut(){
      await LocalStorage.deleteAllData();
      await LocalStorage.SaveData("Onboarding","1");
      router.replace('/Auth/Login')
  }
return (
<View style={[
  { paddingTop,
    paddingHorizontal:scale_width(16),
    direction:"rtl",
    alignItems:"flex-start",
    backgroundColor:themeColors.BackGroundAndIcons,
    marginTop: verticalScale_hights(30),
     width:width, height:height}
  ]} >

    <ScrollView style={{width:"100%",maxHeight:verticalScale_hights(620)}}>
      <HeaderTitle isTab={true} title="الحساب" />
      {/* ========== */}
      <View style={{backgroundColor:themeColors.bannerBackground,flexDirection:"row",alignItems:"center",paddingHorizontal:verticalScale_hights(10),paddingVertical:verticalScale_hights(20),borderRadius:verticalScale_hights(10),gap:verticalScale_hights(10),justifyContent:"flex-start"}}>
        <View style={{backgroundColor:themeColors.cardBackground,width:verticalScale_hights(50),height:verticalScale_hights(50),alignItems:"center",justifyContent:"center",borderRadius:verticalScale_hights(200)}}>
          <Text style={{color:themeColors.textColor,fontSize:moderateScale_Font(18)}}>AH</Text>
        </View>
        <View style={{direction:"rtl",alignItems:"flex-start"}}>
          <Text  style={{color:themeColors.textColor,fontSize:moderateScale_Font(18)}}>مرحبا! احمد حسن  👋</Text>
          <Text  style={{color:themeColors.subTextColor,fontSize:moderateScale_Font(16)}}>راجع تفاصيل حسابك وتحديثات الطلبات هنا</Text>
        </View>
      </View>
      {/* ========== */}

      <View>
        <Text  style={{color:themeColors.textColor,fontSize:moderateScale_Font(20),fontWeight:"bold",marginVertical:verticalScale_hights(20),marginHorizontal:verticalScale_hights(7),alignSelf:"flex-start"}}>
          حسابي
        </Text>
        <SettingsCard title='تعديل بياناتك الشخصيه' icon={<User width={verticalScale_hights(25)} height={verticalScale_hights(25)}/>} onClick={()=>router.push('/UI/(global_UI)/EditeAccountInfo')}/>
        <SettingsCard title='طرق الدفع' icon={<Visa width={verticalScale_hights(25)} height={verticalScale_hights(25)}/>} onClick={()=>{}}/>
        <SettingsCard title='المحفظة' icon={<Wallet width={verticalScale_hights(25)} height={verticalScale_hights(25)}/>} onClick={()=>{}}/>
      </View>

      <View>
        <Text  style={{color:themeColors.textColor,fontSize:moderateScale_Font(20),fontWeight:"bold",marginVertical:verticalScale_hights(20),marginHorizontal:verticalScale_hights(7),alignSelf:"flex-start"}}>
          الخصائص
        </Text>
        <SettingsCard title='اللغة' subTitle='العربية' icon={<Langs width={verticalScale_hights(25)} height={verticalScale_hights(25)}/>} onClick={() => setShowLangModal(true)}/>
        <SettingsCard title='تواصل معنا' icon={<Contact width={verticalScale_hights(25)} height={verticalScale_hights(25)}/>} onClick={()=>{}}/>
        <SettingsCard title='الشروط والأحكام' icon={<Conditions width={verticalScale_hights(25)} height={verticalScale_hights(20)}/>} onClick={()=>{}}/>
        <SettingsCard title="السياسة والخصوصية" icon={<Secure width={verticalScale_hights(25)} height={verticalScale_hights(25)}/>} onClick={()=>{}}/>
        <SettingsCard title='حذف الحساب' icon={<Cancel width={verticalScale_hights(25)} height={verticalScale_hights(25)}/>} onClick={()=>setShowDeleteAccountModal(true)}/>
      </View>
      <TouchableOpacity 
        onPress={handleLogOut}
        style={{
          flexDirection:"row",
          alignItems:"center",
          alignSelf:"center",
          marginVertical:verticalScale_hights(25),
          gap:verticalScale_hights(10)
          }}>
        <Out width={verticalScale_hights(25)} height={verticalScale_hights(20)}/>
        <Text style={{color:"#F14141",fontSize:moderateScale_Font(16)}}>تسجيل خروج</Text>
      </TouchableOpacity>
    </ScrollView>

    {/* ======== START SET LANG SHEET ====== */}
    <BottomSheetModal
      visible={showLangModal}
      onClose={() => setShowLangModal(false)}
      sheetHeight={height * 0.3} // اختياري
    >
       <RadioCheckCardComponent
          title='العربية'
          subTitle='AR'
          theme={themeColors}
          isSelected={true}
          onClick={()=>{}}
       />

    </BottomSheetModal>

    {/* ========== START DELETE ACCOUNT SHEET */}
    <BottomSheetModal
      visible={showDeleteAccountModal}
      onClose={() => setShowDeleteAccountModal(false)}
      sheetHeight={height * 0.3} // اختياري
    >
      <View>

      </View>

    </BottomSheetModal>
    
</View>
)
}


export default Account