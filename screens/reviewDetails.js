import { Button, StyleSheet, Header, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { useRoute } from '@react-navigation/native';

//lesson number Y (along with home & homeStack) -- v6
export default function ReviewDetails() {

    const route = useRoute();
    const { title, body, rating } = route.params;

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText} > { title } </Text>
            <Text style={globalStyles.titleText} > { body } </Text>
            <Text style={globalStyles.titleText} > { rating } </Text>
            {/* <Button title='Back to home screen' onPress={handler} /> */}
        </View>
    )
}




// //lesson number Z(along with home & homeStack)

// import { Button, StyleSheet, Text, View } from 'react-native';
// import { globalStyles } from '../styles/global';

// export default function ReviewDetails({ navigation }) {

//     const handler = () => {
//         navigation.goBack();
//     }

//     return (
//         <View style={globalStyles.container}>
//             <Text style={globalStyles.titleText} > ReviewDetails Screen</Text>
//             <Button title='Back to home screen' onPress={handler} />
//         </View>
//     )
// }

