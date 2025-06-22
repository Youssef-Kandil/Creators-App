import { 
    View,
     useColorScheme,
      StatusBar,
       Platform,
} from 'react-native'
import { useRouter } from 'expo-router';
import React from 'react'


import {darkThem ,lightThem} from '@/Config/app_identity'
import { verticalScale_hights } from '@/utils/responsive'
import { useWindowDimensions } from 'react-native';
import RadioCheckCardComponent from '@/components/Cards/RadioCheckCardComponent'

interface props {
    onSelect: (selectedData :number)=> void 
}

const SelectServiceStep = ({onSelect}:props) => {
    const theme = useColorScheme()
    const isDark = theme === 'dark';
    const themeColors = isDark ? darkThem : lightThem;
            
        
    const [selectedIndex, setSelectedIndex] = React.useState<number|null>(null)
    const handleSelect = (index: number) => {
        setSelectedIndex(index)
        onSelect(index)
    }

  return (
        <View style={{marginTop:verticalScale_hights(30),gap:verticalScale_hights(20),alignSelf:"center"}}>
            {[
                { title: 'خدمة ابداعية', sub: 'ابحث عن مبدعين' },
                { title: 'خدمة للتصوير', sub:'ابحث عن خدمات للإيجار، أماكن، معدات للتصوير' },
                ].map((item, idx) => (
                    <RadioCheckCardComponent
                            key={idx}
                            title={item.title}
                            subTitle={item.sub}
                            theme={themeColors}
                            isSelected={selectedIndex === idx}
                            onClick={() => handleSelect(idx)}
                        />
                ))}
     </View>
  )
}

export default SelectServiceStep