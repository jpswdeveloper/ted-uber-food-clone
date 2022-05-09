import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../Screens/Home';
import SingleProduct from '../Screens/SingleProduct';
import Account from '../Screens/Account';
import Setting from '../Screens/Setting';
const Tab = createMaterialTopTabNavigator();
const TobBar = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Account} />
            <Tab.Screen name="Settings" component={Setting} />
        </Tab.Navigator>
    )
}

export default TobBar

const styles = StyleSheet.create({})