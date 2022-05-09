import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Ant from 'react-native-vector-icons/AntDesign'
const { width } = Dimensions.get('window')
const Search = ({ filter, setFilter }) => {
    return (
        <View style={{
            flex: 1, width: width, alignSelf: 'center',

        }}>
            <GooglePlacesAutocomplete
                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 15, alignItems: 'center', justifyContent: 'space-between', padding: 5, marginRight: 10 }}>
                        <Ant name='clockcircle' size={24} />
                        <Text style={{ marginLeft: 5 }}>Search</Text>
                    </View>
                )}
                placeholder="Enter Country"
                onPress={(data) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data.description);
                }}
                styles={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: 'bold',
                        marginTop: 5
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 10,
                        justifyContent: 'center',
                    }
                }}

            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})