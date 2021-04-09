import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { COLORS, SIZES, FONTS, icons, images } from '../constants'

const TextButton = ({label, customContainerStyle, customLabelStyle, onPress}) => {
    return(
        <TouchableOpacity
            style={{
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.green,
                ...customContainerStyle
            }}
            onPress={onPress}
        >
            <Text 
                style={{color: COLORS.white, ...FONTS.h4, ...customLabelStyle}}
            >{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})

export default TextButton