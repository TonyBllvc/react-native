// import 'react-native-gesture-handler';

// import * as React from 'react';
// import { Button, View, Text, TouchableOpacity, Image } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import About from "../screens/about";
// import Home from '../screens/home';
// import ReviewDetails from "../screens/reviewDetails";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// const NavigationDrawerStructure = (props)=> {
//   //Structure for the navigatin Drawer
//   const toggleDrawer = () => {
//     //Props to open/close the drawer
//     props.navigationProps.toggleDrawer();
//   };

//   return (
//     <View style={{ flexDirection: 'row' }}>
//       <TouchableOpacity onPress={()=> toggleDrawer()}>
//         {/*Doute Button Image */}
//         <Image
//           source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
//           style={{ width: 25, height: 25, marginLeft: 5 }}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// }

// function secondScreenStack({ navigation }) {
//   return (
//     <Stack.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
//         headerStyle: {
//           backgroundColor: '#f4511e', //Set Header color
//         },
//         headerTintColor: '#fff', //Set Header text color
//         headerTitleStyle: {
//           fontWeight: 'bold', //Set Header text style
//         }
//       }}>
//       <Stack.Screen
//         name="SecondPage"
//         component={Home}
//         options={{
//           title: 'Home',
          
//         }}/>
//       <Stack.Screen
//         name="ThirdPage"
//         component={ReviewDetails}
//         options={{
//           title: 'Review Details', 
//         }}/>
//     </Stack.Navigator>
//   );
// }

// function HomeBuild() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         screenOptions={{
//           activeTintColor: '#e91e63',
//           itemStyle: { marginVertical: 5 },
//         }}>
//         <Drawer.Screen
//           name="FirstPage"
//           options={{ drawerLabel: 'First page Option' }}
//           component={Home} />
//         <Drawer.Screen
//           name="SecondPage"
//           options={{ drawerLabel: 'Second page Option' }}
//           component={About} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default HomeBuild;