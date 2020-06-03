import * as React from 'react'
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'

function HomeScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <SearchForm />
        </View>

        <View style={styles.contentContainer}>
          <SearchResults />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

HomeScreen.navigationOptions = {
  header: null
}

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

export default HomeScreen
