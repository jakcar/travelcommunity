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
      return <Ionicons name="md-star" size={14} color="#05294b" />
    } else if (rating >= 1.26 && rating <= 1.75) {
      return (
        <>
          <Ionicons name="md-star" size={14} color="#05294b" />
          <Ionicons name="md-star-half" size={14} color="#05294b" />
        </>
      )
    } else if (rating >= 1.76 && rating <= 2.25) {
      return (
        <>
          <Ionicons name="md-star" size={14} color="#05294b" />
          <Ionicons name="md-star" size={14} color="#05294b" />
        </>
      )
    } else if (rating >= 2.26 && rating <= 2.75) {
      return (
        <>
          <Ionicons name="md-star" size={14} color="#05294b" />
          <Ionicons name="md-star" size={14} color="#05294b" />
          <Ionicons name="md-star-half" size={14} color="#05294b" />
        </>
      )
    } else if (rating >= 2.76 && rating <= 3.25) {
      return (
        <>
          <Ionicons name="md-star" size={14} color="#05294b" />
          <Ionicons name="md-star" size={14} color="#05294b" />
          <Ionicons name="md-star" size={14} color="#05294b" />
        </>
      )
    } else if (rating >= 3.26 && rating <= 3.75) {
      return (
        <>
          <Ionicons name="md-star" size={14} color="#05294b" />
          <Ionicons name="md-star" size={14} color="#05294b" />
          <Ionicons name="md-star" size={14} color="#05294b" />
          <Ionicons name="md-star-half" size={14} color="#05294b" />
        </>
      )
    } else if (rating >= 3.76 && rating <= 4.25) {
      return (
        <>
          <Ionicons name="md-star" size={14} color="#05294b" />
          <Ionicons name="md-star" size={14} color="#05294b" />
          <Ionicons name="md-star" size={14} color="#05294b" />
          <Ionicons name="md-star" size={14} color="#05294b" />
        </>
      )
    } else if (rating >= 4.26 && rating <= 4.75) {
      return (
        <>
          <Ionicons name="md-star" size={14} color="#05294b" />
          <Ionicons name="md-star" size={14} color="#05294b" />
          <Ionicons name="md-star" size={14} color="#05294b" />
          <Ionicons name="md-star" size={14} color="#05294b" />
          <Ionicons name="md-star-half" size={14} color="#05294b" />
        </>
      )
    } else if (rating >= 4.76) {
      return (
        <>
          <Ionicons name="md-star" size={14} color="#05294b" />
          <Ionicons name="md-star" size={14} color="#05294b" />
          <Ionicons name="md-star" size={14} color="#05294b" />
          <Ionicons name="md-star" size={14} color="#05294b" />
          <Ionicons name="md-star" size={14} color="#05294b" />
        </>
      )
    }
  }

  const transportationIcons = (iconValue) => {
    let iconName
    switch (iconValue) {
      case 0:
        iconName = 'md-airplane'
        break
      case 1:
        iconName = 'md-train'
        break
      case 2:
        iconName = 'md-boat'
        break
      case 3:
        iconName = 'md-car'
        break
      case 4:
        iconName = 'md-bus'
        break
    }
    return <Ionicons name={iconName} size={20} color="#05294b" />
  }

  return (
    <FlatList
      style={{ paddingTop: 15 }}
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
          <Text>{transportationIcons(item.fromTrans)}</Text>
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
                  {transportationIcons(item.Transportation)}
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
          <Text
            style={{
              alignSelf: 'flex-end',
              fontSize: 12,
              color: '#05294b',
              marginTop: 15
            }}
          >
            <Ionicons name="md-person" size={12} color="#05294b" />{' '}
            {item.username}
          </Text>
        </View>
      )}
    />
  )
})

export default TravelsList
