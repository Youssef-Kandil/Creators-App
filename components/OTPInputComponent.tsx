import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet,useColorScheme } from 'react-native';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';


import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';

import FormTitleComponent from '@/components/FormTitleComponent';
import InputeComponent from '@/components/InputComponent';
import { useThemeColor } from './Themed';

interface props {
    length?: number; 
    onCodeFilled: (code: string) => void 
}

const OTPInputComponent = ({ length = 4, onCodeFilled }:props) => {

  const [isFocus,setIsFocus] = React.useState<boolean>()
  const [isFocusArray, setIsFocusArray] = useState<boolean[]>(new Array(length).fill(false));

  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const inputsRef = useRef<Array<TextInput | null>>([]);
        const router = useRouter();
        const theme = useColorScheme()
        const isDark = theme === 'dark';
        const themeColors = isDark ? darkThem : lightThem;
  
        const { width, height } = useWindowDimensions();

  React.useEffect(() => {
      if (inputsRef.current[0]) {
        inputsRef.current[0]?.focus();  // Focus the first input
      }
  }, []);     

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input
    if (text && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    // إذا كله اتملى
    if (newOtp.every((val) => val !== '')) {
      onCodeFilled(newOtp.join(''));
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleFocus = (index: number) => {
    // const newFocusArray = [...isFocusArray];
    // newFocusArray[index] = true;
    // setIsFocusArray(newFocusArray);
    const newFocusArray = otp.map((_, i) => i === index); // كلهم false ماعدا الحالي
    setIsFocusArray(newFocusArray);
  };
  const handleBlur = (index: number) => {
    const newFocusArray = [...isFocusArray];
    newFocusArray[index] = false;
    setIsFocusArray(newFocusArray);
  };

  return (
    <View style={styles.container}>
      {otp.map((val, i) => {
        // const isFocusedOrFilled = isFocusArray[i] || val !== '';
        const isFocused = isFocusArray[i];
        return <TextInput
            key={i}
            ref={(el) => {inputsRef.current[i] = el}}
            style={[
              styles.field,
              {
                color: themeColors.textColor,
                borderColor:
                  isFocusArray[i] || val !== '' ? themeColors.Primary : themeColors.borderColor,
                opacity: isFocusArray[i] || val !== '' ? 0.7 : 1,
                borderWidth: scale_width(2),
              },
            ]}
            onFocus={() => handleFocus(i)}
            onBlur={() => handleBlur(i)}
            keyboardType="number-pad"
            maxLength={1}
            value={val}
            onChangeText={(text) => handleChange(text, i)}
            onKeyPress={(e) => handleKeyPress(e, i)}
        />
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    padding: 10,
  },
  field: {
    borderWidth: 2,
    width: scale_width(51.7),
    height: verticalScale_hights(61.7),
    textAlign: 'center',
    fontSize: moderateScale_Font(24),
    borderRadius: scale_width(7),
  },
});

export default OTPInputComponent;
