import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
// import { StyleSheet, View } from 'react-native'
import 'mobx-react-lite/batchingForReactNative'
import { OverflowMenuProvider } from 'react-navigation-header-buttons'

import useCachedResources from './hooks/useCachedResources'
import TabNavigator from './navigation/TabNavigator'
import LoginScreen from './screens/LoginScreen'

const Stack = createStackNavigator()

function App() {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <NavigationContainer>
        <OverflowMenuProvider>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={TabNavigator} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </OverflowMenuProvider>
      </NavigationContainer>
    )
  }
}

export default App

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     flex: 1
//   }
// })
