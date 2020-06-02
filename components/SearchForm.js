import React from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'
import { Formik } from 'formik'

const SearchForm = () => (
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
          console.log(result)
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
          style={styles.textinput}
          onChangeText={handleChange('from')}
          onBlur={handleBlur('from')}
          value={values.from}
        />
        <TextInput
          placeholder="Till:"
          style={styles.textinput}
          onChangeText={handleChange('to')}
          onBlur={handleBlur('to')}
          value={values.to}
        />
        <Button onPress={handleSubmit} title="Sök" />
      </View>
    )}
  </Formik>
)

const styles = StyleSheet.create({
  textinput: {
    borderColor: 'grey',
    borderWidth: 1,
    height: 40,
    margin: 5,
    width: 250,
    padding: 5
  }
})

export default SearchForm
