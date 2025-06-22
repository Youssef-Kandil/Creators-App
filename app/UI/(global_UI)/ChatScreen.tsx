import {
  View,
  FlatList,
  Text,
  Image,
  TextInput,
  useColorScheme,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { useWindowDimensions } from 'react-native';
import { useRouter, Link } from 'expo-router';
import React, { useEffect, useState } from 'react';

import { darkThem, lightThem } from '@/Config/app_identity';
import { scale_width, verticalScale_hights, moderateScale_Font } from '@/utils/responsive';
import InputComponent from '@/components/InputComponent';
import HeaderTitle from '@/components/HeaderTitle';
import Feather from '@expo/vector-icons/Feather';
import SendIcon from '@/assets/images/Icons/Send.svg';


import TextMessageComponent from '@/components/Chat_Components/TextMessageComponent';

const ChatScreen = () => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';
  const themeColors = isDark ? darkThem : lightThem;
  const { width, height } = useWindowDimensions();
  const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 50;

  const flatListRef = React.useRef<FlatList<any>>(null);

  // مثال على رسائل
const [messages, setMessages] = useState([
  { id: '1', text: 'مرحباً، كيف حالك؟', sender: 'other',isRead:"0" ,date:""},
  { id: '2', text: 'أنا بخير، وأنت؟', sender: 'me' ,isRead:"1",date:"" },
  { id: '3', text: 'الحمد لله، كل شيء تمام', sender: 'other',isRead:"0",date:"" },
  { id: '4', text: 'امرني', sender: 'me' ,isRead:"1",date:"" },
  { id: '5', text: 'عندي فكرة و محدش هيقدر ينفذها غيرك , بس هي  معقدة شويا', sender: 'other',isRead:"0",date:"" },
  { id: '6', text: 'اي هي الفكرة دي؟', sender: 'me' ,isRead:"1",date:"" },

]);

useEffect(()=>{
 setMessages(messages.reverse());
},[])




  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
    >
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <View style={{
          flex: 1,
          paddingTop,
          direction: "rtl",
          alignItems: "flex-start",
          backgroundColor: themeColors.BackGroundAndIcons,
          width: width,
          height: height
        }}>

          <View style={{ paddingHorizontal: scale_width(16), width: width }}>
            <HeaderTitle title='محادثة' />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between", paddingHorizontal: scale_width(16) }}>
            <View style={{ flexDirection: "row", gap: verticalScale_hights(15), alignItems: "center" }}>
              <Image
                source={require('@/assets/images/ProfileTest.png')}
                style={{
                  width: verticalScale_hights(40),
                  height: verticalScale_hights(40),
                  objectFit: "cover",
                  borderRadius: verticalScale_hights(300)
                }}
              />
              <View style={{ /*alignItems: "flex-start"*/ }}>
                <Text style={{
                  color: themeColors.textColor,
                  fontSize: moderateScale_Font(20),
                  fontWeight: "bold"
                }}>محمد مدني</Text>
                <Text style={{
                  color: themeColors.subTextColor,
                  fontSize: moderateScale_Font(12)
                }}>مبدع في الاخراج</Text>
              </View>
            </View>
            <Feather name="phone" size={moderateScale_Font(22)} color={themeColors.Primary} />
          </View>

        {/* ===== START CHAT WITH FLATLIST */}
        <View style={{ flex: 1, width: width, backgroundColor:themeColors.cardBackground}}>
            <FlatList
            data={messages.reverse()}
            renderItem={({ item }) => <TextMessageComponent data={item} />}
            keyExtractor={(item) => item.id}
            ref={flatListRef}
            onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
            scrollEnabled={true}
              inverted
            showsVerticalScrollIndicator={true}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
            maintainVisibleContentPosition={{ minIndexForVisible: 0 }}
            contentContainerStyle={{
                paddingHorizontal: scale_width(16),
                paddingTop: verticalScale_hights(20),
                paddingBottom: verticalScale_hights(10),
                flexGrow: 1,
            }}
            style={{ flex: 1 }}
            />
        </View>


          {/* ===== INPUT */}
          <View style={{
            width: width,
            marginBottom: verticalScale_hights(10),
            flexDirection: "row",
            alignItems: "center",
            gap: scale_width(10),
            paddingHorizontal: scale_width(16),
          }}>
            {/* INPUT */}
            <InputComponent
              inputWidth={scale_width(293)}
              title=''
              placeholder='اكتب رسالة ...'
              value=''
            />

            {/* SEND BUTTON */}
            <TouchableWithoutFeedback onPress={() => { }}>
              <View style={{
                width: verticalScale_hights(45),
                height: verticalScale_hights(45),
                backgroundColor: themeColors.Primary,
                borderRadius: verticalScale_hights(500),
                marginBottom: verticalScale_hights(15),
                alignItems: "center",
                justifyContent: "center",
              }}>
                <SendIcon width={verticalScale_hights(35)} height={verticalScale_hights(35)} />
              </View>
            </TouchableWithoutFeedback>
          </View>

        </View>
      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
