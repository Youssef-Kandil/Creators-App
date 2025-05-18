import React ,{ReactNode}from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import { Link, Tabs } from 'expo-router';

import { View, Platform, Text } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import {lightThem,darkThem} from '@/Config/app_identity'
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { scale_width ,verticalScale_hights ,moderateScale_Font } from '@/utils/responsive';

import Home from '../../assets/images/tabIcons/Home.svg'
import Sheet from '../../assets/images/tabIcons/Sheet.svg'
import Msg from '../../assets/images/tabIcons/MSG.svg'
import User from '../../assets/images/tabIcons/User.svg'

import LocalStorage from '@/utils/LocalStorage';



export default function TabLayout() {
  const [isCreator, setIsCreator] = React.useState<number| null >(null)

  React.useEffect(() => {
    const fetchUserType = async () => {
      const userType = await LocalStorage.loadData('userType');
      if(userType !== null){
        setIsCreator(Number(userType))
      }
    };
  
    fetchUserType();
  }, []);

  console.log("isCreator : " ,isCreator);
  if(isCreator == 1){
      return <CreatorUi_Tabs/>;
  }

  if (isCreator == 0) {
    return <UserUi_Tabs/>; 
  }

}


function CreatorUi_Tabs(){
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          flexDirection: 'row',
          direction:"ltr",
          paddingTop:verticalScale_hights(10),
          height:Platform.OS == "ios" ?verticalScale_hights(90):verticalScale_hights(100),
          backgroundColor:colorScheme == "dark"?darkThem.cardBackground:lightThem.cardBackground
        },
        tabBarLabelStyle: {
          marginTop:verticalScale_hights(5),
          fontSize: moderateScale_Font(13),         // 👈 كبر الخط هنا   // اختياري
        },
      }}>

        <Tabs.Screen name="Account"
          options={{
            title: 'الحساب',
            tabBarIcon: ({ color, focused }) => <User width={scale_width(40)} height={verticalScale_hights(30)} stroke={focused?(colorScheme == "dark"?"#000":"#fff"):(colorScheme == "dark"?"#000":"#fff")} strokeWidth={0.5}  fill={focused?lightThem.Primary:"#6B7280"}  />,
          }}
        />
        <Tabs.Screen name="Messages"
          options={{
            title: 'الرسائل',
            tabBarIcon: ({ color, focused }) => <Msg width={scale_width(40)} height={verticalScale_hights(30)} stroke={focused?(colorScheme == "dark"?"#000":"#fff"):(colorScheme == "dark"?"#000":"#fff")} fill={focused?lightThem.Primary:"#6B7280"}  />,
          }}
        />

        
      <Tabs.Screen name="CreateNewService"
        options={{
          title: 'three',
          tabBarLabel: '',
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                position: 'absolute',
                top: scale_width(-20),
                width: verticalScale_hights(60),
                height: verticalScale_hights(60),
                borderRadius: scale_width(50),
                backgroundColor: lightThem.Primary,
                alignItems: 'center',
                justifyContent: 'center',
                shadowColor: '#000',
                shadowOpacity: 0.2,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 5,
                elevation: 5,
              }}
            >
              <Feather name="plus" size={scale_width(24)} color="#FFF" />
            </View>
          ),
        }}
      />

      <Tabs.Screen name="Orders"
        options={{
          title: 'التقديمات',
          tabBarIcon: ({ color, focused }) => <Sheet width={scale_width(40)} height={verticalScale_hights(30)} stroke={focused?(colorScheme == "dark"?"#000":"#fff"):(colorScheme == "dark"?"#000":"#fff")} fill={focused?lightThem.Primary:"#6B7280"}  />,
        }}
      />

    <Tabs.Screen name="index"
        options={{
          title: 'الرئيسيه',
          tabBarIcon: ({ color ,focused }) => <Home width={scale_width(40)} height={verticalScale_hights(30)} fill={focused?lightThem.Primary:"#6B7280"}  />,
        }}
      />
    </Tabs>
  );
}

function UserUi_Tabs(){
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  console.log("my ",Platform.OS," Phone Has",insets)
  return (
    <Tabs
      screenOptions={{
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          flexDirection: 'row',
          direction:"ltr",
          paddingTop:verticalScale_hights(10),
          height:Platform.OS == "ios" ?verticalScale_hights(90):verticalScale_hights(90+insets.bottom),
          backgroundColor:colorScheme == "dark"?darkThem.cardBackground:lightThem.cardBackground
        },
        tabBarLabelStyle: {
          marginTop:verticalScale_hights(5),
          fontSize: moderateScale_Font(13),         // 👈 كبر الخط هنا   // اختياري
        },
      }}>

        <Tabs.Screen name="Account"
          options={{
            title: 'الحساب',
            tabBarIcon: ({ color, focused }) => <User width={scale_width(40)} height={verticalScale_hights(30)} stroke={focused?(colorScheme == "dark"?"#000":"#fff"):(colorScheme == "dark"?"#000":"#fff")} strokeWidth={0.5}  fill={focused?lightThem.Primary:"#6B7280"}  />,
          }}
        />
        <Tabs.Screen name="Messages"
          options={{
            title: 'الرسائل',
            tabBarIcon: ({ color, focused }) => <Msg width={scale_width(40)} height={verticalScale_hights(30)} stroke={focused?(colorScheme == "dark"?"#000":"#fff"):(colorScheme == "dark"?"#000":"#fff")} fill={focused?lightThem.Primary:"#6B7280"}  />,
          }}
        />

        
      <Tabs.Screen name="CreateNewService"
        options={{
          title: 'three',
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: moderateScale_Font(12),
                color: focused ? lightThem.Primary : '#6B7280',
                top:verticalScale_hights(5) // 👈 المسافة بين الليبل والدائرة
              }}
            >
              خدمة جديدة
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            
            <View
              style={{
                position: 'absolute',
                top: verticalScale_hights(-35),
                width: verticalScale_hights(60),
                height: verticalScale_hights(60),
                borderRadius: scale_width(50),
                backgroundColor: lightThem.Primary,
                alignItems: 'center',
                justifyContent: 'center',
                shadowColor: '#000',
                shadowOpacity: 0.2,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 5,
                elevation: 5,
              }}
            >
              <Feather name="plus" size={scale_width(24)} color="#FFF" />
            </View>
          ),
        }}
      />

      <Tabs.Screen name="Jobs"
        options={{
          title: 'طلبات',
          tabBarIcon: ({ color, focused }) => <Sheet width={scale_width(40)} height={verticalScale_hights(30)} stroke={focused?(colorScheme == "dark"?"#000":"#fff"):(colorScheme == "dark"?"#000":"#fff")} fill={focused?lightThem.Primary:"#6B7280"}  />,
        }}
      />

    <Tabs.Screen name="Home"
        options={{
          title: 'الرئيسيه',
          tabBarIcon: ({ color ,focused }) => <Home width={scale_width(40)} height={verticalScale_hights(30)} fill={focused?lightThem.Primary:"#6B7280"}  />,
        }}
      />
    </Tabs>
  );
}


