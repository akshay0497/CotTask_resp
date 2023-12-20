import { View, Text } from 'react-native'
import React from 'react'
import DataCompo from './src/DataCompo'
import Login from './src/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddData from './src/AddData';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <View>
    //   {/* <DataCompo/> */}
    //   <Login/>
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            // headerShown:false,
            title: 'Login', 
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="DataCompo"
          component={DataCompo}
          options={{
            title: 'API Data', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="AddData"
          component={AddData}
          options={{
            title: 'Add Data', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        </Stack.Navigator>
        </NavigationContainer>
  )
}

export default App