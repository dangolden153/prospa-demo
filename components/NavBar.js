import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { color } from "./Colors";
import { Ionicons } from "@expo/vector-icons";
import RegularText from "./Text/RegularText";
import SmallText from "./Text/SmallText";
import { useNavigation } from "@react-navigation/native";

const NavBar = ({ title, time, background, color }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color={color} />
      </TouchableOpacity>
      {title ? (
        <View style={{ alignItems: "center" }}>
          <RegularText bold white>
            {title}
          </RegularText>
          <SmallText darkGray>{time}</SmallText>
        </View>
      ) : null}
      <TouchableOpacity activeOpacity={0.5}>
        <Text style={{ color: color }}>Options</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width:"100%",
    zIndex: -1,
  },
});
