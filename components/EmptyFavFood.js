import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";

const EmptyFavFood = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#3F3F3F", fontSize: 19, marginBottom: 10 }}>
        can't find any favourite food
      </Text>

      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text h2 style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>
          Explore
        </Text>
        <AntDesign
          name="right"
          size={25}
          color="black"
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default EmptyFavFood;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    margin: 30,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});
