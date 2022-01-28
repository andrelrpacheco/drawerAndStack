import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const Home = () => {
    const navigation = useNavigation()

    function navegarDetalhe() {
        navigation.navigate('Detalhe', 
            // { 
            //     nome: 'André', 
            //     email: 'andre@gmail.com'
            // }
        )
    }

    return (
        <View style={styles.container}>
            <Text>Tela Home</Text>

            <Button title='Ir para detalhe' onPress={navegarDetalhe} />
            <Button title='Menu lateral' onPress={() => navigation.openDrawer()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
