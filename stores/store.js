import { observable, action } from 'mobx'

class tripStore {
  @observable
  counter = 0

  @observable testString = 'Hej från lagret'

  @observable loggedInStatus = false

  @action login = () => {
    this.loggedInStatus = true
  }

  @action logout = () => {
    this.loggedInStatus = false
  }

  @action changeText = () => {
    this.testString = 'Vooo'
  }

  @action increaseNumber = () => {
    this.counter++
  }
}

export default new tripStore()
