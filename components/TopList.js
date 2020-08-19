import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import TravelsList from '../components/TravelsList'
import LoadingSpinner from '../components/LoadingSpinner'
import { useStores } from '../hooks/use-stores'

const TopList = observer(() => {
  const { generalStore } = useStores()
  const [topList, setTopList] = useState([])
  const [fetchInProgress, setFetchInProgress] = useState(false)

  useEffect(() => {
    setFetchInProgress(true)
    fetch(generalStore.fetchUrl + '/travels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((result) => {
        setTopList(result)
        setFetchInProgress(false)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])

  return fetchInProgress ? (
    <LoadingSpinner />
  ) : (
    <TravelsList data={topList.travelData} />
  )
})

export default TopList
