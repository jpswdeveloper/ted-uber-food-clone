import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import SingleProduct from '../Screens/SingleProduct'
import CartModal from '../Components/CartModal'
import OrderCompleted from '../Screens/OrderCompleted'
const Stack = createNativeStackNavigator()
const StackScreen = () => {
    return (
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }} >
            <Stack.Screen component={Home} name="HomeScreen" />
            <Stack.Screen component={SingleProduct} name="description" />
            <Stack.Screen component={CartModal} name="cartmodal" />
            <Stack.Screen component={OrderCompleted} name="ordercomplete" />
        </Stack.Navigator>
    )
}

export default StackScreen

const styles = StyleSheet.create({})