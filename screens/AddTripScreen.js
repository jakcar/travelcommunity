import * as React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AddForm from '../components/AddForm'
import { inject, observer } from 'mobx-react'

const AddTripScreen = (tripStore) => {
  console.log(tripStore.store.loggedInStatus)
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <AddForm />
          <Text></Text>
          <View>
            <Button onPress={() => tripStore.store.login()} title="Logga in" />
            <Button onPress={() => tripStore.store.logout()} title="Logga ut" />
            <Text>{`Loginstatus: ${tripStore.store.loggedInStatus}`}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

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

export default inject((tripStore) => tripStore)(observer(AddTripScreen))
