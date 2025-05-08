import { 
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  StatusBar,
  Platform,
  Animated,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'expo-router';


import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';

import { useLocalSearchParams } from 'expo-router';
import LocalStorage from '@/utils/LocalStorage';

import FormTitleComponent from '@/components/FormTitleComponent';
import InputComponent from '@/components/InputComponent';
import MainButtonComponent from '@/components/MainButtonComponent';

const createAccountForm = () => {
  const {isCreator} = useLocalSearchParams()
      const router = useRouter();
        const theme = useColorScheme()
        const isDark = theme === 'dark';
        const themeColors = isDark ? darkThem : lightThem;
    
        const { width, height } = useWindowDimensions();
        const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;

        const inputRefs = useRef<Array<TextInput | null>>([]); 
      // Focus on the first input when screen loads
        useEffect(() => {
          if (inputRefs.current[0]) {
            inputRefs.current[0]?.focus();
          }
        }, []);

        // Handle the scroll to make focused input visible
        const handleFocus = (index: number) => {
          inputRefs.current[index]?.focus();
        };

        // Handle LogedIn ===
      async function handleLogin (){
          await LocalStorage.SaveData('userType',"0")
          router.push({pathname:'/',params:{isCreator}})
        }


        const [email,setEmail] = useState<string>("")
        const [password,setPassword] = useState<string>("")

        return (
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                paddingTop,
                paddingBottom: verticalScale_hights(90),
                paddingHorizontal:scale_width(16),
                direction: 'rtl',
                backgroundColor: themeColors.BackGroundAndIcons,
                marginTop: verticalScale_hights(30),
                width: width,
              }}
            >
              <FormTitleComponent
                title="إنشاء حساب مستفيد"
                subTitle="قم بإدخال اسمك، بريدك الإلكتروني، ورقم هاتفك"
              />
              <View style={{ marginBottom: verticalScale_hights(20) }}>
                <InputComponent 
                  title="الاسم" 
                  placeholder="ادخل اسمك هنا"
                  value={password}
                  keyboardType="default"
                  ref={(el: TextInput | null) => (inputRefs.current[0] = el)}
                  onTyping={(text) => setPassword(text)}
                  onSubmitEditing={() => handleFocus(1)} // Move to next field when "Tab" or "Enter" is pressed
                />
                <InputComponent 
                  title="البريد الالكتروني" 
                  placeholder="ادخل الالكتروني هنا"
                  value={password}
                  keyboardType="email-address"
                  ref={(el) => (inputRefs.current[1] = el)}
                  onTyping={(text) => setPassword(text)}
                  onSubmitEditing={() => handleFocus(2)} // Move to next field when "Tab" or "Enter" is pressed
                />
                <InputComponent 
                  title="رقم الهاتف" 
                  placeholder="ادخل رقم الهاتف هنا"
                  value={password}
                  keyboardType="phone-pad"
                  ref={(el) => (inputRefs.current[2] = el)}
                  onTyping={(text) => setPassword(text)}
                  onSubmitEditing={() => handleFocus(3)} // Move to next field when "Tab" or "Enter" is pressed
                />
                <InputComponent 
                  title="كلمه المرور" 
                  placeholder="ادخل كلمه المرور هنا"
                  value={password}
                  keyboardType="default"
                  ref={(el) => (inputRefs.current[3] = el)}
                  onTyping={(text) => setPassword(text)}
                  onSubmitEditing={() => handleFocus(4)} // Move to next field when "Tab" or "Enter" is pressed
                />
                <InputComponent 
                  title="تأكيد كلمه المرور" 
                  placeholder="ادخل كلمه المرور هنا"
                  value={password}
                  keyboardType="default"
                  ref={(el) => (inputRefs.current[4] = el)}
                  onTyping={(text) => setPassword(text)}
                />
              </View>
              <MainButtonComponent title="انشاء حساب" onClick={handleLogin} />
              <Text
                style={[
                  { color: themeColors.subTextColor, fontSize: moderateScale_Font(16), marginTop: verticalScale_hights(10), textAlign: 'center' },
                ]}
              >
                ليس لديك حساب؟
                <Link push href={'/Register/chooseAccountType'} style={[{ color: themeColors.Primary }]}>
                  {' '}
                  انشاء حساب{' '}
                </Link>
              </Text>
            </ScrollView>
          </KeyboardAvoidingView>
        );
      };
      
export default createAccountForm;