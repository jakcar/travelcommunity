import React from 'react'
import { observer } from 'mobx-react'
// import { useStores } from '../hooks/use-stores'
import { View } from 'react-native'
import { containerStyle } from '../styles/ContainerStyle'
import TopList from '../components/TopList'

const PopularScreen = observer(() => {
  // const { userStore } = useStores()

  return (
    <View style={containerStyle.container}>
      <TopList />
    </View>
  )
})

export default PopularScreen
