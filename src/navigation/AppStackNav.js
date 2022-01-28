import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../pages/Home'
import Detalhe from '../pages/Detalhes'

const Stack = createNativeStackNavigator()

export default function AppStackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name='Detalhe'
                component={Detalhe}
            />
        </Stack.Navigator>
    )
}
