
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import { useState, useEffect } from 'react';
import { Stack } from 'expo-router';

import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import { usePathname } from 'expo-router';

import { useColorScheme } from '@/components/useColorScheme';
import { Platform } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  // initialRouteName: '(tabs)',
  initialRouteName: 'Onboarding',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default  function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}



function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();
  console.log(Platform.OS,pathname)

  return (
    <ThemeProvider  value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName='Onboarding'>
        <Stack.Screen name="Onboarding" options={{ headerShown: false,animation:'slide_from_right'}} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        
        <Stack.Screen name="Register/chooseAccountType" options={{headerShown: false,animation:'ios_from_left' }} />
        <Stack.Screen name="Register/User_ui/createAccountForm" options={{headerShown: false,animation:'ios_from_left' }} />
        <Stack.Screen name="Register/Creator_ui/createAccountForm" options={{headerShown: false,animation:'ios_from_left' }} />
        
        <Stack.Screen name="Auth/Login" options={{headerShown: false,animation:'ios_from_left' }} />
        <Stack.Screen name="Auth/Forget_password" options={{headerShown: false,animation:'ios_from_left' }} />
        <Stack.Screen name="Auth/CreateNewPassword" options={{headerShown: false,animation:'ios_from_left' }} />
        <Stack.Screen name="Auth/OTP" options={{headerShown: false,animation:'ios_from_left' }} />

        <Stack.Screen name="UI/(global_UI)/Notifications" options={{headerShown: false,animation:'slide_from_bottom' }} />
        <Stack.Screen name="UI/(global_UI)/SearchScreen" options={{headerShown: false,animation:'slide_from_bottom' }} />
      </Stack>
    </ThemeProvider>
  );
}
