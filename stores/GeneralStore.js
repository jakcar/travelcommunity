import { observable } from 'mobx'

const GeneralStore = observable({
  searchRes: null,
  handleSearch(payload) {
    console.log(payload)
    if (payload) {
      this.searchRes = payload
      console.log(this.searchRes[0].from)
      console.log(this.searchRes[0].to)
    } else {
      this.searchRes = null
    }
  }
})

export default GeneralStore
