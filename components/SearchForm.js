import React from 'react'
import { TextInput, View, Keyboard, TouchableOpacity, Text } from 'react-native'
import { Formik } from 'formik'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'
import { formStyle } from '../constants/FormStyle'

const SearchForm = observer(() => {
  const { generalStore } = useStores()

  return (
    <Formik
      initialValues={{ from: '', to: '' }}
      onSubmit={(values) => {
        fetch('http://10.0.2.2:3005/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })
          .then((response) => response.json())
          .then((result) => {
            generalStore.handleSearch(result.searchresults)
          })
          .catch((error) => {
            console.error('Error:', error)
          })
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            placeholder="Från:"
            style={formStyle.textinput}
            onChangeText={handleChange('from')}
            onBlur={handleBlur('from')}
            value={values.from}
          />
          <TextInput
            placeholder="Till:"
            style={formStyle.textinput}
            onChangeText={handleChange('to')}
            onBlur={handleBlur('to')}
            value={values.to}
          />
          <TouchableOpacity
            style={formStyle.button}
            onPress={() => {
              handleSubmit(), Keyboard.dismiss()
            }}
          >
            <Text>Sök</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  )
})

{
  formStyle
}

// const styles = StyleSheet.create({
//   textinput: {
//     borderColor: 'grey',
//     borderWidth: 1,
//     borderRadius: 5,
//     height: 40,
//     marginTop: 10,
//     padding: 5
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//     marginTop: 10,
//     elevation: 5,
//     borderRadius: 5
//   }
// })

export default SearchForm
