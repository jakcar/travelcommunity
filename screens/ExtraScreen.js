import * as React from 'react'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'
import { StyleSheet, Text, View, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const ExtraScreen = observer(() => {
  const { userStore, generalStore } = useStores()
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {userStore.loggedInStatus ? (
          <View style={styles.welcomeContainer}>
            <Text>Användarens resor ska listas här...</Text>
            <Text> {generalStore.testString}</Text>
            <Text> {userStore.counter}</Text>
            <Button onPress={() => userStore.increaseNumber()} title="Plus" />
            <Button onPress={() => userStore.login()} title="Logga in" />
            <Button onPress={() => userStore.logout()} title="Logga ut" />
            <Text>{`Loginstatus: ${userStore.loggedInStatus}`}</Text>
          </View>
        ) : (
          <View style={styles.welcomeContainer}>
            <Text>Logga in för att se dina resor.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  )
})

export default ExtraScreen

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
