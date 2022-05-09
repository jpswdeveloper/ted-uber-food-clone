import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import catagories from '../Assets/categories.json'
const Categories = ({ catagories, selected }) => {
    let sel;

    sel = selected?.id;
    const [select, setSelect] = useState(sel);
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', height: 100 }}>
            <FlatList
                data={catagories}
                key={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                horizontal
                bounces
                renderItem={

                    ({ item }) => (
                        <TouchableOpacity
                            onPress={() => setSelect(item.id)}
                        >
                            <View style={{
                                flexDirection: 'column', padding: 10, alignItems: 'center'
                            }}>
                                <Image source={{ uri: item.image }} style={{ width: 50, height: 50, borderRadius: 50 }} resizeMode="cover" />
                                <Text style={{ color: select === item.id ? '#000' : '#000', fontSize: 15, fontWeight: 'bold' }}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }
            />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({})