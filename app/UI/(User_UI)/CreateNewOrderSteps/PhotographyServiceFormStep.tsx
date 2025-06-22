import { View, Text ,useColorScheme,StyleSheet,ScrollView} from 'react-native'
import React from 'react'

import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';

import InputComponent from '@/components/InputComponent'
import DropListComponent from '@/components/DropListComponent'
import DateRangePicker from '@/components/DateRangePicker';


const PhotographyServiceFormStep = () => {
    const theme = useColorScheme()
    const isDark = theme === 'dark';
    const themeColors = isDark ? darkThem : lightThem;
    const { width, height } = useWindowDimensions();
  
    const [selectedServiceType, setSelectedServiceType] = React.useState('');
    const [selecteddeliveryMethod, setSelectedDeliveryMethod] = React.useState('');

  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);
  return (
    <ScrollView
      contentContainerStyle={{
          paddingTop: verticalScale_hights(10),
          paddingHorizontal: scale_width(16),
          paddingBottom: verticalScale_hights(30),
        }}
        showsVerticalScrollIndicator={false}
       style={{marginTop:-verticalScale_hights(87),flex:1,width:"100%"}}>



        <InputComponent
          title='عنوان الخدمة'
          placeholder='ادخل عنوان الخدمة هنا'
          value=''
        />

          <DropListComponent
            title='طريقة الاستلام والتوصيل'
            placeholder='استلام في الموقع المحدد / نفس مكان تواجد الخدمة'
            options={["استلام في الموقع المحدد","استلام في نفس مكان تواجد الخدمة"]}
            value={selecteddeliveryMethod}
            onSelect={(value) => setSelectedDeliveryMethod(value)}
          />

        <DropListComponent
          title='نوع الأصل المطلوب'
          placeholder='معدات - سيارات - استديو'
          options={["option 1","option 2","option 3","option 4","option 5","option 6","option 7","option 8","option 9"]}
          value={selectedServiceType}
          onSelect={(value) => setSelectedServiceType(value)}
        />



        <View>


      <DateRangePicker
      title='الوقت المحدد الإيجار فيه'
        startDate={startDate}
        endDate={endDate}
        onChangeStart={(date) => setStartDate(date)}
        onChangeEnd={(date) => setEndDate(date)}
      />
    </View>

        <Text style={[styles.title,{color:themeColors.textColor}]}>ماهو افضل تقدير لتكلفة خدمتك المطلوبة ؟</Text>
        <View style={{flexDirection:'row',justifyContent:"space-between"}}>
            <InputComponent
                placeholder='من'
                value=''
                keyboardType='numeric'
                inputWidth={"48%"}
              />
            <InputComponent
                placeholder='إالي'
                value=''
                keyboardType='numeric'
                inputWidth={"48%"}
              />
        </View>
    </ScrollView>
  )
}



// ++++++++++++++++++
// ============== START OtherDetails ===============
// ++++++++++++++++++

PhotographyServiceFormStep.OtherDetails = ()=>{
    const [selectedExamples, setSelectedExamples] = React.useState('');
      return (
    <View style={{marginTop:-verticalScale_hights(67)}}>
      <InputComponent
        title='شروط التأجير '
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

export default PhotographyServiceFormStep