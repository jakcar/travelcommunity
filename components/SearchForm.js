import React from 'react'
import { TextInput, View, Keyboard, TouchableOpacity, Text } from 'react-native'
import { Formik } from 'formik'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'
import { formStyle } from '../styles/FormStyle'

const SearchForm = observer(() => {
  const { generalStore } = useStores()

  return (
    <Formik
      initialValues={{ from: '', to: '' }}
      onSubmit={(values) => {
        generalStore.startLoading()
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
            generalStore.stopLoading()
          })
          .catch((error) => {
            console.error('Error:', error)
            generalStore.stopLoading()
          })
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={{ marginBottom: 10, paddingTop: 10 }}>
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

export default SearchForm
