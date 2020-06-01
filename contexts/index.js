import React from 'react'
import UserStore from '../stores/UserStore'
import GeneralStore from '../stores/GeneralStore'

export const storesContext = React.createContext({
  userStore: UserStore,
  generalStore: GeneralStore
})
