import React, { useState } from 'react'
import { TextInput, View, TouchableOpacity, Text, Picker } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { formStyle } from '../styles/FormStyle'
import { Ionicons } from '@expo/vector-icons'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'

const createMilestone = () => ({
  Transportation: 1,
  city: '',
  country: '',
  resident: '',
  price: ''
})

const ErrorMessage = ({ errorValue }) => (
  <Text style={formStyle.errormessage}>{errorValue}</Text>
)

const yupSchema = Yup.object().shape({
  fromLoc: Yup.string().required('Skriv in staden som resan startade i.'),
  fromCountry: Yup.string().required('Skriv in landet som resan startade i.'),
  toLoc: Yup.string().required('Skriv in staden som resan slutade i.'),
  toCountry: Yup.string().required('Skriv in landet som resan slutade i.'),
  // toResident: Yup.string().required('Skriv slutmålets boende.'),
  price: Yup.string().required('Skriv in det totala priset för resan.'),
  traveltime: Yup.string().required('Skriv in den totala restiden.'),
  milestones: Yup.array().of(
    Yup.object().shape({
      city: Yup.string().required('Skriv in staden för delmålet.'),
      country: Yup.string().required('Skriv in landet för delmålet.'),
      // resident: Yup.string().required('Skriv in ditt boende för delmålet.'),
      price: Yup.string().required(
        'Skriv in kostnaden för resan till delmålet.'
      )
    })
  )
})

const AddForm = observer(() => {
  const { userStore, generalStore } = useStores()
  const [travelPosted, setTravelPosted] = useState('')

  return (
    <Formik
      initialValues={{
        username: userStore.userName,
        fromLoc: '',
        fromCountry: '',
        toLoc: '',
        toCountry: '',
        toResident: '',
        fromTransportation: 1,
        price: '',
        traveltime: '',
        milestones: []
      }}
      validationSchema={yupSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(trip, { resetForm }) => {
        fetch(generalStore.fetchUrl + '/user-app', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(trip)
        })
          .then((response) => response.json())
          .then((result) => {
            setTravelPosted(result.message)
            userStore.updateUserTravels()
            resetForm()
          })
          .catch((error) => {
            console.error('Error:', error)
          })
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        setFieldValue,
        errors,
        resetForm
      }) => (
        <View style={{ paddingTop: 15, paddingBottom: 15 }}>
          <TextInput
            placeholder="Från (stad):"
            style={formStyle.textinput}
            onChangeText={handleChange('fromLoc')}
            onBlur={handleBlur('fromLoc')}
            value={values.fromLoc}
          />
          <ErrorMessage errorValue={errors.fromLoc} />

          <TextInput
            placeholder="Från (land):"
            style={formStyle.textinput}
            onChangeText={handleChange('fromCountry')}
            onBlur={handleBlur('fromCountry')}
            value={values.fromCountry}
          />
          <ErrorMessage errorValue={errors.fromCountry} />

          <Text style={{ marginTop: 5, fontSize: 12 }}>
            Transport till nästa mål:
          </Text>
          <View style={formStyle.pickerinput}>
            <Picker
              style={{ height: 40 }}
              itemStyle={{ height: 40 }}
              selectedValue={values.fromTransportation}
              onValueChange={(itemValue) =>
                setFieldValue('fromTransportation', itemValue)
              }
            >
              <Picker.Item label="Flyg" value={0} key={0} />
              <Picker.Item label="Tåg" value={1} key={1} />
              <Picker.Item label="Båt" value={2} key={2} />
              <Picker.Item label="Bil" value={3} key={3} />
              <Picker.Item label="Buss" value={4} key={4} />
            </Picker>
          </View>

          {values.milestones.map((milestone, index) => (
            <View key={index}>
              <Text style={{ marginTop: 15, fontWeight: 'bold' }}>
                Delmål {index + 1}:
              </Text>

              <TextInput
                placeholder="Stad:"
                style={formStyle.textinput}
                onChangeText={handleChange(`milestones[${index}].city`)}
                onBlur={handleBlur(`milestones[${index}].city`)}
                value={values.milestones[index].city}
              />

              {errors.milestones &&
                values.milestones.length == errors.milestones.length && (
                  <ErrorMessage errorValue={errors.milestones[index].city} />
                )}

              <TextInput
                placeholder="Land:"
                style={formStyle.textinput}
                onChangeText={handleChange(`milestones[${index}].country`)}
                onBlur={handleBlur(`milestones[${index}].country`)}
                value={values.milestones[index].country}
              />

              {errors.milestones &&
                values.milestones.length == errors.milestones.length && (
                  <ErrorMessage errorValue={errors.milestones[index].country} />
                )}

              <TextInput
                placeholder="Boende:"
                style={formStyle.textinput}
                onChangeText={handleChange(`milestones[${index}].resident`)}
                onBlur={handleBlur(`milestones[${index}].resident`)}
                value={values.milestones[index].resident}
              />

              {errors.milestones &&
                values.milestones.length == errors.milestones.length && (
                  <ErrorMessage
                    errorValue={errors.milestones[index].resident}
                  />
                )}

              <TextInput
                placeholder="Kostnad:"
                keyboardType={'numeric'}
                style={formStyle.textinput}
                onChangeText={handleChange(`milestones[${index}].price`)}
                onBlur={handleBlur(`milestones[${index}].price`)}
                value={values.milestones[index].price}
              />

              {errors.milestones &&
                values.milestones.length == errors.milestones.length && (
                  <ErrorMessage errorValue={errors.milestones[index].price} />
                )}

              <Text style={{ marginTop: 15, fontSize: 12 }}>
                Transport till nästa mål:
              </Text>
              <View style={formStyle.pickerinput}>
                <Picker
                  style={{ height: 40 }}
                  itemStyle={{ height: 40 }}
                  selectedValue={milestone.Transportation}
                  onValueChange={(itemValue) =>
                    setFieldValue(
                      `milestones[${index}].Transportation`,
                      itemValue
                    )
                  }
                >
                  <Picker.Item label="Flyg" value={0} key={0} />
                  <Picker.Item label="Tåg" value={1} key={1} />
                  <Picker.Item label="Båt" value={2} key={2} />
                  <Picker.Item label="Bil" value={3} key={3} />
                  <Picker.Item label="Buss" value={4} key={4} />
                </Picker>
              </View>
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
            <Text style={{ fontSize: 12, color: '#000' }}>
              Lägg till delmål:
            </Text>
            <Ionicons name="md-add-circle" size={30} color="#05294b" />
          </TouchableOpacity>

          <TextInput
            placeholder="Till (stad):"
            style={formStyle.textinput}
            onChangeText={handleChange('toLoc')}
            onBlur={handleBlur('toLoc')}
            value={values.toLoc}
          />
          <ErrorMessage errorValue={errors.toLoc} />

          <TextInput
            placeholder="Till (land):"
            style={formStyle.textinput}
            onChangeText={handleChange('toCountry')}
            onBlur={handleBlur('toCountry')}
            value={values.toCountry}
          />
          <ErrorMessage errorValue={errors.toCountry} />

          <TextInput
            placeholder="Boende:"
            style={formStyle.textinput}
            onChangeText={handleChange('toResident')}
            onBlur={handleBlur('toResident')}
            value={values.toResident}
          />
          <ErrorMessage errorValue={errors.toResident} />

          <TextInput
            keyboardType={'numeric'}
            placeholder="Total kostnad:"
            style={formStyle.textinput}
            onChangeText={handleChange('price')}
            onBlur={handleBlur('price')}
            value={values.price}
          />
          <ErrorMessage errorValue={errors.price} />

          <TextInput
            placeholder="Total restid:"
            style={formStyle.textinput}
            onChangeText={handleChange('traveltime')}
            onBlur={handleBlur('traveltime')}
            value={values.traveltime}
          />
          <ErrorMessage errorValue={errors.traveltime} />

          <TouchableOpacity style={formStyle.button} onPress={handleSubmit}>
            <Text>Spara resa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={formStyle.resetbutton} onPress={resetForm}>
            <Ionicons name="md-trash" size={24} color="white" />
            {/* <Text style={{ color: 'white', fontSize: 10 }}>Rensa</Text> */}
          </TouchableOpacity>

          <Text style={{ alignSelf: 'center', padding: 5 }}>
            {travelPosted}
          </Text>
        </View>
      )}
    </Formik>
  )
})

export default AddForm
