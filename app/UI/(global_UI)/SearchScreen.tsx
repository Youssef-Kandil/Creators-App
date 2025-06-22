import { 
    View,
     Text,
     TextInput,
     Keyboard,
     TouchableOpacity,
     StyleSheet,
     useColorScheme,
      StatusBar,
       Platform,
       Animated, 
} from 'react-native'
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';
import React, { useState ,useRef } from 'react'

import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width,verticalScale_hights,moderateScale_Font } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import LocalStorage from '@/utils/LocalStorage';

import NotificationsIcon from '@/assets/images/Icons/Notification.svg'
import AntDesign from '@expo/vector-icons/AntDesign';
import IconInputComponent from '@/components/IconInputComponent';


interface userType{
   id:string;
   fullName:string;
   userName:string;
   jobTitle:string;
   bio:string;
   portfolioURL:string;
   langs:string;
   rate:string;
}


const SearchScreen = () => {
    const router = useRouter();
    const inputRef = useRef<TextInput | null>(null)
  // const { isCreator } = useLocalSearchParams();

    const [isCreator, setIsCreator] = React.useState<number| null >(null)
  

    React.useEffect(() => {
        // inputRef.current?.focus();
      const fetchUserType = async () => {
        const userType = await LocalStorage.loadData('userType');
        if(userType !== null){
          setIsCreator(Number(userType))
        }
      };
    
      fetchUserType();
      
      const timeoutId = setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    
      // تنظيف الـ setTimeout عند تدمير الـ effect أو تغييره
      return () => {
        clearTimeout(timeoutId);
      };
    }, []);
    console.log("from index : ",isCreator)


      const theme = useColorScheme()
      const isDark = theme === 'dark';
      const themeColors = isDark ? darkThem : lightThem;    
      const { width, height } = useWindowDimensions();
      const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;

    // Handle Search ===
     const [SearchInput , setSearchInput] = React.useState("")
     const [findResult , setFindResult] = React.useState<userType|null>(null)
     const [prevSearchList , setPrevSearchList] = React.useState<string[]>([])

     async function onSearch(){
        // SEARCH WITH USERNAME - SEND USERNAME TO API
        // IF FIND USER  RETURN HIS DATA
        // ELSE RETURN NULL - SET FIND RESULT STATE = NULL
        return 
     }

     async function handel_Prev_Search_Data(){
        const prevSearchData : string | null | undefined = await LocalStorage.loadData("prevSearch") 
        const prevList :string[] = prevSearchData ? JSON.parse(prevSearchData) : []
        setPrevSearchList(prevList)
        if (SearchInput.length != 0  && !prevList.includes(SearchInput)) {    
          if(prevList.length >= 9){
            prevList.pop();
          }
          prevList.unshift(SearchInput)
          const newList =  prevList
          setPrevSearchList(newList)
          await LocalStorage.SaveData("prevSearch",JSON.stringify(newList))
          console.log("newList : ",newList)
        }

     }

     async function onSubmit(){
      await handel_Prev_Search_Data()
      // == IF Find Result
      if (true) {
        router.push({pathname:'/(tabs)/Home',params:{searchText:SearchInput}})
      }else{

      }
     }

     function onSelectFromList(value:string){
          setSearchInput(value)
          router.push({pathname:'/(tabs)/Home',params:{searchText:value}})
     }

     async function onDeleteList() {
        await LocalStorage.deleteData("prevSearch");
        setPrevSearchList([])
     }
    async function onDeleteItem(index: number) {
      const updatedList = prevSearchList.filter((_, i) => i !== index);
      setPrevSearchList(updatedList);
      await LocalStorage.SaveData("prevSearch", JSON.stringify(updatedList));
    }


     React.useEffect(()=>{handel_Prev_Search_Data()},[])


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
            <View style={[styles.nav,{gap:scale_width(10)}]}>
                <TouchableOpacity style={[styles.backBtn,{backgroundColor:theme == "dark"?"#6666":""}]} onPress={()=>router.back()}>
                    <AntDesign name="arrowright" size={scale_width(15.7)} color={themeColors.textColor} />
                </TouchableOpacity>
                <IconInputComponent
                    ref={inputRef}
                    Width={"80%"}
                    editable={true}
                    placeholder='أبحث عن مبدع او مزود خدمه'
                    value={SearchInput}
                    onTyping={(text)=>{setSearchInput(text)}}
                    onClick={()=>{}}
                    onSubmitEditing={onSubmit}
                    keyboardType="web-search"
                />   
            </View>
            <View>
              <View style={{marginVertical:verticalScale_hights(30),width:"100%",flexDirection:"row",justifyContent:"space-between"}}>
                  <Text style={{color:themeColors.textColor,fontSize:moderateScale_Font(16),fontWeight:"bold"}}>عمليات البحث الأخيرة</Text>
                  <Text onPress={onDeleteList} style={{color:themeColors.subTextColor,fontSize:moderateScale_Font(14)}}>امسح الكل</Text>
              </View>
              {prevSearchList.map((val,index)=>{
                return <TouchableOpacity  style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingVertical:verticalScale_hights(12),paddingHorizontal:scale_width(10)}} key={index}>
                  <Text onPress={()=>onSelectFromList(val)} style={{color:themeColors.textColor,fontSize:moderateScale_Font(16),flex:2}}>{val}</Text>
                  <MaterialIcons onPress={()=>onDeleteItem(index)} style={{flex:0.3,alignSelf:"center",textAlign:"center"}} name="highlight-remove" size={verticalScale_hights(20)} color={themeColors.subTextColor} />
                </TouchableOpacity>
              })}
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    nav:{
        flexDirection:'row',
        alignItems:"center",
        alignSelf:"center",
    },
    backBtn:{
        width:scale_width(30),
        height:scale_width(30),
        borderRadius:scale_width(50),
        alignItems:"center",
        justifyContent:"center",
    },
    track:{
        width:"100%",
        height:verticalScale_hights(10),
        borderRadius:scale_width(10),
        marginBottom:verticalScale_hights(30),
    },
    prog:{
        height:"100%",
        borderRadius:scale_width(10),
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

})

export default SearchScreen