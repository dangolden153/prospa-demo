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
// import {} from ''

const HomePage = () => {
  const dispatch = useDispatch();
  const origins = useSelector(selectOrigin);
  console.log(origins);
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
          query={{
            key: "AIzaSyBdmp34MfNFzBgkUOYzHwbfG5XGCq0q8tU", ///AIzaSyDHchab5M0w3HWur0vLNCGhzMZGvomzWIs
            language: "en",
          }}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            console.log(data, details);

            // setDestination(null);
          }}
          fetchDetails={true}
          // minLength={2}
          // enablePoweredByContainer={false}

          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />

        <Navoptions />
      </View>

      <NavFavourite />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
