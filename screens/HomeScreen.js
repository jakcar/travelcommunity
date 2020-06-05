import * as React from 'react'
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator
} from 'react-native'
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'
import { containerStyle } from '../styles/ContainerStyle'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'

const HomeScreen = observer(() => {
  const { generalStore } = useStores()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={containerStyle.container}>
        <SearchForm />
        {generalStore.isLoading ? (
          <ActivityIndicator
            style={{ marginTop: 100 }}
            size="large"
            color="grey"
          />
        ) : (
          <SearchResults />
        )}
      </View>
    </TouchableWithoutFeedback>
  )
})

export default HomeScreen
