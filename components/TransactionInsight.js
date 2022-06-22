import { StyleSheet, View,TouchableOpacity } from "react-native";
import React from "react";
import SmallText from "./Text/SmallText";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { color } from "./Colors";
import RegularText from "./Text/RegularText";


const TransactionInsight = () => {
  return (
    <TouchableOpacity activeOpacity={0.5}  style={styles.container}>
      {/* top section  */}
      <View style={styles.text_icon}>
        <SmallText center>last 30 days </SmallText>
        <AntDesign name="right" size={20} color={color.primary} />
      </View>

      {/* down section  */}
      <View style={styles.downSectin}>
        {/* amount in money  */}
        <View style={styles.textContainer}>
          <RegularText green>
            <MaterialCommunityIcons
              name="currency-ngn"
              size={14}
              color="green"
            />
            5,250.00
          </RegularText>
          <SmallText darkGray bold>
            Money in
          </SmallText>
        </View>

        {/* graph transaction  */}

        <View style={styles.graph}>
          <View style={[styles.bar, { backgroundColor: "green" }]} />
          <View style={[styles.bar, { backgroundColor: "gray", height: 60 }]} />
        </View>

        {/* amount out money  */}

        <View style={styles.textContainer}>
          <RegularText gray>
            <MaterialCommunityIcons
              name="currency-ngn"
              size={14}
              color="gray"
            />
            2,250.96
          </RegularText>
          <SmallText darkGray bold>
            Money out
          </SmallText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionInsight;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    elevation: 10,
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
  },
  text_icon: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    alignItems: "center",
  },
  downSectin: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 15,
  },
  textContainer: {
    alignItems: "center",
  },
  graph: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  bar: {
    width: 10,
    height: 40,
    marginHorizontal: 5,
  },
});
