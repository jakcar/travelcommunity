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
        iconName = 'ios-airplane'
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
      keyExtractor={(item) => item.id.toString()}
      data={props.data}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={travelCardStyle.listcontainer}>
          <Text style={{ alignSelf: 'flex-start' }}>
            {starRating(item.ratingScore)}
          </Text>
          <View style={travelCardStyle.startLocContainer}>
            <Text style={travelCardStyle.travelHeaderOne}>
              {item.from}, {item.fromCountry}
            </Text>
          </View>
          <Text>{transportationIcons(item.fromTrans)}</Text>
          <Entypo name="dots-two-vertical" size={24} color="#05294b" />
          <FlatList
            data={item.milestones}
            keyExtractor={(item) => item.resident}
            renderItem={({ item }) => (
              <View style={travelCardStyle.milestoneWrapper}>
                <View style={travelCardStyle.milestoneContainer}>
                  <Text>
                    {item.city}, {item.country}
                  </Text>
                  <Text>
                    {item.resident ? (
                      <Text>
                        <FontAwesome5 name="hotel" size={13} color="black" />{' '}
                        {item.resident}
                      </Text>
                    ) : (
                      <Text>
                        <FontAwesome5 name="hotel" size={13} color="black" /> -
                      </Text>
                    )}
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
          />
          <View style={travelCardStyle.endLocContainer}>
            <Text style={travelCardStyle.travelHeaderOne}>
              {item.to}, {item.toCountry}
            </Text>
            <Text style={{ paddingBottom: 5 }}>
              {item.toResident ? (
                <Text style={{ paddingBottom: 5 }}>
                  <FontAwesome5 name="hotel" size={13} color="black" />{' '}
                  {item.toResident}
                </Text>
              ) : (
                <Text style={{ paddingBottom: 5 }}>
                  <FontAwesome5 name="hotel" size={13} color="black" /> -
                </Text>
              )}
            </Text>
          </View>

          <View style={travelCardStyle.recapContainer}>
            <Text style={travelCardStyle.recapText}>
              <Ionicons name="ios-hourglass" size={14} color="#05294b" />{' '}
              {item.traveltime}
            </Text>
            <Text style={travelCardStyle.recapText}>
              <FontAwesome5 name="money-bill-alt" size={14} color="#05294b" />{' '}
              {item.price}
            </Text>
          </View>

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
          <Text
            style={{
              alignSelf: 'flex-end',
              fontSize: 10,
              color: '#05294b'
            }}
          >
            {item.timestamp}
          </Text>
        </View>
      )}
    />
  )
})

export default TravelsList
