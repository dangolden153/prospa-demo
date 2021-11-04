import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import MapView, { Marker } from "react-native-maps";
import { useSelector, useDispatch } from "react-redux";
import {
  selectOrigin,
  selectDestination,
  setTimeTraveledinformation,
} from "../reducer/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_API_KEY } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, bottom: 50, left: 50, right: 50 },
    });
  }, [origin, destination]);

  const googleApiKey = "AIzaSyBdmp34MfNFzBgkUOYzHwbfG5XGCq0q8tU";

  useEffect(() => {
    if (!origin || !destination) return;

    const getTravelTime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin?.description}&destinations=${destination?.description}&key=${googleApiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          dispatch(setTimeTraveledinformation(data?.rows[0]?.elements[0]));
        });
    };

    getTravelTime();
  }, [origin, destination, googleApiKey]);
  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1 `}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={googleApiKey}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat, /////latitude: 37.78825,   longitude: -122.4324,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat, /////latitude: 37.78825,   longitude: -122.4324,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});

// `https://maps.googleapis.com/map/api/distancematrix/json?units=imperial&origins=${origin?.description}&destinations=${destination?.description}&key=${googleApiKey}`
