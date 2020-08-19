import { observable } from 'mobx'

const GeneralStore = observable({
  isLoading: false,
  searchRes: null,
  searchMessage: '',
  fetchUrl: 'http://10.10.65.212:3005',
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
  },
  startLoading() {
    this.isLoading = true
  },
  stopLoading() {
    this.isLoading = false
  }
})

export default GeneralStore
