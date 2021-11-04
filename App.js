import { StatusBar } from "expo-status-bar";
import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./reducer/store";
import HomePage from "./Screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "./Screens/MapScreen";
import { Platform } from "react-native";
export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen
                name="homeScreen"
                component={HomePage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

/// work on adding env file and pass it throught the app
// check the styling of the destination input field ..../
// work on the splash car transparency .../
/// ............... the cars transparency
