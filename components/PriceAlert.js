import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'

import { COLORS, SIZES, FONTS, icons, images } from '../constants'

const PriceAlert = ({customContainerStyle}) => {
    return(
        <TouchableOpacity style={{...styles.container, ...styles.shadow, ...customContainerStyle }}>
            <Image 
                source={icons.notification_color} 
                style={{
                    height: 30,
                    width: 30
                }}
            />
            <View style={{flex: 1, marginLeft: SIZES.radius}}>
                <Text style={{...FONTS.h3}}>Set Price Alert</Text>
                <Text>Get notifed when your coins are moving</Text>
            </View>

            <Image 
                source={icons.right_arrow}
                style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.gray
                }}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.padding * 3,
        marginHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding * 0.5,
        paddingHorizontal: SIZES.radius,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8
    }
})

export default PriceAlert