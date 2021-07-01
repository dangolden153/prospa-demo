import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EmptyCupoard = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#E5E5E5",
          fontWeight: "bold",
          fontSize: 25,
          textAlign: "center",
          marginBottom: 10,
          textTransform: "capitalize",
        }}
      >
        your cupboard is empty
      </Text>

      <Text
        style={{
          color: "#dddddd",
          fontSize: 18,
          textAlign: "center",
        }}
      >
        you can add some food into your cupboard by going to the kitchen
      </Text>
    </View>
  );
};

export default EmptyCupoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
