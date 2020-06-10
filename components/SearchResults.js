import * as React from 'react'
import { View, Text } from 'react-native'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'
import { travelCardStyle } from '../styles/TravelCardStyle'
import TravelsList from '../components/TravelsList'

const SearchResults = observer(() => {
  const { generalStore } = useStores()

  return generalStore.searchRes ? (
    <TravelsList data={generalStore.searchRes} />
  ) : (
    <View style={travelCardStyle.searchMessage}>
      <Text>{generalStore.searchMessage}</Text>
    </View>
  )
})

export default SearchResults
