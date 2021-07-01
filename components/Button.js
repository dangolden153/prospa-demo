import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Btn = (props) => {
  const { title, onPress } = props;
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Ionicons name="cart-outline" size={26} color="white" />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export const BtnOutline = (props) => {
  const { title, onPress } = props;
  return (
    <Pressable style={styles.btnOutline} onPress={onPress}>
      <Ionicons name="heart-outline" size={26} color="black" />
    </Pressable>
  );
};

export const BtnText = ({ navigation }) => {
  return (
    <Pressable style={styles.btnText}>
      <Text
        onPress={() => navigation.navigate("Details")}
        style={styles.textBtn}
      >
        kitchen
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#F64B29",
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 10,
    elevation: 3,
    flex: 0.7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    paddingLeft: 10,
  },

  textBtn: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "#F64B29",
    paddingLeft: 10,
  },
  btnOutline: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 10,
  },

  btnText: {
    borderWidth: 1,
    borderColor: "#F64B29",
    padding: 10,
    borderRadius: 10,
  },
});
