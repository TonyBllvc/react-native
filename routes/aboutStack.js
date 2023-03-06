import * as React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/about";
import Home from '../screens/home';

// v6 navigation
// a type of navigation called 'drawer' navigation

const Drawer = createDrawerNavigator()

export default function AboutStack() {
    return (
        <NavigationContainer initialRouteName='Home'>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
} 