import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "124",
    icon: "home",
    destination: "Code street, London, UK",
    location: "Home",
  },
  {
    id: "134",
    icon: "briefcase",
    destination: "London eye, London, UK",
    location: "Work",
  },
];
const NavFavourite = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200 `, { height: 1.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 p-3 rounded-full bg-gray-200`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />

          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourite;

const styles = StyleSheet.create({});
