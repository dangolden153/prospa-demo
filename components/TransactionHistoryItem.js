import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TransactionHistoryItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(item.navigate)}
    >
      {/* img  */}
      <View style={styles.icon_text}>
        <item.icon />

        {/* title and subtile  */}
        <View style={{ alignItems: "flex-start", marginLeft: 20 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={[styles.subTitle, , { color: item.subTItleColor }]}>
            {item.subTitle}
          </Text>
        </View>
      </View>

      {/* amount  */}
      <Text style={[styles.title, { color: item.textColor }]}>
        <MaterialCommunityIcons
          name="currency-ngn"
          size={16}
          color={item.textColor}
        />
        {item.amount}
      </Text>
    </TouchableOpacity>
  );
};

export default TransactionHistoryItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 13,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon_text: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 13,
    fontWeight: "bold",
  },
  amount: {},
});
