import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppDrawerNav from './src/navigation/AppDrawerNav'

export default function App() {
  return (
    <NavigationContainer>
      <AppDrawerNav />
    </NavigationContainer>
  )
}
