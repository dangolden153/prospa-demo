import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { color } from "../Colors";

const RegularText = ({
  children,
  white,
  primary,
  secondary,
  accent,
  darkGray,
  gray,
  uppercase,
  lightGray,
  green,
  capitalize,
  bold,
  marginVertical,
  marginHorizontal,
}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 15,
          color: primary
            ? color.primary
            : secondary
            ? color.secondary
            : white
            ? color.white
            : accent
            ? color.accent
            : darkGray
            ? color.darkGray
            : lightGray
            ? color.lightGray
            : gray
            ? color.gray
            : green
            ? color.green
            : "black",
          textTransform: uppercase ? "uppercase" : null,
          fontWeight: bold ? "bold" : null,
          marginVertical: marginVertical ? marginVertical : 0,
          marginHorizontal: marginHorizontal ? marginHorizontal : 0,
        }}
      >
        {children}
      </Text>
    </View>
  );
};

export default RegularText;

const styles = StyleSheet.create({});
