import * as React from 'react'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'
import { Text, View } from 'react-native'
import { containerStyle } from '../styles/ContainerStyle'
import UserTravels from '../components/UserTravels'

const MyTravelsScreen = observer(() => {
  const { userStore } = useStores()
  return (
    <View style={containerStyle.container}>
      {userStore.loggedInStatus ? (
        <UserTravels />
      ) : (
        <View style={containerStyle.centeredContainer}>
          <Text>Logga in för att se dina resor.</Text>
        </View>
      )}
    </View>
  )
})

export default MyTravelsScreen
