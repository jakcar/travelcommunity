import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import 'mobx-react-lite/batchingForReactNative'
import { Provider } from 'mobx-react'
import tripStore from './stores/store'

import useCachedResources from './hooks/useCachedResources'
import TabNavigator from './navigation/TabNavigator'

const Stack = createStackNavigator()

function App() {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <Provider store={tripStore}>
        <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Root" component={TabNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
})
