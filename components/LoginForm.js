import React from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'

const LoginForm = observer(() => {
  const { userStore } = useStores()

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values) => {
        console.log(values), userStore.login()
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            placeholder="Username"
            style={styles.textinput}
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.from}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.textinput}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.to}
          />
          <Button onPress={handleSubmit} title="Login" />
        </View>
      )}
    </Formik>
  )
})

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

export default LoginForm
