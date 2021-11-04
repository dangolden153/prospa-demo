import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import pics from "../images/uber.png";
import Navoptions from "../component/Navoptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "@env";
import { useDispatch, useSelector } from "react-redux";
import { setOrigin, setDestination, selectOrigin } from "../reducer/navSlice";
import NavFavourite from "../component/NavFavourite";

const HomePage = () => {
  const dispatch = useDispatch();
  // console.log(origins);
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={pics}
          style={{ height: 100, width: 100, resizeMode: "contain" }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          returnKeyType="search"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 16,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry?.location,
                description: data?.description,
              })
            );

            setDestination(null);
          }}
          enablePoweredByContainer={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          minLength={2}
          fetchDetails={true}
          query={{
            key: "AIzaSyBdmp34MfNFzBgkUOYzHwbfG5XGCq0q8tU", ///AIzaSyDHchab5M0w3HWur0vLNCGhzMZGvomzWIs
            language: "en",
          }}
        />

        <Navoptions />
      </View>

      <NavFavourite />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
