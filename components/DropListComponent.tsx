import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  DimensionValue,
  StatusBar,
  TouchableOpacity,
  Modal,
  FlatList,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useEffect, useRef, useState , ForwardedRef} from 'react';
import { useWindowDimensions } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { darkThem, lightThem } from '@/Config/app_identity';
import { scale_width, verticalScale_hights, moderateScale_Font } from '@/utils/responsive';


interface props {
  title?: string;
  placeholder: string;
  inputWidth?: DimensionValue;
  value: string;
  onTyping?: (text: string) => void;
  editable?: boolean;
  keyboardType?: any;
  onSubmitEditing?: () => void;
  options?: string[]; // خيارات القائمة
  onSelect?: (value: string) => void; // لما المستخدم يختار قيمة
}

const DropListComponent = ({
  title,
  placeholder,
  value,
  onTyping,
  editable = true,
  inputWidth,
  onSubmitEditing,
  options = [],
  onSelect
}: props) => {
          const theme = useColorScheme()
          const isDark = theme === 'dark';
          const themeColors = isDark ? darkThem : lightThem;
      
          const { width, height } = useWindowDimensions();

  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [showList, setShowList] = useState<boolean>(false);

  const animatedHeight = useRef(new Animated.Value(0)).current;

  const maxHeight = height / 2; // أقصى ارتفاع للقائمة

  const toggleList = () => {
    if (!showList) {
      setShowList(true);
      Animated.timing(animatedHeight, {
        toValue: maxHeight,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease)
      }).start();
    } else {
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false
      }).start(() => {
        setShowList(false);
      });
    }
  };


  return (
    <>
      <TouchableOpacity
        onPress={toggleList}
        style={[
          styles.inpute,
          { width: inputWidth ? inputWidth : width - scale_width(16) }
        ]}
      >
        {title && <Text style={[styles.title, { color: themeColors.textColor }]}>{title}</Text>}
        <View
          style={[
            styles.field,
            {
              borderColor: isFocus ? themeColors.Primary : themeColors.borderColor,
              borderWidth: scale_width(2)
            }
          ]}
        >
          <Text
            style={{
              color: themeColors.textColor,
              opacity: isFocus ? 0.7 : 1,
              fontSize: moderateScale_Font(13)
            }}
          >
            {value || placeholder}
          </Text>
          <AntDesign name="down" size={verticalScale_hights(18)} color={themeColors.subTextColor} />
        </View>
      </TouchableOpacity>

      {showList && (
        <Modal transparent animationType="none">
          <TouchableWithoutFeedback onPress={toggleList}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>

          <Animated.View style={[styles.animatedContainer, { height: animatedHeight,backgroundColor:themeColors.borderColor }]}>
            <FlatList
              data={options}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    onSelect?.(item);
                    toggleList();
                  }}
                  style={[styles.optionItem,{backgroundColor:themeColors.borderColor}]}
                >
                  <Text style={{ color: themeColors.textColor }}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </Animated.View>
        </Modal>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  inpute: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: verticalScale_hights(15)
  },
  title: {
    fontWeight: '400',
    fontSize: moderateScale_Font(19),
    paddingHorizontal: scale_width(5),
    marginBottom: verticalScale_hights(3)
  },
  field: {
    fontWeight: '200',
    fontSize: moderateScale_Font(14),
    paddingHorizontal: scale_width(10),
    paddingVertical: verticalScale_hights(10),
    borderRadius: scale_width(8),
    width: '100%',
    height: verticalScale_hights(50),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  animatedContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: scale_width(10)
  },
  optionItem: {
    padding: scale_width(15),
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
});

export default DropListComponent