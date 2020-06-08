import React from 'react'
import { TextInput, View, TouchableOpacity, Text } from 'react-native'
import { Formik } from 'formik'
import { formStyle } from '../styles/FormStyle'
import { Ionicons } from '@expo/vector-icons'

const createMilestone = () => ({
  transportation: '',
  city: '',
  country: '',
  resident: ''
})

const AddForm = () => (
  <Formik
    initialValues={{
      from: '',
      fromCountry: '',
      to: '',
      toCountry: '',
      transportation: '',
      comments: '',
      price: '',
      milestones: []
    }}
    onSubmit={(values, { resetForm }) => {
      console.log(values)
      resetForm()
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
      <View style={{ paddingTop: 15, paddingBottom: 15 }}>
        <TextInput
          placeholder="Från:"
          style={formStyle.textinput}
          onChangeText={handleChange('from')}
          onBlur={handleBlur('from')}
          value={values.from}
        />
        <TextInput
          placeholder="Från (land):"
          style={formStyle.textinput}
          onChangeText={handleChange('fromCountry')}
          onBlur={handleBlur('fromCountry')}
          value={values.fromCountry}
        />
        {values.milestones.map((milestone, index) => (
          <View key={index}>
            <Text style={{ marginTop: 15 }}>Delmål {index + 1}:</Text>
            <TextInput
              placeholder="Transportmedel:"
              style={formStyle.textinput}
              onChangeText={handleChange(`milestones[${index}].transportation`)}
              onBlur={handleBlur(`milestones[${index}].transportation`)}
              value={values.milestones[index].transportation}
            />
            <TextInput
              placeholder="Stad:"
              style={formStyle.textinput}
              onChangeText={handleChange(`milestones[${index}].city`)}
              onBlur={handleBlur(`milestones[${index}].city`)}
              value={values.milestones[index].city}
            />
            <TextInput
              placeholder="Land:"
              style={formStyle.textinput}
              onChangeText={handleChange(`milestones[${index}].country`)}
              onBlur={handleBlur(`milestones[${index}].country`)}
              value={values.milestones[index].country}
            />
            <TextInput
              placeholder="Boende:"
              style={formStyle.textinput}
              onChangeText={handleChange(`milestones[${index}].resident`)}
              onBlur={handleBlur(`milestones[${index}].resident`)}
              value={values.milestones[index].resident}
            />
          </View>
        ))}

        <TouchableOpacity
          style={{ alignItems: 'center', marginTop: 15 }}
          onPress={() =>
            setFieldValue('milestones', [
              ...values.milestones,
              createMilestone()
            ])
          }
        >
          <Text style={{ fontSize: 12 }}>Lägg till delmål:</Text>
          <Ionicons name="md-add-circle" size={30} color="#9c9c9c" />
        </TouchableOpacity>

        <TextInput
          placeholder="Till:"
          style={formStyle.textinput}
          onChangeText={handleChange('to')}
          onBlur={handleBlur('to')}
          value={values.to}
        />
        <TextInput
          placeholder="Till (land):"
          style={formStyle.textinput}
          onChangeText={handleChange('toCountry')}
          onBlur={handleBlur('toCountry')}
          value={values.toCountry}
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
          <Text>Spara resa</Text>
        </TouchableOpacity>
      </View>
    )}
  </Formik>
)

export default AddForm
