import { createDrawerNavigator } from "@react-navigation/drawer";
import { createAnimatedPropAdapter } from "react-native-reanimated";

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