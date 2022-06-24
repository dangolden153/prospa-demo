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

  return (
    <NavigationContainer>
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
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              presentation: "transparentModal",
            }}
          >
            <Stack.Screen
              name="bottomTab"
              options={{ headerShown: false }}
              component={MyTabs}
            />
            <Stack.Screen
              name="account"
              options={{ headerShown: false }}
              component={CreateAccount}
            />
            <Stack.Screen
              name="details"
              options={{
                headerShown: false,
                ...TransitionPresets.ModalSlideFromBottomIOS,
              }}
              component={TransactionDetails}
            />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
