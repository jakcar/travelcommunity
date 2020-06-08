import * as React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'
import { Entypo } from '@expo/vector-icons'

const UserTravels = observer(() => {
  const { userStore } = useStores()

  return (
    <View>
      {userStore.userTravels && (
        <View>
          <FlatList
            style={{ paddingTop: 25 }}
            keyExtractor={(item) => item.price}
            data={userStore.userTravels.travelData}
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
        </View>
      )}
    </View>
  )
})

const styles = StyleSheet.create({
  listcontainer: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 20,
    borderRadius: 10,

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

export default UserTravels
