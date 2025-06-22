import { View, Text ,useColorScheme,StyleSheet} from 'react-native'
import React from 'react'

import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';

import SA_CurIcon from '@/assets/images/Icons/SA_CUR.svg'

import InputComponent from '@/components/InputComponent'
import DropListComponent from '@/components/DropListComponent'


const CreativeServiceFormStep = () => {
  const theme = useColorScheme()
  const isDark = theme === 'dark';
  const themeColors = isDark ? darkThem : lightThem;
  const { width, height } = useWindowDimensions();

  const [selectedSkill, setSelectedSkill] = React.useState('');
  const [selectedExperience, setSelectedExperience] = React.useState('');
  return (
    <View style={{marginTop:-verticalScale_hights(87)}}>
        <InputComponent
          title='عنوان الخدمة'
          placeholder='ادخل عنوان الخدمة هنا'
          value=''
        />
        <DropListComponent
          title='المهارة المطلوبة للخدمة'
          placeholder='اختر المهارات المطلوبة للخدمة'
          options={["option 1","option 2","option 3","option 4","option 5","option 6","option 7","option 8","option 9"]}
          value={selectedSkill}
          onSelect={(value) => setSelectedSkill(value)}
        />
        <DropListComponent
          title='حدد مستوى الخبرة الذي تحتاجه'
          placeholder='حدد مستوى الخبرة هنا'
          options={["option 1","option 2","option 3","option 4","option 5","option 6","option 7","option 8","option 9"]}
          value={selectedExperience}
          onSelect={(value) => setSelectedExperience(value)}
        />

        <InputComponent
          title='مدة تنفيذ الخدمة الخاصة بك'
          placeholder='حدد مدة تسليم لخدمتك (عدد الايام)'
          value=''
          keyboardType='numeric'
        />

        <Text style={[styles.title,{color:themeColors.textColor}]}>ماهو افضل تقدير لتكلفة خدمتك المطلوبة ؟</Text>
        <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"center"}}>
            <InputComponent
                placeholder='من'
                value=''
                keyboardType='numeric'
                inputWidth={"40%"}
              />
             <SA_CurIcon fill={themeColors.textColor} width={verticalScale_hights(17)} height={verticalScale_hights(17)}/>

            <InputComponent
                placeholder='إالي'
                value=''
                keyboardType='numeric'
                inputWidth={"40%"}
              />
            <SA_CurIcon fill={themeColors.textColor} width={verticalScale_hights(17)} height={verticalScale_hights(17)}/>
        </View>
    </View>
  )
}


// ++++++++++++++++++
// ============== START OtherDetails ===============
// ++++++++++++++++++

CreativeServiceFormStep.OtherDetails = ()=>{
    const [selectedExamples, setSelectedExamples] = React.useState('');
      return (
    <View style={{marginTop:-verticalScale_hights(67)}}>
      <InputComponent
        title='أضف امثلة على الخدمة المطلوبة'
        placeholder='أضف امثلة على الخدمة المطلوبة'
        value={selectedExamples}
        onTyping={(txt)=>setSelectedExamples(txt)}
        multiline
        inputHeight={verticalScale_hights(100)}
      />
      <InputComponent
        title='اوصف ماتحتاج بدقة'
        placeholder='اوصف ماتحتاج بدقة هنا.......'
        value={selectedExamples}
        onTyping={(txt)=>setSelectedExamples(txt)}
        multiline
        inputHeight={verticalScale_hights(100)}
      />
    </View>
  )
}


const styles = StyleSheet.create({
    inpute:{
        alignItems:"flex-start",
        justifyContent:"center",
        alignSelf:"center",
        marginBottom:verticalScale_hights(15)
    },
    title:{
        fontWeight:400,
        fontSize:moderateScale_Font(19),
        paddingHorizontal:scale_width(5),
        marginBottom:verticalScale_hights(3),
        alignItems:"flex-start",
        textAlign:'left',
    },
    field:{
        fontWeight:200,
        fontSize:moderateScale_Font(14),
        paddingHorizontal:scale_width(10),
        paddingVertical:verticalScale_hights(10),
        borderRadius:scale_width(8),
        width:"100%",
        // height:scale_width(50),
        alignSelf:"center",
        textAlign:"right"
    },

})

export default CreativeServiceFormStep