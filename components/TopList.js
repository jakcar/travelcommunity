import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { observer } from 'mobx-react'
import TravelsList from '../components/TravelsList'
// import { useStores } from '../hooks/use-stores'

const TopList = observer(() => {
  // const { generalStore } = useStores()
  const [topList, setTopList] = useState([])
  const [fetchInProgress, setFetchInProgress] = useState(false)

  useEffect(() => {
    setFetchInProgress(true)
    fetch('http://10.0.2.2:3005/travels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setTopList(result)
        setFetchInProgress(false)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])

  return fetchInProgress ? (
    <ActivityIndicator style={{ marginTop: 100 }} size="large" color="#fff" />
  ) : (
    <TravelsList data={topList.travelData} />
  )
})

export default TopList
