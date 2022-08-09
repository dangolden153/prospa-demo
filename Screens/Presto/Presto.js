import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import axios from "axios";

const Presto = () => {
 
  return (
    <View style={styles.container}>
      <Text>Presto</Text>
    </View>
  );
};

export default Presto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
