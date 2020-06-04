import React from 'react'
import { TextInput, View, TouchableOpacity, Text } from 'react-native'
import { Formik } from 'formik'
import { formStyle } from '../styles/FormStyle'

const AddForm = () => (
  <Formik
    initialValues={{ from: '', to: '', comments: '', price: '' }}
    onSubmit={(values) => console.log(values)}
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
        <TextInput
          placeholder="Totalt pris:"
          style={formStyle.textinput}
          onChangeText={handleChange('price')}
          onBlur={handleBlur('price')}
          value={values.price}
        />
        <TextInput
          multiline={true}
          placeholder="Kommentarer:"
          style={formStyle.textinput}
          onChangeText={handleChange('comments')}
          onBlur={handleBlur('comments')}
          value={values.comments}
        />
        <TouchableOpacity style={formStyle.button} onPress={handleSubmit}>
          <Text>Lägg till</Text>
        </TouchableOpacity>
      </View>
    )}
  </Formik>
)

export default AddForm
