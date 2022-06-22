import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Card from "../../assets/svg/card.svg";
import { LinearGradient } from "expo-linear-gradient";
import { color } from "../Colors";

const AdContent = () => {
  return (
    <TouchableOpacity activeOpacity={.8} style={styles.cardContainer}>
      <LinearGradient
        colors={[color.secondary, color.tertiary]}
        start={[0.0, 0.5]}
        end={[1.0, 0.5]}
        locations={[0.0, 1.0]}
        style={styles.gradient}
      >
        <Card />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default AdContent;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop:15

  },
  gradient:{
    elevation: 10,
    borderRadius: 5,
  }
});
