import * as React from 'react'
import { View, ActivityIndicator } from 'react-native'
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'
import { containerStyle } from '../styles/ContainerStyle'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'

const HomeScreen = observer(() => {
  const { generalStore } = useStores()

  return (
    <View style={containerStyle.container}>
      <SearchForm />
      {generalStore.isLoading ? (
        <ActivityIndicator
          style={{ marginTop: 100 }}
          size="large"
          color="#fff"
        />
      ) : (
        <SearchResults />
      )}
    </View>
  )
})

export default HomeScreen
