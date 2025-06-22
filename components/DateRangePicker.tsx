import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useColorScheme } from 'react-native';
import { darkThem, lightThem } from '@/Config/app_identity';
import {
  scale_width,
  verticalScale_hights,
  moderateScale_Font
} from '@/utils/responsive';

interface Props {
    title:string;
  startDate: Date | null;
  endDate: Date | null;
  onChangeStart: (date: Date) => void;
  onChangeEnd: (date: Date) => void;
}

const DateRangePicker = ({
    title,
  startDate,
  endDate,
  onChangeStart,
  onChangeEnd
}: Props) => {
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const theme = useColorScheme();
  const themeColors = theme === 'dark' ? darkThem : lightThem;

  const formatDate = (date: Date | null) => {
    if (!date) return 'اختر التاريخ';
    return date.toLocaleDateString('ar-EG');
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: themeColors.textColor }]}>
        {title}
      </Text>

      <View style={styles.row}>
        {/* من تاريخ */}
        <View style={{ width: '48%' }}>
          <Text style={[styles.subLabel, { color: themeColors.subTextColor }]}>
            من
          </Text>
          <TouchableOpacity
            style={[styles.input, { borderColor: themeColors.borderColor }]}
            onPress={() => setShowStartPicker(true)}
          >
            <Text style={{ color: themeColors.textColor }}>
              {formatDate(startDate)}
            </Text>
          </TouchableOpacity>
        </View>

        {/* إلى تاريخ */}
        <View style={{ width: '48%' }}>
          <Text style={[styles.subLabel, { color: themeColors.subTextColor }]}>
            إلى
          </Text>
          <TouchableOpacity
            style={[styles.input, { borderColor: themeColors.borderColor }]}
            onPress={() => setShowEndPicker(true)}
          >
            <Text style={{ color: themeColors.textColor }}>
              {formatDate(endDate)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Pickers */}
      {showStartPicker && (
        <DateTimePicker
          value={startDate || new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(e, d) => {
            setShowStartPicker(false);
            if (d) onChangeStart(d);
          }}
        />
      )}

      {showEndPicker && (
        <DateTimePicker
          value={endDate || new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(e, d) => {
            setShowEndPicker(false);
            if (d) onChangeEnd(d);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: verticalScale_hights(15)
  },
  label: {
    fontSize: moderateScale_Font(17),
    marginBottom: verticalScale_hights(5),
    paddingHorizontal: scale_width(5),
    fontWeight: '600'
  },
  subLabel: {
    fontSize: moderateScale_Font(14),
    marginBottom: verticalScale_hights(3),
    paddingHorizontal: scale_width(2)
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    padding: scale_width(10),
    borderWidth: 1,
    borderRadius: scale_width(10),
    marginBottom: verticalScale_hights(15)
  }
});

export default DateRangePicker;
