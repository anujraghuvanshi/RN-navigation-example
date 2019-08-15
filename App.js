/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation'

import  LoginScreen from './screens/LoginScreen'
import  HomeScreen from './screens/HomeScreen'

const AppStackNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Login: LoginScreen,
    },
    {
        initialRouteName: 'Login',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerBackTitle: 'My Navigation App'
        },
    }
)

const AppContainer = createAppContainer(AppStackNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}