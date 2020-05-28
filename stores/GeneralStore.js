import { observable, action } from 'mobx'

export class GeneralStore {
  @observable
  testString = 'Hej hej från generalstore'

  @action increaseNumber = () => {
    this.counter++
  }
}
