import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Header = () => {
    const [selected, setSelected] = useState('Delivery')
    return (
        <View style={{
            flexDirection: 'row', alignSelf: 'center', padding: 13
        }}>
            <Headers title="Delivery" selected={selected} setSelected={setSelected} />
            <Headers title="Pick up" selected={selected} setSelected={setSelected} />
            {/* <Text>Hello </Text> */}
        </View>

    )
}

export default Header

const styles = StyleSheet.create({})
const Headers = ({ setSelected, selected, title }) => (
    <View>
        <TouchableOpacity
            onPress={() => setSelected(title)}
            style={{}}
        >
            <Text style={{
                color: selected === title ? "#fff" : '#000',
                backgroundColor: selected === title ? "#000" : 'transparent',
                padding: 7,
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 'bold'
            }}>{title}</Text>
        </TouchableOpacity>
    </View >
)