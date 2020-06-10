import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { observer } from 'mobx-react'
import { Entypo } from '@expo/vector-icons'
import { travelCardStyle } from '../styles/TravelCardStyle'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
// import { useStores } from '../hooks/use-stores'

const TravelsList = observer((props) => {
  // const { generalStore } = useStores()

  const starRating = (rating) => {
    if (rating <= 1.25) {
      return <Ionicons name="md-star" size={18} color="grey" />
    } else if (rating >= 1.25 && rating <= 2.25) {
      return (
        <>
          <Ionicons name="md-star" size={18} color="grey" />
          <Ionicons name="md-star" size={18} color="grey" />
        </>
      )
    } else if (rating >= 2.25 && rating <= 3.25) {
      return (
        <>
          <Ionicons name="md-star" size={18} color="grey" />
          <Ionicons name="md-star" size={18} color="grey" />
          <Ionicons name="md-star" size={18} color="grey" />
        </>
      )
    } else if (rating >= 3.25 && rating <= 4.25) {
      return (
        <>
          <Ionicons name="md-star" size={18} color="grey" />
          <Ionicons name="md-star" size={18} color="grey" />
          <Ionicons name="md-star" size={18} color="grey" />
          <Ionicons name="md-star" size={18} color="grey" />
        </>
      )
    } else if (rating >= 4.25) {
      return (
        <>
          <Ionicons name="md-star" size={18} color="grey" />
          <Ionicons name="md-star" size={18} color="grey" />
          <Ionicons name="md-star" size={18} color="grey" />
          <Ionicons name="md-star" size={18} color="grey" />
          <Ionicons name="md-star" size={18} color="grey" />
        </>
      )
    }
  }

  const transportationMilestoneIcons = (iconValue) => {
    if (iconValue == 0) {
      return <Ionicons name="md-airplane" size={20} color="#05294b" />
    } else if (iconValue == 1) {
      return <Ionicons name="md-train" size={20} color="#05294b" />
    } else if (iconValue == 2) {
      return <Ionicons name="md-boat" size={20} color="#05294b" />
    } else if (iconValue == 3) {
      return <Ionicons name="md-car" size={20} color="#05294b" />
    }
  }

  const transportationFromIcons = (iconValue) => {
    if (iconValue == 0) {
      return <Ionicons name="md-airplane" size={20} color="#05294b" />
    } else if (iconValue == 1) {
      return <Ionicons name="md-train" size={20} color="#05294b" />
    } else if (iconValue == 2) {
      return <Ionicons name="md-boat" size={20} color="#05294b" />
    } else if (iconValue == 3) {
      return <Ionicons name="md-car" size={20} color="#05294b" />
    }
  }

  return (
    <FlatList
      style={{ paddingTop: 20 }}
      keyExtractor={(item) => item.price}
      data={props.data}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={travelCardStyle.listcontainer}>
          <Text style={{ alignSelf: 'flex-start' }}>
            {starRating(item.ratingScore)}
          </Text>
          <Text style={travelCardStyle.travelHeaderOne}>
            {item.from}, {item.fromCountry}
          </Text>
          <Text>{transportationFromIcons(item.fromTrans)}</Text>
          <Entypo name="dots-two-vertical" size={24} color="#05294b" />
          <FlatList
            data={item.milestones}
            renderItem={({ item }) => (
              <View style={travelCardStyle.milestoneWrapper}>
                <View style={travelCardStyle.milestoneContainer}>
                  <Text>
                    {item.city}, {item.country}
                  </Text>
                  <Text>
                    <FontAwesome5 name="hotel" size={13} color="black" />{' '}
                    {item.resident}
                  </Text>
                </View>

                <Text style={{ padding: 5 }}>
                  {transportationMilestoneIcons(item.Transportation)}
                </Text>
                <Text style={travelCardStyle.dots}>
                  <Entypo name="dots-two-vertical" size={24} color="#05294b" />
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.resident}
          />

          <Text style={travelCardStyle.travelHeaderOne}>
            {item.to}, {item.toCountry}
          </Text>

          <Text style={travelCardStyle.regularText}>
            {/* <Ionicons name="ios-hourglass" size={18} color="#05294b" />{' '} */}
            Restid totalt:
          </Text>
          <Text style={travelCardStyle.recapText}>{item.traveltime}</Text>

          <Text style={travelCardStyle.regularText}>
            {/* <FontAwesome5 name="money-bill-alt" size={18} color="#05294b" />{' '} */}
            Kostnad totalt:
          </Text>
          <Text style={travelCardStyle.recapText}> {item.price}</Text>
        </View>
      )}
    />
  )
})

export default TravelsList
