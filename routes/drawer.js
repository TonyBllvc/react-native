import { createDrawerNavigator } from "@react-navigation/drawer";
import { createAnimatedPropAdapter } from "react-native-reanimated";


// This is the navigation center for both the drawer and stack navigation

const RootDrawer = createDrawerNavigator();

const RootDraw = createAnimatedPropAdapter()


export default function DrawerStack() {
    return (
        // <NavigationContainer initialRouteName='Home'>
            <Drawer.Navigator 
            >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator>
        // </NavigationContainer>
    )

} 