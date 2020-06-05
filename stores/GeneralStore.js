import { observable } from 'mobx'

const GeneralStore = observable({
  isLoading: false,
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
  },
  handleLoading() {
    if (this.isLoading) {
      this.isLoading = false
    } else {
      this.isLoading = true
    }
  }
})

export default GeneralStore
