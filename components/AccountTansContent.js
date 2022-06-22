import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Transfer from "../assets/svg/transfer.svg";
import SmallText from "./Text/SmallText";
import { color } from "./Colors";
import Pay from '../assets/svg/pay.svg'
import Card from '../assets/svg/card-icon.svg'
import TransactionInsight from "./TransactionInsight";


const AccountTansContent = () => {
  return (
    <View style={{padding:20,}}>
      <View style={styles.svgContainer}>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity activeOpacity={0.5} style={styles.background}>
            <Transfer />
          </TouchableOpacity>
          <SmallText marginVertical={3} bold>
            Transfer
          </SmallText>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity activeOpacity={0.5} style={styles.background}>
            <Pay />
          </TouchableOpacity>
          <SmallText marginVertical={3} bold>
            Pay
          </SmallText>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity activeOpacity={0.5} style={styles.background}>
            <Card />
          </TouchableOpacity>
          <SmallText marginVertical={3} bold>
            Card
          </SmallText>
        </View>
      </View>


      {/* ********transaction card insight ***** */}
      <TransactionInsight />
    </View>
  );
};

export default AccountTansContent;

const styles = StyleSheet.create({
  background: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: color.darkGray,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  svgContainer: {
    padding:10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
