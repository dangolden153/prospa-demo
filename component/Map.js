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
  const mapRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, bottom: 50, left: 50, right: 50 },
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    fetch(
      `https://maps.googleaapis.com/map/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(setTimeTraveledinformation(data.rows[0].elements[0]));
      });
  }, [origin, destination, GOOGLE_API_KEY]);
  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1 `}
      initialRegion={{
        latitude: 37.78825, /////latitude: origin.location.lat 37.78825,   longitude:origin.location.lng -122.4324,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {/* {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apiKey={GOOGLE_API_KEY}
          strokeWidth={3}
          stokeColor="black"
        />
      )} */}
      {/* {origin.location && (
          <Marker
            coordinate={{
              latitude: origin.location.lat, /////latitude: 37.78825,   longitude: -122.4324,
              longitude: origin.location.lng,
            }}
            title="Origin"
            description={origin.description}
            identifier="origin"
          />
        )} */}

      {/* {destination.location && (
          <Marker
            coordinate={{
              latitude: destination.location.lat, /////latitude: 37.78825,   longitude: -122.4324,
              longitude: destination.location.lng,
            }}
            title="Destination"
            description={destination.description}
            identifier="destination"
          />
        )} */}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
