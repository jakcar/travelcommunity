import * as React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import AddForm from '../components/AddForm'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'

const AddTripScreen = observer(() => {
  const { userStore } = useStores()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          {userStore.loggedInStatus ? (
            <AddForm />
          ) : (
            <Text>Logga in för att lägga till resor.</Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center'
  },
  contentContainer: {
    paddingTop: 30,
    width: '75%'
  }
})

export default AddTripScreen
