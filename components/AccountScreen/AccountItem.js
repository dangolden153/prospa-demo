import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";
import BigText from "../Text/BigText";
import Wallet from "../../assets/svg/wallet-round.svg";
import Saving from "../../assets/svg/savings-round.svg";
import Tax from "../../assets/svg/tax-round.svg";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { color } from "react-native-reanimated";
const AccountItem = ({
  wallet,
  saving,
  tax,
  title,
  time,
  amount,
  navigate,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.accountContainer}
      onPress={() => navigation.navigate(navigate, { time })}
    >
      <View style={styles.textcontainer}>
        <RegularText uppercase gray>
          {title}
        </RegularText>
        <SmallText marginVertical={2} textGray>
          {time}
        </SmallText>
        <View style={{ left: -5 }}>
          <BigText lightBlack>
            <MaterialCommunityIcons
              name="currency-ngn"
              size={24}
              color={color.lightBlack}
            />
            {amount}
          </BigText>
        </View>
      </View>
      {wallet && <Wallet />}
      {saving && <Saving />}
      {tax && <Tax />}
    </TouchableOpacity>
  );
};

export default AccountItem;

const styles = StyleSheet.create({
  accountContainer: {
    backgroundColor: "#ffff",
    borderRadius: 5,
    elevation: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 7,
  },
  textcontainer: {},
});
