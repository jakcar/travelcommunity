import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'
import { Ionicons } from '@expo/vector-icons'
import {
  // HeaderButtons,
  // HeaderButton,
  // Item,
  HiddenItem,
  OverflowMenu
} from 'react-navigation-header-buttons'

import { observer } from 'mobx-react'
import { useStores } from '../hooks/use-stores'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import MyTravelsScreen from '../screens/MyTravelsScreen'
import AddTripScreen from '../screens/AddTripScreen'
import PopularScreen from '../screens/PopularScreen'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

const TabNavigator = observer(({ navigation, route }) => {
  const { userStore } = useStores()

  // const IoniconsHeaderButton = (props) => (
  //   <HeaderButton
  //     {...props}
  //     IconComponent={Ionicons}
  //     iconSize={30}
  //     color="#9c9c9c"
  //   />
  // )

  navigation.setOptions({ headerTitle: getHeaderTitle(route) })

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        // <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        //   <Item
        //     title="settings"
        //     iconName="md-person"
        //     onPress={() => alert('hej')}
        //   />
        <>
          <OverflowMenu
            style={{ marginHorizontal: 10 }}
            OverflowIcon={
              <Ionicons name="md-person" size={30} color="#9c9c9c" />
            }
          >
            {userStore.loggedInStatus ? (
              <HiddenItem title="Logout" onPress={() => userStore.logout()} />
            ) : (
              <HiddenItem
                title="Login"
                onPress={() => navigation.navigate('Login')}
              />
            )}
          </OverflowMenu>
        </>
        // </HeaderButtons>
      )
    })
  }, [userStore.loggedInStatus])

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      style={{ marginBottom: 5 }}
    >
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
        name="Popular"
        component={PopularScreen}
        options={{
          title: 'Topplista',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-star" />
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
        component={MyTravelsScreen}
        options={{
          title: 'Mina resor',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-airplane" />
          )
        }}
      />
    </BottomTab.Navigator>
  )
})

export default TabNavigator

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

  switch (routeName) {
    case 'Home':
      return 'Sök resa'
    case 'Popular':
      return 'Topplista'
    case 'Add':
      return 'Lägg till resa'
    case 'Links':
      return 'Mina resor'
  }
}
