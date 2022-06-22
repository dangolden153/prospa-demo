import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { color } from "./Colors";

const UserHistoryItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      //   onPress={() => navigation.navigate(item.navigate)}
    >
      {/* img  */}
      <View style={styles.icon_text}>
        <Ionicons name={item.icon} size={24} color={item.iconColor} />

        {/* title   */}
        <View style={{ alignItems: "flex-start", marginLeft: 20 }}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>

      {/* amount  */}
      <Text style={styles.title}>
        {item.naira && (
          <MaterialCommunityIcons name="currency-ngn" size={16} color="black" />
        )}
        {item.amount}
      </Text>
    </TouchableOpacity>
  );
};

export default UserHistoryItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 13,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // elevation:1
  },
  icon_text: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  subTitle: {
    fontSize: 13,
    fontWeight: "bold",
  },
  amount: {},
});
