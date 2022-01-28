import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import AppStackNav from './AppStackNav'
import { Sobre } from '../pages/Sobre'
import { Contato } from '../pages/Contato'
import CustomDrawer from '../components/CustomDrawer'

const Drawer = createDrawerNavigator()

export default function AppDrawerNav() {
    return (
        <Drawer.Navigator
            drawerContent={CustomDrawer}
            screenOptions={{
                headerShown: false,

                drawerActiveBackgroundColor: '#00dae4',
                drawerActiveTintColor: '#ffffff',
                drawerInactiveBackgroundColor: '#f5f5f5',
                drawerInactiveTintColor: '#000000'
            }}
        >
            <Drawer.Screen 
                name='HomeStack'
                component={AppStackNav}
            />

            <Drawer.Screen 
                name='Sobre'
                component={Sobre}
            />

            <Drawer.Screen 
                name='Contato'
                component={Contato}
            />
        </Drawer.Navigator>
    )
}