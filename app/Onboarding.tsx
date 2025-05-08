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
import React from 'react'

import { steps } from '@/Config/OnboardingSteps'
import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';




const Onboarding = () => {
  const router = useRouter();
    const theme = useColorScheme()
    const isDark = theme === 'dark';
    const themeColors = isDark ? darkThem : lightThem;

    const { width, height } = useWindowDimensions();
    const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;

    const [currentStep,setCurrentStep] = React.useState<number>(0)
    const dotsAnim = React.useRef(
      steps.map((_, i) => ({
        size: new Animated.Value(i === 0 ? 1 : 0.5),       // scale factor
        color: new Animated.Value(i === 0 ? 1 : 0),       // interpolation driver
      }))
    ).current

    React.useEffect(() => {
      dotsAnim.forEach((anim, i) => {
        Animated.parallel([
          Animated.timing(anim.size, {
            toValue: i === currentStep ? 1 : 0.5, // 1 = كامل الحجم، 0.5 = نص الحجم
            duration: 250,
            useNativeDriver: false,
          }),
          Animated.timing(anim.color, {
            toValue: i === currentStep ? 1 : 0,   // 1 = Primary، 0 = شفاف
            duration: 250,
            useNativeDriver: false,
          }),
        ]).start()
      })
    }, [currentStep])

    const handelGoToCreateAccountScreen =()=>{
      router.replace("/Register/chooseAccountType")
    }

    const handelGoToNextStep =()=>{
      const endInIndex = steps.length -1
      if(currentStep != endInIndex){
        setCurrentStep((s) => (s + 1) % steps.length)
        // setCurrentStep(currentStep+1)
      }else{
        // Go To The Create Account Screen
        handelGoToCreateAccountScreen()
        // setCurrentStep(0)
      }
    }

  return (
    <View   style={[
        { paddingTop,
          paddingHorizontal:scale_width(16),
          direction:"rtl",
          alignItems:"flex-start",
          backgroundColor:themeColors.BackGroundAndIcons,
          marginTop: verticalScale_hights(30),
           width:width, height:height}
        ]} >


            {/* ===== START SKIP BTN ===== */}
            <TouchableOpacity onPress={handelGoToCreateAccountScreen}>
                <Text style={[styles.skip,{}]} >تخطي</Text>
            </TouchableOpacity>
            {/* ===== START STEPS CONTENT ===== */}
            <View style={styles.stepContaner}>
              <Image source={steps[currentStep].img} alt='' style={{objectFit:"contain",width:"100%" ,height:verticalScale_hights(300)}}/>
              <Text style={[styles.title,{color:themeColors.textColor}]} >{steps[currentStep].title}</Text>
              <Text style={[styles.subTitle,{color:themeColors.subTextColor}]} >{steps[currentStep].subTitle}</Text>
            </View>
            {/* ====== START STEPS DOTS ===== */}
            <View style={[styles.stepsDotsContainer]}>
                    {dotsAnim.map((anim, i) => {
                      // نبني لون متداخل من Primary للشفافية
                      const backgroundColor = anim.color.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['transparent', themeColors.Primary],
                      })
                      // نبني العرض والارتفاع كنسبة من الـ scale
                      const dotSize = anim.size.interpolate({
                        inputRange: [0.5, 1],
                        outputRange: [scale_width(9), scale_width(30)],
                      })

                      return (
                        <Animated.View
                          key={i}
                          
                          style={[
                            styles.stepsDots,
                            {
                              width: dotSize,
                              height: scale_width(9),
                              backgroundColor,
                              borderWidth: anim.color.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 0],
                              }),
                            },
                          ]}
                        />
                      )
                      
                    })}
            </View>

          {/* ======= START NEXT BTN ====== */}
          <TouchableNativeFeedback onPress={handelGoToNextStep}      background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.3)', false)}>
            <View style={[styles.btn,{backgroundColor:themeColors.Primary}]}>
              <Text style={[styles.btnTitle,{color:"#FFFFFF"}]}>التالي</Text>
            </View>
          </TouchableNativeFeedback>

    </View>
  )
}

const styles = StyleSheet.create({


    skip:{
        fontSize:moderateScale_Font(16),
        color:"#8E8E8E"
    },
    title:{
        fontSize:moderateScale_Font(24),
        marginTop:verticalScale_hights(50),
    },
    subTitle:{
        fontSize:moderateScale_Font(16),
        marginBottom:verticalScale_hights(10),
    },

    stepContaner:{
      alignItems:"center",
      justifyContent:"center",
      width:"100%",
      minHeight:verticalScale_hights(500),
      textAlign:"center",
      marginTop: verticalScale_hights(15),
      
    },

    stepsDotsContainer:{
      flexDirection:"row",
      width:"100%",
      gap:scale_width(6),
      alignItems:"center",
      justifyContent:"center",
      marginTop: verticalScale_hights(20),
      marginBottom:verticalScale_hights(10),
    },
    stepsDots:{
      width:scale_width(9),
      height:scale_width(9),
      borderColor:"#CECED9",
      borderWidth:scale_width(1),
      borderRadius:30,
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
      fontSize:moderateScale_Font(22),
    },
});

export default Onboarding