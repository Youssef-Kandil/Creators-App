import { View, Text } from 'react-native'
import React from 'react'
import LocalStorage from '@/utils/LocalStorage';
import { useRouter } from 'expo-router';

const index = () => {
    const router = useRouter()
    // ==== Check IF The User Open The App On First Time
      const [isOnboarding, setIsOnboarding] = React.useState<number| null >(null)
      React.useEffect(() => {
        const fetchUserType = async () => {
          const IsOnboarding = await LocalStorage.loadData("Onboarding");
          if(IsOnboarding !== null){
                setIsOnboarding(Number(IsOnboarding))
            }
            if (isOnboarding == 1) {
                router.replace('/Auth/Login')   
            }else{
                router.replace('/Onboarding')
            }
        };   
        fetchUserType();
    }, []);
}


export default index