import * as React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'

const SearchResults = observer(() => {
  const { generalStore } = useStores()

  return (
    <View>
      {generalStore.searchRes && (
        <View>
          <FlatList
            data={generalStore.searchRes}
            renderItem={({ item }) => (
              <View style={styles.listcontainer}>
                <Text>
                  {item.from} - {item.to}
                  {'\n'}
                  {item.traveltime}
                  {'\n'}
                </Text>
                <Text>Delmål:</Text>
                <FlatList
                  data={item.milestones}
                  renderItem={({ item }) => (
                    <View>
                      <Text>
                        {item.city} - {item.resident}
                      </Text>
                    </View>
                  )}
                  keyExtractor={(item) => item.resident}
                />
                <Text></Text>
                <Text>Pris: {item.price}</Text>
                <Text>Uppladdad av: {item.username}</Text>
              </View>
            )}
            keyExtractor={(item) => item.traveltime}
          />
        </View>
      )}
    </View>
  )
})

const styles = StyleSheet.create({
  listcontainer: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 25,
    borderRadius: 10
  }
})

export default SearchResults
