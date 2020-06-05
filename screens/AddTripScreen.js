import * as React from 'react'
import { View, Text, ScrollView } from 'react-native'
import AddForm from '../components/AddForm'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'
import { containerStyle } from '../styles/ContainerStyle'

const AddTripScreen = observer(() => {
  const { userStore } = useStores()

  return (
    <ScrollView style={containerStyle.container}>
      {userStore.loggedInStatus ? (
        <View style={containerStyle.contentContainer}>
          <AddForm />
        </View>
      ) : (
        <View style={containerStyle.centeredContainer}>
          <Text>Logga in för att lägga till resor.</Text>
        </View>
      )}
    </ScrollView>
  )
})

export default AddTripScreen
