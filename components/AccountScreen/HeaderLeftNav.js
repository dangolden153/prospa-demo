import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { color } from "../Colors";

const HeaderLeftNav = () => {
  return (
    <TouchableOpacity style={{ marginTop: 15, marginLeft: 15 }}>
      <AntDesign name="infocirlceo" size={24} color={color.secondary} />
    </TouchableOpacity>
  );
};

export default HeaderLeftNav;

const styles = StyleSheet.create({});
