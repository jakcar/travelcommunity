import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import LoginForm from '../components/LoginForm'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'

const LoginScreen = observer(() => {
  const { userStore } = useStores()
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          {userStore.loggedInStatus ? <Text>Inloggad!</Text> : <LoginForm />}
        </View>
      </ScrollView>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10
  }
})

export default LoginScreen
