import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'
import { Ionicons } from '@expo/vector-icons'
import {
  HeaderButtons,
  HeaderButton,
  Item
} from 'react-navigation-header-buttons'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import ExtraScreen from '../screens/ExtraScreen'
import AddTripScreen from '../screens/AddTripScreen'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

export default function TabNavigator({ navigation, route }) {
  const IoniconsHeaderButton = (props) => (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={30}
      color="#9c9c9c"
    />
  )

  navigation.setOptions({ headerTitle: getHeaderTitle(route) })

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="settings"
            iconName="md-person"
            onPress={() => alert('hej')}
          />
        </HeaderButtons>
      )
    })
  }, [])

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Sök',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-search" />
          )
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={AddTripScreen}
        options={{
          title: 'Lägg till',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-add-circle" />
          )
        }}
      />

      <BottomTab.Screen
        name="Links"
        component={ExtraScreen}
        options={{
          title: 'Mina resor',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-airplane" />
          )
        }}
      />
    </BottomTab.Navigator>
  )
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

  switch (routeName) {
    case 'Home':
      return 'Sök resa'
    case 'Add':
      return 'Lägg till resa'
    case 'Links':
      return 'Mina resor'
  }
}
