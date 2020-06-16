import * as React from 'react'
import { View } from 'react-native'
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'
import LoadingSpinner from '../components/LoadingSpinner'
import { containerStyle } from '../styles/ContainerStyle'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'

const HomeScreen = observer(() => {
  const { generalStore } = useStores()

  return (
    <View style={containerStyle.container}>
      <SearchForm />
      {generalStore.isLoading ? <LoadingSpinner /> : <SearchResults />}
    </View>
  )
})

export default HomeScreen
