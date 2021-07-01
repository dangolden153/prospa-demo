import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";

const EmptyPost = () => {
  return (
    <View style={{ backgroundColor: "#ffff" }} style={styles.foodContainer}>
      <Text style={{ color: "#3F3F3F", fontSize: 19, marginBottom: 10 }}>
        No post uploaded yet
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
          Add Post
        </Text>
        <AntDesign
          name="pluscircleo"
          // type={}
          size={25}
          color="black"
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default EmptyPost;

const styles = StyleSheet.create({
  foodContainer: {
    flexGrow: 0.3,
    backgroundColor: "#ffff",
    margin: 30,
    // height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
