import { observable } from 'mobx'

const GeneralStore = observable({
  searchRes: null,
  searchMessage: '',
  handleSearch(payload) {
    console.log(payload)
    if (payload) {
      this.searchRes = payload
    } else {
      this.searchRes = null
      this.searchMessage = 'Inga resultat hittades.'
    }
  }
})

export default GeneralStore
