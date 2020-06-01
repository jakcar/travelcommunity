// import { observable, action } from 'mobx'

// export class GeneralStore {
//   @observable
//   counter = 0

//   @observable
//   testString = 'Hej hej från generalstore'

//   @action increaseNumber = () => {
//     this.counter++
//   }
// }

import { observable } from 'mobx'

const GeneralStore = observable({
  counter: 0,
  testString: 'Hej Hej från generalstore',
  increaseNumber() {
    this.counter++
  }
})

export default GeneralStore
