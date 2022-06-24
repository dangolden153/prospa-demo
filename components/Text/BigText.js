import { View, Text } from "react-native";
import React from "react";
import { color } from "../Colors";

const BigText = ({
  children,
  primary,
  secondary,
  center,
  accent,
  white,
  darkGray,
  lightBlack,
  fontSize,
  marginHorizontal,
  marginVertical,
}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: fontSize || 24,
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
            : lightBlack
            ? color.lightBlack
            : "black",
          letterSpacing: 0.5,
          textAlign: center && "center",
          marginHorizontal: marginHorizontal ? marginHorizontal : 0,
          marginVertical: marginVertical ? marginVertical : 0,
        }}
      >
        {children}
      </Text>
    </View>
  );
};

export default BigText;
