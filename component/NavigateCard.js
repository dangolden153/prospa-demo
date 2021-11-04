import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "@env";
import { setDestination } from "../reducer/navSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import NavFavourite from "./NavFavourite";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>How are you, Dangolden! </Text>
      <View>
        <View style={tw`border-t border-gray-200 flex-shrink`}>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={toInputBoxStyles}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            fetchDetails={true}
            onFail={(error) => console.error(error)}
            minLength={2}
            enablePoweredByContainer={false}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            query={{
              key: "AIzaSyBdmp34MfNFzBgkUOYzHwbfG5XGCq0q8tU",
              language: "en",
            }}
          />
        </View>

        <NavFavourite />
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-200`}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("RideOptionsCard")}
          style={tw`flex flex-row rounded-full bg-black py-3 px-4 justify-between w-24`}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-center text-white`}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex flex-row py-3 px-4 justify-between w-24`}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text style={tw`text-center `}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },

  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 16,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
