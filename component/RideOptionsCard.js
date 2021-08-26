import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import tw from "tailwind-react-native-classnames";
import { selectTimeTraveledInformation } from "../reducer/navSlice";
import { useSelector } from "react-redux";

const data = [
  {
    id: "124",
    title: "UberX",
    multiplier: 1,
    image: `${require("../images/uberT1.jpg")}`,
  },
  {
    id: "244",
    title: "Uber XL",
    multiplier: 1.2,
    image: `${require("../images/uber1.jpg")}`,
  },
  {
    id: "643",
    title: "Uber LUX",
    multiplier: 1.75,
    image: `${require("../images/uberT.jpg")}`,
  },
];

const RideOptionsCard = () => {
  const [selected, setSelected] = useState(null);
  const navigation = useNavigation();
  const travelTimeInformation = useSelector(selectTimeTraveledInformation);
  const PURGE_PRICE = 1.5;
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-2 left-5 p-3 rounded-full z-50`}
        >
          <Icon
            name="chevron-left"
            // color=""
            size={27}
            type="fontawesome"
          />
        </TouchableOpacity>
        <Text style={tw`text-center text-xl py-5`}>
          Select a Ride {travelTimeInformation?.distance.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { title, multiplier, id, image }, item }) => (
          <TouchableOpacity
            style={tw`flex-row items-center justify-between px-10 
            ${id === selected?.id && "bg-gray-200"}`}
            onPress={() => setSelected(item)}
          >
            <Image
              style={{ height: 100, width: 100, resizeMode: "contain" }}
              source={image}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold text-black`}>{title}</Text>
              <Text>
                {/* {travelTimeInformation?.duration.text} */}
                Time traveled...
              </Text>
            </View>
            <Text style={tw`text-xl`}>
              {/* {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "GBP",
              }).format(
                travelTimeInformation?.duration.value * PURGE_PRICE * multiplier
              ) / 100} */}
              $200
            </Text>
          </TouchableOpacity>
        )}
      />

      <View>
        <TouchableOpacity style={tw`m-5 py-3 bg-black`}>
          <Text style={tw`text-white text-xl font-semibold text-center `}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
