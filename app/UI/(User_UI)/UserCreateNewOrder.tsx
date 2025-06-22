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


import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';
import RadioCheckCardComponent from '@/components/Cards/RadioCheckCardComponent'


import SelectServiceStep from './CreateNewOrderSteps/SelectServiceStep';
import CreativeServiceFormStep from './CreateNewOrderSteps/CreativeServiceFormStep';
import PhotographyServiceFormStep from './CreateNewOrderSteps/PhotographyServiceFormStep';
import SuccessStep from './CreateNewOrderSteps/SuccessStep';

const UserCreateNewOrder = () => {
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

                const [step, setStep] = React.useState(0);
                const [selectedService, setSelectedService] = React.useState<'creative' | 'services' | null>(null);

                console.warn(step)
                const next = () => {    
                    if (step < 1) {
                        
                        setStep((s) => s + 1)
                    }
                    if (step === 1) {
                        router.navigate("/UI/(User_UI)/CreateNewOrderSteps/SuccessStep")
                    }
                };
                const back = () => {    
                    if (step != 0) {
                        
                        setStep((s) => s - 1)
                    }
                };
    
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

    
        {/* ==== START STEPS ==== */}
        <View style={{height:verticalScale_hights(430)}}>
            {/* ==== Select Service STEP ==== */}
            {/* {
                step === 0 && (
                   <SelectServiceStep onSelect={handleSelect}/>
                )
            } */}

            {/* {
                (selectedIndex == 0 && step === 1)&&(
                    <CreativeServiceFormStep/>
                ) 
                ||
                (selectedIndex == 1 && step === 1)&&(
                    <PhotographyServiceFormStep/>
                ) 
            } */}

            {/* {
                (selectedIndex == 0 && step === 2)&&(
                    <CreativeServiceFormStep.OtherDetails/>
                ) 
                ||
                (selectedIndex == 1 && step === 2)&&(
                    <PhotographyServiceFormStep.OtherDetails/>
                ) 
            } */}

            {
                step === 0 && (
                   <CreativeServiceFormStep/>
                )
            }
            {
                step === 1 && (
                    <CreativeServiceFormStep.OtherDetails/>
                )
            }


        </View>


        {/* ==== START BTNS ==== */}

                <View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <TouchableOpacity onPress={next}>
                        <View style={{backgroundColor:themeColors.Primary,padding:scale_width(4),paddingHorizontal:verticalScale_hights(18),borderRadius:verticalScale_hights(10)}}>
                            <Text style={{color:"#FFFFFF",fontSize:moderateScale_Font(20)}}>التالي</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={back}>
                        <View style={{borderColor:themeColors.Primary,borderWidth:verticalScale_hights(1),padding:scale_width(4),paddingHorizontal:verticalScale_hights(20),borderRadius:verticalScale_hights(10)}}>
                            <Text style={{color:themeColors.Primary,fontSize:moderateScale_Font(20)}}>السابق</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            
    </View>
  )
}

export default UserCreateNewOrder