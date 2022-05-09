import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ant from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
const { width } = Dimensions.get('window')
const MenuItem = ({ data }) => {
    const { rating, reviews, resturant_name, name, image, category, isFeatured, description, country } = data
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
                navigation.navigate('description', {
                    rating,
                    reviews,
                    resturant_name,
                    name,
                    image,
                    category,
                    isFeatured,
                    description,
                    country
                })
            }}
        >
            <View style={{ width: width - 30, height: width, position: 'relative', marginTop: 10, backgroundColor: '#fff', borderRadius: 10 }}>
                <View style={{
                    width: width - 30, alignItems: "center", justifyContent: 'center', height: width / 1.4
                }}>
                    <Image
                        style={{ width: width - 60, marginTop: 10, height: width / 1.5 }}
                        resizeMode={'cover'}

                        source={{ uri: image }}
                    />
                </View>
                {/* Heart */}
                <View style={{ position: 'absolute', top: 40, right: 40 }}>
                    <TouchableOpacity >
                        <Ant name={'hearto'} size={28} color={'white'} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    padding: 12,
                    flex: 1, justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    {/* desc */}
                    <View style={{ alignItems: 'flex-start', }}>
                        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
                        <Text style={{ color: 'gray', fontSize: 17 }}>35 - 45 . min</Text>
                    </View>
                    {/* num rev */}
                    <View style={{

                        width: 40, height: 40, borderRadius: 50, backgroundColor: '#eee', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{rating}</Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default MenuItem

const styles = StyleSheet.create({})
