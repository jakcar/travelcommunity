import * as React from 'react'
import { observer } from 'mobx-react'
// import { useStores } from '../hooks/use-stores'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const PopularScreen = observer(() => {
  //   const { userStore } = useStores()
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Text>Populära resor ska listas här...</Text>
        </View>
      </ScrollView>
    </View>
  )
})

export default PopularScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10
  }
})
