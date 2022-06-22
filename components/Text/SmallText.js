import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { color } from "../Colors";
const SmallText = ({
  children,
  white,
  primary,
  secondary,
  accent,
  darkGray,
  uppercase,
  lightGray,
  textGray,
  gray,
  capitalize,
  bold,
  marginVertical,
  marginHorizontal,
  center,
}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 12,
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
            : textGray
            ? color.textGray
            : "black",
          textAlign: center && "center",
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

export default SmallText;

const styles = StyleSheet.create({});
