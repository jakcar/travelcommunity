import { StyleSheet } from 'react-native'

export const formStyle = StyleSheet.create({
  textinput: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    padding: 5,
    backgroundColor: '#fff'
  },
  pickerinput: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: '#fff'
  },
  errormessage: {
    fontSize: 10,
    color: 'red'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10,
    elevation: 5,
    borderRadius: 5
  },
  resetbutton: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#ff6666',
    padding: 10,
    marginTop: 20,
    elevation: 3,
    borderRadius: 5
  }
})
