import { observable, action } from 'mobx'

export class UserStore {
  @observable
  counter = 0

  @action increaseNumber = () => {
    this.counter++
  }

  @observable loggedInStatus = false

  @action login = () => {
    this.loggedInStatus = true
  }

  @action logout = () => {
    this.loggedInStatus = false
  }
}
