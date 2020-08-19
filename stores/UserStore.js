import { observable } from 'mobx'

const UserStore = observable({
  userTravels: null,
  loggedInStatus: false,
  userName: '',
  login(payload) {
    this.userName = payload
    this.loggedInStatus = true

    fetch('http://10.10.65.212:3005/my-travels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: this.userName })
    })
      .then((response) => response.json())
      .then((result) => {
        this.userTravels = result
        console.log(result)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  },
  updateUserTravels() {
    fetch('http://10.10.65.212:3005/my-travels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: this.userName })
    })
      .then((response) => response.json())
      .then((result) => {
        this.userTravels = result
        console.log(result)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  },
  logout() {
    this.loggedInStatus = false
    this.userName = ''
    this.userTravels = null
  }
})

export default UserStore
