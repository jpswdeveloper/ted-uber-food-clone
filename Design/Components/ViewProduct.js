import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Modal, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { resetFoods } from '../../Redux/Slice/FoodRecipeSlice'
import { Avatar, Divider, ListItem } from 'react-native-elements'
const { width, height } = Dimensions.get('window')
import LottieView from 'lottie-react-native'

import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase'
const ViewProduct = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const foodPrice = useSelector((state) => state.food_slice.foods)
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    let total = 0;

    foodPrice.map((price) => {
        total += price.price
    })

    const checker = async () => {

        addDoc(collection(db, 'OrderFoods'), {
            foodPrice
        }).then(() => {
            setTimeout(() => {
                setLoading(true)
                dispatch(resetFoods())
                setVisible(false)
                navigation.navigate('ordercomplete', {
                    foodPrice
                })
            }, 3000)
        })
    }

    const customModal = () => {
        let total = 0;
        foodPrice.map((price) => {
            total += price.price
        })
        return (
            <View style={{ flex: 1, width: width, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'transparent', }}>
                <View style={{ width: width, height: 400, backgroundColor: 'white', color: 'white' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', padding: 5, color: 'teal' }}>Your Orders</Text>
                    <Divider width={1} height={2} color='black' />

                    <ScrollView>
                        {foodPrice.map((foods, index) => (
                            <>
                                <View key={index}>
                                    <ListItem style={{
                                        justifyContent: 'space-between', alignItems: 'center',
                                        backgroundColor: 'whitesmoke'
                                    }}>
                                        <Avatar
                                            source={{ uri: foods.image }}
                                            size={30}
                                            rounded
                                        />
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                <Text style={{ fontSize: 18 }}>{foods.name}</Text>
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                ${foods.price}
                                            </ListItem.Subtitle>
                                        </ListItem.Content>
                                        <ListItem.Input>Selected</ListItem.Input>

                                    </ListItem>
                                    <Divider width={1} height={2} color='whitesmoke' />
                                </View>
                            </>
                        ))}
                    </ScrollView>
                    <Text style={{ textAlign: 'center', fontWeight: "normal", fontSize: 20, padding: 10 }}>Subtotal: $ {total}</Text>
                    <View style={{
                        alignItems: 'center', justifyContent: 'center',
                    }}>
                        <View style={{
                            width: width - 70,
                            borderRadius: 20,
                            height: 50, backgroundColor: 'black', color: 'white', marginBottom: 20
                        }}>
                            <TouchableOpacity
                                onPress={() => checker()}
                            >
                                <Text style={{ textAlign: 'center', fontWeight: "bold", color: 'white', fontSize: 20, padding: 10 }}>Checkout $ {total}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <>
            {loading && (
                <View style={{
                    width: width, height: height, backgroundColor: '#eee', opacity: .9, justifyContent: 'center',
                }}>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                    }}>

                        <LottieView
                            autoPlay
                            loop
                            speed={0.5}
                            source={require('../Assets/loading-carga.json')}
                            style={{ height: 100, width: 100 }}
                        />
                        <Text>Loading...</Text>
                    </View>
                </View>
            )
            }
            {
                visible && (
                    <Modal
                        animationType='slide'
                        visible={visible}
                        transparent
                        onRequestClose={() => setVisible(false)}
                    >
                        {customModal()}
                    </Modal>
                )
            }
            {
                total !== 0 && (
                    <View style={{
                        flex: 1, height: 50, alignItems: 'center', justifyContent: 'center',
                        width: width - 80, backgroundColor: 'teal', borderRadius: 20, flexDirection: 'row',

                    }}>
                        <TouchableOpacity
                            onPress={() => { setVisible(true) }}
                            style={{
                                flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                            }}
                        >
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}> View Cart</Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white', textAlign: 'center', marginLeft: 10 }}>${total}</Text>
                        </TouchableOpacity>
                    </View >
                )
            }

        </>
    )
}

export default ViewProduct

const styles = StyleSheet.create({})