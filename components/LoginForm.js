import React, { useState } from 'react'
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import { Formik } from 'formik'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'
import { formStyle } from '../styles/FormStyle'

const LoginForm = observer(() => {
  const { userStore } = useStores()
  const [loginMessage, setLoginMessage] = useState('')

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values) => {
        fetch('http://10.0.2.2:3005/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })
          .then((response) => {
            if (response.ok) {
              userStore.login(values.username)
            } else if (response.status == 401) {
              setLoginMessage('Fel användarnamn eller lösenord.')
            } else if (response.status == 403) {
              setLoginMessage('Detta konto är avstängt.')
            }
          })
          .catch((error) => {
            console.error('Error:', error)
          })
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={{ paddingTop: 15 }}>
          <TextInput
            placeholder="Username"
            style={formStyle.textinput}
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.from}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={formStyle.textinput}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.to}
          />
          <TouchableOpacity style={formStyle.button} onPress={handleSubmit}>
            <Text>Logga in</Text>
          </TouchableOpacity>
          <View style={styles.loginmessagecontainer}>
            <Text style={styles.loginmessage}>{loginMessage}</Text>
          </View>
        </View>
      )}
    </Formik>
  )
})

const styles = StyleSheet.create({
  loginmessagecontainer: {
    alignItems: 'center',
    marginTop: 15,
    color: '#ff0000'
  },
  loginmessage: {
    color: '#ff0000'
  }
})

export default LoginForm
