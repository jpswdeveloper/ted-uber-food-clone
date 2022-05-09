import { Image, ScrollView, StyleSheet, Text, Dimensions, View, StatusBar, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import axios from 'axios';
import { Base_Url } from '../api_connection/Api'
import SingleDetail from './SingleDetail';
import ViewProduct from '../Components/ViewProduct';

const SingleProduct = ({ navigation, route }) => {
    const [loading, setLoading] = useState(false);
    const [secondLoading, setSecondLoading] = useState(false)
    const [single, setSingle] = useState({})
    const [foods, setFoods] = useState([])
    useEffect(() => {
        const uploadData = () => {
            setLoading(true)
            setSingle(route.params)
        }
        uploadData()
    }, [])
    useEffect(() => {
        const getFoods = () => {
            axios.get(`${Base_Url}product`)
                .then((pro) => {
                    setFoods(pro.data)
                    setLoading(true)
                    setSecondLoading(true)
                })
                .catch(err => {
                    // console.log(err)
                })
        }
        getFoods()
    }, [])
    const { width } = Dimensions.get('window')
    return (
        <>
            {loading ?
                (
                    <>
                        <ScrollView style={{ flex: 1 }}>
                            <StatusBar translucent backgroundColor='transparent' />
                            <Image
                                source={{ uri: single?.image }}
                                style={{ width: width, height: width / 2 + 80 }}
                                resizeMode="cover"
                            />
                            <View style={{
                                width: width,
                                borderTopLeftRadius: 25,
                                borderTopRightRadius: 25,
                                backgroundColor: '#eee',
                                top: -50,
                                padding: 20,
                                bottom: 10
                            }}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 23, padding: 10 }}>{single.resturant_name ? single.resturant_name : 'Best Food Supplier'}</Text>
                                <Divider width={1} color='whitesmoke' />
                                {
                                    !secondLoading ? <View style={{ width: width, alignSelf: 'center', height: 300 }}>
                                        <ActivityIndicator size='large' color="black" />
                                    </View> : (
                                        <>
                                            {foods.map((foods, index) => (
                                                <SingleDetail foods={foods} key={index} />
                                            )
                                            )
                                            }
                                        </>)
                                }

                                <View style={{ width: width, height: 60 }}></View>
                            </View>

                        </ScrollView>
                        <View style={{ position: 'absolute', flex: 1, width: width, alignItems: "center", justifyContent: 'center', bottom: 80, borderRadius: 20 }}>
                            <ViewProduct />
                        </View>
                    </>
                )
                :
                (
                    <View style={{
                        flex: 1, justifyContent: 'center', alignItems: 'center'
                    }}>
                        <ActivityIndicator size='large' color='blue' />
                        <Text style={{ fontWeight: 'bold' }}>Loading ...</Text>
                    </View>
                )
            }
        </>
    )
}

export default SingleProduct

const styles = StyleSheet.create({})