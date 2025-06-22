import { View, DimensionValue, TextInput, KeyboardTypeOptions, StyleSheet, useColorScheme, Platform, StatusBar } from 'react-native';
import React ,{ForwardedRef}from 'react';
import { useWindowDimensions } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import {darkThem ,lightThem} from '@/Config/app_identity'
import { scale_width, verticalScale_hights, moderateScale_Font } from '@/utils/responsive'


interface props {
    Width?:DimensionValue;
    placeholder: string;
    value: string;
    onTyping?: (text: string) => void;
    editable?: boolean;
    keyboardType?: KeyboardTypeOptions;
    onClick:()=> void;
    onSubmitEditing?:()=>void;
    ref?: ForwardedRef<TextInput>;
}

const IconInputComponent = ({
    placeholder,
    value,
    onTyping,
    onClick,
    keyboardType,
    editable = true,
    Width = "100%",
    onSubmitEditing,
    ref,
}: props) => {
    const theme = useColorScheme()
    const isDark = theme === 'dark';
    const themeColors = isDark ? darkThem : lightThem;

    const { width, height } = useWindowDimensions();
    const [isFocus, setIsFocus] = React.useState<boolean>(false);
    const handleFocus = () => {
        // Prevent unnecessary re-renders by checking if the focus is already set
        if (!isFocus) {
            // setIsFocus(true); // Set focus state to true when the input is focused
        }
    };

    const handleBlur = () => {
        // Prevent unnecessary re-renders by checking if the blur is already set
        if (isFocus) {
            setIsFocus(false); // Set focus state to false when the input is blurred
        }
    };

    return (
        <View onTouchStart={onClick} style={[styles.inpute, {
            borderColor: isFocus ? themeColors.Primary : themeColors.borderColor,
            opacity: isFocus ? 0.7 : 1,
            borderWidth: scale_width(2)
        }]}>
            <Feather name="search" size={verticalScale_hights(22)} color={themeColors.subTextColor} />
            <TextInput
                ref={ref}
                keyboardType={keyboardType} // Set the ref here
                style={[styles.field, {width:Width, color: themeColors.textColor }]}
                onChangeText={(txt) => onTyping?.(txt)}
                placeholder={placeholder}
                placeholderTextColor={themeColors.subTextColor}
                value={value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onSubmitEditing={onSubmitEditing}
                editable={editable} // Make sure the input is editable
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inpute: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: verticalScale_hights(15),
        marginBottom: verticalScale_hights(15),
        borderRadius: scale_width(8),
        flexDirection: "row",
        maxWidth: "100%",
        paddingHorizontal: scale_width(10),
    },
    field: {
        fontWeight: 200,
        fontSize: moderateScale_Font(14),
        paddingHorizontal: scale_width(10),
        paddingVertical: verticalScale_hights(10),
        borderRadius: scale_width(8),
        alignSelf: "center",
        textAlign: "right"
    },
})

export default IconInputComponent;
