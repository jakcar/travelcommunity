import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import TravelsList from '../components/TravelsList'
// import { useStores } from '../hooks/use-stores'

const TopList = observer(() => {
  // const { generalStore } = useStores()
  const [topList, setTopList] = useState([])

  useEffect(() => {
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
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])

  return <TravelsList data={topList.travelData} />
})

export default TopList
