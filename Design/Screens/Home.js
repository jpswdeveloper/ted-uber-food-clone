import { Dimensions, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import Categories from '../Components/Categories'
import MenuItem from '../Components/MenuItem'
import hotel from '../Assets/hotel.json'
import LottieView from 'lottie-react-native'
import { Base_Url } from '../api_connection/Api'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native'
const { width } = Dimensions.get('window')

const Home = () => {
    const [foods, setFoods] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filter, setFilter] = useState('')
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [catagorized, setCatagorized] = useState([])
    // get all the product
    // useFocusEffect((
    //     useCallback(
    //         () => {
    //             const getFoods = () => {
    //                 axios.get(`${Base_Url}product`)
    //                     .then((pro) => {
    //                         setFoods(pro.data)
    //                         console.log(pro.data)
    //                         setLoading(false)
    //                     })
    //                     .catch(err => {
    //                         console.log(err)
    //                     })
    //             }
    //             getFoods()
    //         },
    //         [],
    //     )
    // ))
    useEffect(() => {
        const getFoods = () => {
            axios.get(`${Base_Url}product`)
                .then((pro) => {
                    setFoods(pro.data)
                    setLoading(false)

                })
                .catch(err => {
                    // console.log(err)
                })
        }
        getFoods()
    }, [])
    // console.log(foods)
    useEffect(() => {
        const category = () => {
            axios.get(`${Base_Url}category`)
                .then((ctg) => {
                    setCategories(ctg.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        category()
    }, [])
    let selected;
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
            {!loading ? (
                <>
                    <View style={{ width: width, backgroundColor: '#fff', height: 130 }}>
                        <Header />
                        <Search setFilter={setFilter} filter={filter} />
                    </View>
                    <View style={{ height: 100, marginTop: 5 }}>
                        <Categories catagories={categories} selected={categories[0]} />
                    </View>
                    <View style={{
                        flex: 1, alignItems: 'center', justifyContent: 'center',
                    }}>
                        <ScrollView bounces showsVerticalScrollIndicator={false} contentContainerStyle={{
                            alignItems: 'center', justifyContent: 'center',
                            width: width, padding: 10
                        }}>
                            {

                                foods.map((data, index) => (
                                    <MenuItem data={data} key={index} />
                                ))
                            }


                        </ScrollView>
                    </View>
                </>

            ) :
                (
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
                    </View>
                )}
            <StatusBar style="auto" />
        </SafeAreaView >

    )
}

export default Home

const styles = StyleSheet.create({})