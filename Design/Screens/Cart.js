import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const foods = useSelector((state) => state.food_slice.foods)
    if (foods) {
        // console.log(foods)
    }
    else {
        console.log('Nothing is found')
    }
    return (
        <View>
            <Text>Cart</Text>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})