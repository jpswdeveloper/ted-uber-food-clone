
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Tab } from 'react-native-elements'
import StackScreen from './StackScreen'
import Cart from '../Screens/Cart'
import Account from '../Screens/Account'
// import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';
import Setting from '../Screens/Setting'
import TobBar from './TobBar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ant from 'react-native-vector-icons/AntDesign';
import FNt from 'react-native-vector-icons/FontAwesome5';
const Tabs = createBottomTabNavigator()

const Bar = () => {
    return (

        <Tabs.Navigator

            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'black',
                    color: 'white',
                    bottom: 7,
                    left: 3,
                    right: 3,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    height: 70,
                    alignSelf: 'center',
                    ...styles.shadow
                },
                tabBarLabelStyle: { fontWeight: 'bold', fontSize: 12 },
                tabBarHideOnKeyboard: true,
            }}
            activeColor="white"
            inactiveColor="red"
        >
            <Tabs.Screen component={StackScreen} name='Home'
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />

                    ),
                }}
            />
            <Tabs.Screen component={TobBar} name='Cart'
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cart-outline" color={color} size={26} />
                    ),
                }} />
            <Tabs.Screen component={Account} name='Account'
                options={{

                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color }) => (
                        <FNt name="users-cog" color={color} size={26} />
                    )
                }}
            />
            <Tabs.Screen component={Setting} name='Setting'
                options={{
                    tabBarLabel: 'Setting',
                    tabBarIcon: ({ color }) => (
                        <Ant name="setting" color={color} size={26} />
                    ),
                }} />

        </Tabs.Navigator>
    )
}

export default Bar

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 20
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})