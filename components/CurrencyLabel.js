import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

import { COLORS, SIZES, FONTS, icons, images } from '../constants' 

const CurrencyLabel = ({icon, currency, code}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            <Image 
                source={icon}
                resizeMode='cover'
                style={{
                    width: 25,
                    height: 25,
                    marginTop: 5
                }}
            />
            <View style={{marginLeft: SIZES.base}}>
                <Text style={{...FONTS.h4}}>{currency}</Text>
                <Text style={{color: COLORS.gray, ...FONTS.body4}}>{code}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default CurrencyLabel