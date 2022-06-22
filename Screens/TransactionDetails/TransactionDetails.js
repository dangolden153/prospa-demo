import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { color } from "../../components/Colors";
import NavBar from "../../components/NavBar";
import { FontAwesome } from "@expo/vector-icons";
import SmallText from "../../components/Text/SmallText";
import BigText from "../../components/Text/BigText";
import MobileContenList from "../../components/MobileContenList";
import UserHistory from "../../components/UserHistory";
import RegularText from "../../components/Text/RegularText";
import PaymentRepeat from "../../components/PaymentRepeat";

const TransactionDetails = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavBar title="" time="" color={color.white} background={color.accent} />
      <View style={styles.accountContainer}></View>
      <View
        style={{
          paddingHorizontal: 20,
          backgroundColor: color.white,
        }}
      >
        <TouchableOpacity activeOpacity={0.5} style={styles.background}>
          <FontAwesome name="mobile" size={40} color={color.accent} />
        </TouchableOpacity>

        {/* date  */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // paddingHorizontal: 20,
          }}
        >
          <SmallText bold gray uppercase>
            5, july 2019
          </SmallText>
          <SmallText bold gray uppercase marginHorizontal={10}>
            10:30 am
          </SmallText>
        </View>

        {/* title  */}
        <View style={{ marginVertical: 10 }}>
          <BigText fontSize={20}>MTN Mobile</BigText>
        </View>
      </View>
      {/* list  */}
      <MobileContenList />

      {/* ******user history ******** */}
      <View
        style={{
          marginVertical: 10,
          paddingHorizontal: 20,
        }}
      >
        <RegularText gray uppercase bold>
          User history
        </RegularText>
      </View>
      <UserHistory />

      {/* subscriptions  */}
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: color.darkGray,
        }}
      >
        <RegularText gray uppercase bold>
          subscription
        </RegularText>
      </View>

      <PaymentRepeat />
    </View>
  );
};

export default TransactionDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.darkGray,
  },
  accountContainer: {
    height: 50,
    backgroundColor: color.accent,
  },

  background: {
    height: 60,
    width: 60,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    top: -30,
    left: 20,
    backgroundColor: color.white,
  },
});
