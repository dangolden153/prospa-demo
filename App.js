import { StatusBar } from "expo-status-bar";
import React from "react";
import { KeyboardAvoidingView, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";
import MyTabs from "./Screens/ButtomTabScreen";
import CreateAccount from "./Screens/CreateAccount/CreateAccount";
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";
import TransactionDetails from "./Screens/TransactionDetails/TransactionDetails";

export default function App() {
  const Stack = createStackNavigator();


  const config = {
    // animation: "spring",
    config: {
      stiffness: 500,
      damping: 50,
      mass: 3,
      overShootingClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  const closeConfig = {
    animation: "timing",
    config: {
      // duration: 500,
      // easing: Easing.linear,
    },
  };
  return (
      <NavigationContainer >
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <Stack.Navigator 
            // initialRouteName="details"
            screenOptions={{
              gestureEnabled: true,
              gestureDirection: "horizontal",
              transitionSpec: {
                open: config,
                close: closeConfig,
              },
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}


            >
            <Stack.Screen name="bottomTab" options={{headerShown:false}} component={MyTabs}  />
            <Stack.Screen name="account" options={{headerShown:false}} component={CreateAccount}  />
            <Stack.Screen name="details" options={{headerShown:false}} component={TransactionDetails}  />
            
            
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
  );
}

