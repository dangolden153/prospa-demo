import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../component/Map";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../component/NavigateCard";
import RideOptionsCard from "../component/RideOptionsCard";

const MapScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View style={[tw`flex-1 bg-white`, { backgroundColor: "white" }]}>
      <View style={tw`h-1/2 `}>
        <Map />
      </View>

      <View style={tw`h-1/2 bg-white `}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
