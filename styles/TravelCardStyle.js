import { StyleSheet } from 'react-native'

export const travelCardStyle = StyleSheet.create({
  listcontainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 25,
    backgroundColor: '#fff'
  },
  startLocContainer: {
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 240,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    marginTop: 20,
    marginBottom: 5
    // backgroundColor: '#ccc'
  },
  endLocContainer: {
    alignItems: 'center',

    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 240,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    marginTop: 10
    // backgroundColor: '#ccc'
  },
  milestoneContainer: {
    marginTop: 5,
    padding: 15,
    width: 200,
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
    marginTop: 20
  },
  recapWrapper: {
    alignItems: 'center'
  },
  recapText: {
    fontWeight: 'bold',
    fontSize: 12,
    padding: 5
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
