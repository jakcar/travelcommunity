import React from 'react'
// import { UserStore, GeneralStore } from '../stores'
import { UserStore } from '../stores/UserStore'
import { GeneralStore } from '../stores/GeneralStore'

export const storesContext = React.createContext({
  userStore: new UserStore(),
  generalStore: new GeneralStore()
})
