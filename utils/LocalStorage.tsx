import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorage {
    SaveData = async (key:string,value:string)=>{
        try {
            await AsyncStorage.setItem(`${key}`, `${value}`);
          } catch (e) {
            console.error('Failed to save data', e);
          }
    }

    loadData = async (key:string) => {
        try {
            const value = await AsyncStorage.getItem(`${key}`);
            if (value !== null) {
                return value
            }
        } catch (e) {
            console.error('Failed to load data', e);
            return null
        }
    };

    deleteData = async (key:string) => {
        await AsyncStorage.removeItem(`${key}`);
      };
};


export default new LocalStorage();