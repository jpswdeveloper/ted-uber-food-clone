import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const CartModal = () => {
    const foods = useSelector((state) => state.food_slice.foods)
    return (
        <ScrollView style={{ backgroundColor: 'transparent', flex: 1, opacity: .2 }}>
            {foods.map((fods, index) => (
                <Text key={index}>CartModal</Text>
            ))}
        </ScrollView>
    )
}

export default CartModal

const styles = StyleSheet.create({})