import { Dimensions, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
const { width } = Dimensions.get('window')
const OrderCompleted = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
                animated={true}
                backgroundColor="black"
            />
            <View style={{ marginTop: 100 }}>
                <View style={{

                    flex: 1,
                    width: width,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <LottieView
                        autoPlay
                        loop={false}
                        speed={0.5}
                        source={require('../Assets/93507-check.json')}
                        style={{ height: 100, width: 100 }}
                    />
                </View>
            </View>
            <View style={{ marginTop: 100 }}>
                <Text style={{ textAlign: 'center', fontSize: 17 }}>You have successfully order your food</Text>
                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Thanks!</Text>
            </View>
            <View style={{
                width: width, padding: 10, alignItems: 'center', justifyContent: 'center',
            }}>
                <LottieView
                    autoPlay
                    loop
                    speed={.5}
                    style={{ width: width, height: 300, borderRadius: 20 }}
                    source={require('../Assets/103747-3d-cooking.json')}
                />
            </View>
        </SafeAreaView >
    )
}

export default OrderCompleted

const styles = StyleSheet.create({})