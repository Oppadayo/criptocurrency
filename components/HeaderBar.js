import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { COLORS, SIZES, FONTS, icons, images } from '../constants'

const HeaderBar = ({right}) => {

    const navigation = useNavigation()
     
    return( 
        <View style={{paddingHorizontal: SIZES.padding, flexDirection: 'row', marginTop: SIZES.padding * 1.5}}>
            <View style={{flex: 1, alignItems: 'flex-start'}}>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.goBack()}>
                    <Image 
                        source={icons.back_arrow}
                        resizeMode= 'contain'
                        style={{
                            width: 18,
                            height: 18,
                            tintColor: COLORS.gray
                        }}
                    />
                    <Text style={{marginLeft: SIZES.base, ...FONTS.h3}}>Back</Text>
                </TouchableOpacity>
            </View>
                

        {right &&
            <View style={{flex: 1,alignItems: 'flex-end'}}>
                    <TouchableOpacity>
                        <Image 
                            source={icons.star}
                            resizeMode='contain'
                            style={{
                                width: 22,
                                height: 22,
                                tintColor: COLORS.primary
                            }}
                        />
                    </TouchableOpacity>
            </View>
        }
        </View>
    )
}

const styles = StyleSheet.create({

})

export default HeaderBar