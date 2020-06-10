import * as React from 'react'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'
import TravelsList from '../components/TravelsList'

const UserTravels = observer(() => {
  const { userStore } = useStores()

  return (
    userStore.userTravels && (
      <TravelsList data={userStore.userTravels.travelData} />
    )
  )
})

export default UserTravels
