import { StatusBar } from "expo-status-bar";
import React, { createContext, useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Context } from "./context";
import { Provider } from "react-redux";
import { createStore } from "redux";
import foodReducer from "./reducer/foodReducer/FoodReducer";

import Sign_up from "./Screens/Sign_up";
import Sign_in from "./Screens/Sign_in";
import CountryList from "./Screens/countryList";
import Meal from "./Screens/Meal";
import Menu from "./Screens/Menu";
import FoodDetail from "./Screens/foodDetail";
import Profile from "./Screens/Profile";
import Popular from "./Screens/PopularFood";
import ForgotPassword from "./Screens/ForgotPassword";
import Cupboard from "./Screens/Cupboard";

const store = createStore(foodReducer);

const Stack = createStackNavigator();

export default function App() {
  const [state, setState] = useState(1);

  return (
    <Provider store={store}>
      <Context.Provider value={{ setState, state }}>
        <NavigationContainer>
          <Stack.Navigator
            // initialRouteName="cupboard"
            screenOptions={{ headerTitleAlign: "center" }}
          >
            {/* <Stack.Screen name="signup" component={Sign_up} />
            <Stack.Screen name="signin" component={Sign_in} />
            <Stack.Screen name="forgotPassword" component={ForgotPassword} />

            <Stack.Screen name="country-list" component={CountryList} />
            <Stack.Screen name="meal" component={Meal} /> */}
            <Stack.Screen name="menu" component={Menu} />
            <Stack.Screen name="cupboard" component={Cupboard} />
            <Stack.Screen name="Details" component={FoodDetail} />

            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Popular" component={Popular} />
          </Stack.Navigator>
        </NavigationContainer>
      </Context.Provider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// builds that remain

// redux done _/
// Screens
// popular Meals  _/
// forgot Password _/
// cupboard  _/
// login
// description

// Component
// shotening the text  _/
// no post on the profile screen _/
// no favourite recipes _/
// search
// add to cupboard functionality

//check how to style textInput color on stackoverflow
