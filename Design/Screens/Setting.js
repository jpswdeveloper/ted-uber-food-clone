import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
const Setting = () => {
    return (
        <View style={{
            flex: 1, alignItems: 'center', justifyContent: 'center',
        }}>
            <LottieView
                autoPlay
                loop
                speed={1}
                source={require('../Assets/loading-carga.json')}
                style={{ height: 100, width: 100 }}
            />
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>We will come sooner...</Text>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({})