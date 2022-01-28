import React, { useLayoutEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

//import { useRoute, useNavigation } from '@react-navigation/native'

export const Sobre = () => {
    // const route = useRoute()
    // const navigation = useNavigation()

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         title: route.params?.nome === '' ? 'Página Sobre' : route.params?.nome
    //     })
    // }, [navigation])

    return (
        <View style={styles.container}>
            <Text>Página Sobre</Text>
            {/* <Text>{route.params?.email}</Text>
            <Text>{route.params?.nome}</Text> */}

            {/* <Button title='Tela Contatos' onPress={() => navigation.navigate('Contato')} />
            <Button title='Voltar para home' onPress={() => navigation.goBack()} /> */}
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
