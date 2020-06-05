import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { observer } from 'mobx-react'
// import { useStores } from '../hooks/use-stores'

const TopList = observer(() => {
  // const { generalStore } = useStores()
  const [topList, setTopList] = useState([])

  useEffect(() => {
    fetch('http://10.0.2.2:3005/travels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setTopList(result)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])

  return (
    <FlatList
      keyExtractor={(item) => item.traveltime}
      showsVerticalScrollIndicator={false}
      data={topList.travelData}
      renderItem={({ item }) => (
        <View style={styles.listcontainer}>
          <Text>
            Betyg: {item.ratingScore}
            {'\n'}
            {'\n'}
            {item.from} till {item.to}
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
    />
  )
})

const styles = StyleSheet.create({
  listcontainer: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 25,
    borderRadius: 10,
    marginTop: 15
  }
})

export default TopList
