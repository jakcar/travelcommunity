import * as React from 'react'
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'
import { containerStyle } from '../styles/ContainerStyle'

function HomeScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={containerStyle.container}>
        <View style={containerStyle.contentContainer}>
          <SearchForm />
          <SearchResults />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

HomeScreen.navigationOptions = {
  header: null
}

export default HomeScreen
