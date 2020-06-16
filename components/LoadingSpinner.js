import * as React from 'react'
import { View, ActivityIndicator } from 'react-native'

const LoadingSpinner = () => {
  return (
    <View>
      <ActivityIndicator style={{ marginTop: 100 }} size="large" color="#fff" />
    </View>
  )
}

export default LoadingSpinner
