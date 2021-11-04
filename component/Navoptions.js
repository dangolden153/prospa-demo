import React from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { selectOrigin } from "../reducer/navSlice";
import { useSelector } from "react-redux";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image: "https://links.papareact.com/28w",

    screen: "EatScreen",
  },
];

const Navoptions = () => {
  const origin = useSelector(selectOrigin);

  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item: { image, screen, title } }) => {
        return (
          <TouchableOpacity
            style={tw`p-2 pl-6 pb-8 bg-gray-200 m-2 w-40`}
            onPress={() => navigation.navigate(screen)}
            // disabled={!origin}
          >
            <View style={tw`${!origin && "opacity-20"} `}>
              <Image
                source={{ uri: image }}
                style={{ height: 120, width: 120, resizeMode: "contain" }}
              />
              <Text style={tw`m-2 text-lg font-semibold`}>{title}</Text>
              <Icon
                style={tw`p-2 rounded-full bg-black w-10 mt-4`}
                name="arrowright"
                color="white"
                type="antdesign"
              />
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Navoptions;

const styles = StyleSheet.create({});
