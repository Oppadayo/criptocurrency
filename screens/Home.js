import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Image,
    ImageBackground, 
    LogBox
} from 'react-native';

import { dummyData, COLORS, SIZES, FONTS, icons, images } from '../constants'
import {PriceAlert, TransactionHistory} from '../components'

const Home = ({ navigation }) => {

    const [trending, setTrending] = useState(dummyData.trendingCurrencies)
    const [transactionHistory, setTransactionHistory] = useState(dummyData.transactionHistory)

    useEffect(() => {
        LogBox.ignoreAllLogs(['VirtualizedLists should never be nested'])
    }, [])

    function renderHeader() {

        const renderItem = ({item, index}) => (
            <TouchableOpacity
                style={{
                    marginLeft: index == 0 ? 
                    SIZES.padding : 0, 
                    ...styles.cardTrending, 
                    ...styles.shadow
                }}
                onPress={() => navigation.navigate('CryptoDetail', {
                    currency: item
                })}
            >

            <View style={{flexDirection: 'row'}}>
                <View>
                    <Image 
                        source={item.image}
                        resizeMode='cover'
                        style={{
                            marginTop: 5,
                            width: 16,
                            height: 16
                        }}
                    />
                </View>
                <View style={{marginLeft: SIZES.base}}>
                    <Text style={{...FONTS.h3}}>{item.currency}</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4}}>{item.code}</Text>
                </View>
            </View>

            <View style={{marginTop: SIZES.radius}}>
                    <Text style={{...FONTS.h3}}>${item.amount}</Text>
                    <Text style={{color: item.type == 'I' ? COLORS.green : COLORS.red, ...FONTS.h4}}>{item.changes}</Text>
                </View>

            </TouchableOpacity>
        )

        return (
            <View
                style={{...styles.header, ...styles.shadow}}
            >
                <ImageBackground
                    source={images.banner}
                    resizeMode= 'cover'
                    style={styles.headerBg} 
                >

                <View style={styles.headerBar}>
                    <TouchableOpacity 
                        style={styles.notification} 
                        onPress={() => console.log("Notification on pressed")}
                    >
                        <Image 
                            source={icons.notification_white}
                            resizeMode='contain'
                            style={{flex: 1}}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.balance}>
                    <Text style={{color: COLORS.white, ...FONTS.h3}}>Your Portfolio Balance</Text>
                    <Text style={{marginTop: SIZES.base, color: COLORS.white, ...FONTS.h1}}>${dummyData.portfolio.balance}</Text>
                    <Text style={{color: COLORS.white, ...FONTS.body5}}>${dummyData.portfolio.changes} Last 24 hour</Text>
                </View>

                <View style={styles.trending}>
                    <Text style={{marginLeft: SIZES.padding, color: COLORS.white, ...FONTS.h2}}>Trending</Text>
                    <FlatList
                        contentContainerStyle={{marginTop: SIZES.base}}
                        data={trending}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
             </ImageBackground>
            </View>
            
        )
    }

    function renderAlert() {
        return(
            <PriceAlert />
        )
    }

    function renderNotice() {
        return (
            <View style={{
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.padding,
                padding: 20,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.secondary,
                ...styles.shadow
            }}>
                <Text style={{color: COLORS.white, ...FONTS.h3}}>Investing Safety</Text>
                <Text style={{marginTop: SIZES.base, color: COLORS.white, ...FONTS.body4}}>It's very difficult to time an investiment, 
                    especially when the market is volatile. 
                    Learn how to use dollar cost averaging to your advantage
                </Text>
                <TouchableOpacity
                    style={{
                        marginTop: SIZES.base
                    }}
                    onPress={() => console.log('Learn more')}
                >
                    <Text style={{ textDecorationLine: 'underline', color: COLORS.green, ...FONTS.h3}}>Learn more</Text>

                </TouchableOpacity>
            </View>
        )
    }

    function renderTransactionHistory() {
        return(
            <TransactionHistory
                customContainerStyle={{ ...styles.shadow}}
                history={transactionHistory}
            />
        )
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                {renderHeader()}
                {renderAlert()}
                {renderNotice()}
                {renderTransactionHistory()}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 130
    },
    header: {
        width: '100%',
        height: 290
    },
    headerBg: {
        flex: 1,
        alignItems: 'center'
    },
    headerBar: {
        marginTop: SIZES.padding * 2,
        width: '100%',
        alignItems: 'flex-end',
        paddingHorizontal: SIZES.padding
    },
    notification: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    balance: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    trending: {
        position: 'absolute',
        bottom: '-20%',
        flex: 1
    },
    cardTrending: {
        width: 180,
        paddingVertical: SIZES.padding * 0.5,
        paddingHorizontal: SIZES.padding,        
        marginRight: SIZES.radius,
        borderRadius: 10,
        backgroundColor: COLORS.white 
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default Home;