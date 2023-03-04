import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
// import Home from './screens/home';
import { AppLoading } from 'expo';
import React, { useState } from 'react';
import HomeStack from './routes/homeStack';
import AboutStack from './routes/aboutStack';
// import { Text } from 'react-native';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/NunitoSans-Bold.ttf')
});

export default function App() {

  // const [fontsLoaded, setFontsLoaded] = useState(false);

  return (
    <AboutStack />
  )
}







// import { StatusBar } from 'expo-status-bar';
// import * as Font from 'expo-font';
// import Home from './screens/home';
// import { AppLoading } from 'expo';
// import React, { useState } from 'react';
// // import { Text } from 'react-native';

// const getFonts = () => Font.loadAsync({
//   'nunito-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
//   'nunito-bold': require('./assets/fonts/NunitoSans-Bold.ttf')
// });

// export default function App() {

//   const [fontsLoaded, setFontsLoaded] = useState (false);

//   // This program can only function on an android simulator
//   // or android device expo go
//   // But right now, the application is not recognized

//   if (fontsLoaded) {
//     return (
//       <Home />
//     )
//   } else {
//     return (
//       // <Text> Happy</Text>
//       <AppLoading
//         startAsync={getFonts}
//         onFinish={() => setFontsLoaded(true)}
//       />
//     )
//   }
// }

