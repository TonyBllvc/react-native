
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/global';


 // lesson number Y(along with homeStack & reviewDetails) 
export default function Home({ navigation }){
    const [reviews, setReviews] = useState([
        {title: 'Happy are we all forever', rating: 5, body: 'lorem ipsum', key: 1, id: 1},
        {title: 'Happy are we all here today', rating: 4, body: 'lorem ipsum', key: 2, id: 2},
        {title: 'We all know the truth', rating: 2, body: 'lorem ipsum', key: 3, id: 3},
    ])

    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    // A button that directs what ever data clicked, to a more comprehensive page
                    <TouchableOpacity onPress={() => navigation.navigate('Review', item) } >
                        <Text style={globalStyles.titleText}> { item.title }</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}







//  // lesson number Z(along with homeStack & reviewDetails)
// import { useState } from 'react';
// import { FlatList, StyleSheet, Text, Button, View } from 'react-native';
// import { globalStyles } from '../styles/global';

// export default function Home({ navigation }){
//     const [reviews, setReviews] = useState([
//         {title: 'Happy are we all forever', rating: 5, body: 'lorem ipsum', key: 1, id: 1},
//         {title: 'Happy are we all here today', rating: 4, body: 'lorem ipsum', key: 2, id: 2},
//         {title: 'We all know the truth', rating: 2, body: 'lorem ipsum', key: 2, id: 3},
//     ])

//     const pressHandler = () => {
//         navigation.navigate('Review');

//         // or

//         // navigation.push('Review');
//     }

//     return (
//         <View style={globalStyles.container}>
//             <Text style={globalStyles.titleText} > Home Screen </Text>
//             <Button title='go to review' onPress={pressHandler} />
//         </View>
//     )
    
// }





// import { StyleSheet, Text, View } from 'react-native';

// export default function Home(){
//     return (
//         <View style={StyleSheet.container}>
//             <Text style={styles.titleText} > Home Screen</Text>
//         </View>
//     )
    
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 24, 
//     },
//     titleText: {
//         fontFamily: 'nunito-bold',
//         fontSize: 18,
//     }
  
// });
