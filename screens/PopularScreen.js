import React from 'react'
import { observer } from 'mobx-react'
// import { useStores } from '../hooks/use-stores'
import { Text, View } from 'react-native'
import { containerStyle } from '../styles/ContainerStyle'

const PopularScreen = observer(() => {
  // const { userStore } = useStores()

  return (
    <View style={containerStyle.container}>
      <View style={containerStyle.centeredContainer}>
        <Text>Populära resor ska listas här...</Text>
      </View>
    </View>
  )
})

export default PopularScreen
