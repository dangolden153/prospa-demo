import { StatusBar } from 'expo-status-bar';
import React,{createContext, useContext, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Context}  from './context'

import Sign_up from './Screens/Sign_up'
import Sign_in from './Screens/Sign_in'
import CountryList from './Screens/countryList'
import Meal from './Screens/Meal'
import Menu from './Screens/Menu'
import FoodDetail from './Screens/foodDetail'

const Stack = createStackNavigator()


export default function App() {
  const [state, setState] = useState(1)

  return (
    <Context.Provider value={{setState, state}}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: "center"}} >
      <Stack.Screen name="signup" component={Sign_up}/>    
      <Stack.Screen name="signin" component={Sign_in}/>    
      <Stack.Screen name="country-list" component={CountryList}/>    
      <Stack.Screen  name="meal" component={Meal}/> 
      <Stack.Screen name ="menu" component={Menu} />
      <Stack.Screen name ="food details" component={FoodDetail} />
      
      </Stack.Navigator>
    </NavigationContainer>
    </Context.Provider>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
