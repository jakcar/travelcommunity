import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { observer } from 'mobx-react'
import { Entypo } from '@expo/vector-icons'
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
      style={{ paddingTop: 20 }}
      keyExtractor={(item) => item.price}
      data={topList.travelData}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.listcontainer}>
          <Text style={styles.travelHeaderOne}>
            {item.from} till {item.to}
          </Text>

          <Text>
            Uppladdad av {item.username} {'\n'}
          </Text>
          <Text style={styles.travelHeaderTwo}>Restid:</Text>

          <Text>
            {item.traveltime} {'\n'}
          </Text>
          <Text style={styles.travelHeaderTwo}>Delmål:</Text>
          <FlatList
            data={item.milestones}
            renderItem={({ item }) => (
              <View>
                <Text>
                  {item.city}, {item.country}
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.resident}
          />
          <Text></Text>
          <Text style={styles.travelHeaderTwo}>Kostnad:</Text>
          <Text>{item.price}</Text>
          <Text style={{ textAlign: 'right' }}>
            {item.ratingScore}
            <Entypo name="star" size={20} color="black" />
          </Text>
        </View>
      )}
    />
  )
})

const styles = StyleSheet.create({
  listcontainer: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 20,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 30
  },
  travelHeaderOne: {
    fontWeight: 'bold',
    fontSize: 16
  },
  travelHeaderTwo: {
    fontWeight: 'bold'
  }
})

export default TopList
