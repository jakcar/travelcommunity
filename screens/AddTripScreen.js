import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AddForm from '../components/AddForm'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'

const AddTripScreen = observer(() => {
  const { userStore } = useStores()

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          {userStore.loggedInStatus ? (
            <AddForm />
          ) : (
            <Text>Logga in för att lägga till resor.</Text>
          )}
        </View>
      </ScrollView>
    </View>
  )
})

// const AddTripScreen = () => {
//   return (
//     <View style={styles.container}>
//       <ScrollView
//         style={styles.container}
//         contentContainerStyle={styles.contentContainer}
//       >
//         <View style={styles.welcomeContainer}>
//           <AddForm />
//           <Text></Text>
//         </View>
//       </ScrollView>
//     </View>
//   )
// }

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

export default AddTripScreen

// export default inject((tripStore) => tripStore)(observer(AddTripScreen))
