// import { observable, action } from 'mobx'

// export class UserStore {
//   @observable
//   counter = 0

//   @action increaseNumber = () => {
//     this.counter++
//   }

//   @observable loggedInStatus = false

//   @action login = () => {
//     this.loggedInStatus = true
//   }

//   @action logout = () => {
//     this.loggedInStatus = false
//   }
// }

import { observable } from 'mobx'

const UserStore = observable({
  counter: 0,
  loggedInStatus: false,
  increaseNumber() {
    this.counter++
  },
  login() {
    this.loggedInStatus = true
  },
  logout() {
    this.loggedInStatus = false
  }
})

export default UserStore
