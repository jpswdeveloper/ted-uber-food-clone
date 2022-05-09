import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { addFood, updateFoods } from '../../Redux/Slice/FoodRecipeSlice'

const SingleDetail = ({ foods }) => {
    const all = useSelector((state) => state.food_slice.foods)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const addFoodToCart = (foods, checkBoxValue) => {
        if (checkBoxValue) {
            dispatch(addFood(foods))
        }
        else {
            dispatch(updateFoods(foods))
        }
    }
    const isChecked = (foods, all) => {
        return all.find((item) => item.id === foods.id)
    }


    return (
        <View style={{
            flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20,
        }}>
            {/* bouncy Checkbix */}
            <BouncyCheckbox
                iconStyle={{
                    borderColor: 'black',
                    borderRadius: 10
                }}
                isChecked={isChecked(foods, all)}
                fillColor='green'
                onPress={(checkBoxValue) => addFoodToCart(foods, checkBoxValue)}
            />
            {/* name of the food */}
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{foods.name}</Text>
                <View style={{ alignItems: 'center', marginRight: 5 }}>
                    <Text style={{ fontSize: 15 }}>{foods.description.slice(0, 28)}...</Text>
                </View>
                <Text style={{ fontWeight: 'normal', fontSize: 17 }}>${foods.price}</Text>

            </View>
            {/* images */}

            <Image
                source={{ uri: foods.image ? foods.image : 'https://images.unsplash.com/photo-1651752277554-dbd93f8d24e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80' }}
                style={{ width: 80, height: 80, borderRadius: 20 }}
                resizeMode='cover'
            />
        </View >

    )
}

export default SingleDetail

const styles = StyleSheet.create({})