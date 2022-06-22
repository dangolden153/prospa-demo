import { FlatList, StyleSheet, View } from "react-native";
import TransactionHistoryItem from "./TransactionHistoryItem";
import React from "react";
import Plane from "../assets/svg/plane-round.svg";
import Mobile from "../assets/svg/mobile-round.svg";
// import Icon from '../assets/svg/invoice.svg'
import Invioce from "../assets/svg/invoice-round.svg";
import User from "../assets/svg/user.svg";
import { color } from "./Colors";
import SmallText from "./Text/SmallText";

const TransactionHistory = () => {
  const transactionData = [
    {
      id: "1",
      title: "British Airways",
      subTitle: "Travel",
      icon: Plane,
      amount: "500.00",
      textColor: "green",
      subTItleColor: color.secondary,
      navigate:"details"
    },
    {
      id: "2",
      title: "MTN Mobile",
      subTitle: "Utility",
      icon: Mobile,
      amount: "250.79",
      textColor: "black",
      subTItleColor: color.tertiary,
      navigate:"details"

    },
    {
      id: "3",
      title: "Invioce #0044",
      subTitle: "Sales",
      icon: Invioce,
      amount: "10,50.00",
      textColor: "green",
      subTItleColor: color.tertiary,
      navigate:"details"

    },
    {
      id: "4",
      title: "Christaina Rose",
      subTitle: "Salary",
      icon: User,
      amount: "250,000.00",
      textColor: "black",
      subTItleColor: color.blue,
      navigate:"details"

    },
  ];
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20 ,marginTop:20}}>
        <SmallText gray bold uppercase>
          wed, 3 july
        </SmallText>
      </View>
      <FlatList
        data={transactionData}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <TransactionHistoryItem item={item} />}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        contentContainerStyle={{
          bottom: 0,
          position: "absolute",
          width: "100%",
          backgroundColor: color.white,
        }}
      />
    </View>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.darkGray,
    flex: 1,
    justifyContent: "flex-end",
  },
  seperator: {
    backgroundColor: "gray",
    height: 1,
    width: "85%",
    alignSelf: "flex-end",
  },
});
