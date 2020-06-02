import { observable } from 'mobx'

const UserStore = observable({
  loggedInStatus: false,
  userName: '',
  login(payload) {
    this.userName = payload
    this.loggedInStatus = true
  },
  logout() {
    this.loggedInStatus = false
    this.userName = ''
  }
})

export default UserStore
