import React, { useRef, useEffect } from 'react';
import {
  Modal,
  Animated,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  useColorScheme,
} from 'react-native';

import {darkThem ,lightThem} from '@/Config/app_identity'

const { height } = Dimensions.get('window');

interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  sheetHeight?: number; // optional, default to half screen
}

const BottomSheetModal = ({ visible, onClose, children, sheetHeight }: BottomSheetProps) => {
  const slideAnim = useRef(new Animated.Value(height)).current;
  const finalHeight = sheetHeight ?? height * 0.5;
    const theme = useColorScheme()
    const isDark = theme === 'dark';
    const themeColors = isDark ? darkThem : lightThem; 

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: height - finalHeight,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: height,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  }, [visible]);

  return (
    <Modal  transparent visible={visible} animationType="none">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.sheet, { top: slideAnim, height: finalHeight ,backgroundColor:themeColors.BackGroundAndIcons}]}>
        {children}
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
});

export default BottomSheetModal;
