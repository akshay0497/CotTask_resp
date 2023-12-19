import { View, Text } from 'react-native'
import React from 'react'
import DataCompo from './src/DataCompo'
import Login from './src/Login'

const App = () => {
  return (
    <View>
      <DataCompo/>
      <Login/>
    </View>
  )
}

export default App