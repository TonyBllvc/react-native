import 'react-native-gesture-handler';

// Ignore this component Josh

import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import About from "../screens/about";
import Home from '../screens/home';
import ReviewDetails from "../screens/reviewDetails";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './homeStack';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export default function HomeBuild() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Homes"
                options={{
                    drawerLabel: 'Home'
                }}
                component={Home} />
            <Drawer.Screen
                name="About"
                options={{
                    drawerLabel: 'About'
                }}
                component={About} />
        </Drawer.Navigator>
    );
}

//  HomeBuild;
