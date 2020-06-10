import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { HiddenItem, OverflowMenu } from 'react-navigation-header-buttons'

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

  navigation.setOptions({ headerTitle: getHeaderTitle(route) })

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <>
          <OverflowMenu
            style={{ marginHorizontal: 10 }}
            OverflowIcon={
              userStore.loggedInStatus ? (
                <MaterialCommunityIcons
                  name="logout"
                  size={28}
                  color="#05294b"
                />
              ) : (
                <MaterialCommunityIcons
                  name="login"
                  size={28}
                  color="#05294b"
                />
              )
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
      )
    })
  }, [userStore.loggedInStatus])

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      style={{ marginBottom: 5 }}
      tabBarOptions={{
        activeTintColor: '#05294b',
        inactiveTintColor: '#ccc',
        showLabel: true
      }}
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

      {userStore.loggedInStatus && (
        <>
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
        </>
      )}
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
