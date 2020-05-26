import React from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'
import { Formik } from 'formik'

const AddForm = () => (
  <Formik
    initialValues={{ from: '', to: '', comments: '', price: '' }}
    onSubmit={(values) => console.log(values)}
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
        <TextInput
          placeholder="Totalt pris:"
          style={styles.textinput}
          onChangeText={handleChange('price')}
          onBlur={handleBlur('price')}
          value={values.price}
        />
        <TextInput
          multiline={true}
          placeholder="Kommentarer:"
          style={styles.textinput}
          onChangeText={handleChange('comments')}
          onBlur={handleBlur('comments')}
          value={values.comments}
        />
        <Button onPress={handleSubmit} title="Lägg till" />
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

export default AddForm
