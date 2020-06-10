import { StyleSheet } from 'react-native'

export const travelCardStyle = StyleSheet.create({
  listcontainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 20,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: '#fff'
  },
  milestoneContainer: {
    marginTop: 5,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#8ec5fc30',
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: 'grey'
  },
  milestoneWrapper: {
    alignItems: 'center'
  },
  recapContainer: {
    alignItems: 'center',
    backgroundColor: '#ccc',
    width: '100%'
  },
  recapWrapper: {
    alignItems: 'center'
  },
  recapText: {
    fontWeight: 'bold',
    fontSize: 12
  },
  searchMessage: {
    marginTop: 25,
    alignItems: 'center'
  },
  travelHeaderOne: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#05294b',
    padding: 5
  },
  regularText: {
    color: '#05294b',
    fontSize: 14,
    marginTop: 5,
    padding: 5
  },
  dots: {
    textAlign: 'center'
  },
  uploadedBy: {
    alignSelf: 'flex-end',
    marginTop: 15,
    fontSize: 12
  }
})
