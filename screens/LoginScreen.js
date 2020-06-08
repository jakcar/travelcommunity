import * as React from 'react'
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import LoginForm from '../components/LoginForm'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'
import { containerStyle } from '../styles/ContainerStyle'

const LoginScreen = observer(() => {
  const { userStore } = useStores()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={containerStyle.container}>
        <View style={containerStyle.contentContainer}>
          {userStore.loggedInStatus ? (
            <View style={containerStyle.centeredContainer}>
              <Text>Välkommen {userStore.userName}!</Text>
            </View>
          ) : (
            <LoginForm />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
})

export default LoginScreen
