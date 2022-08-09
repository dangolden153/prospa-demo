import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { color } from "../Colors";
import SmallText from "../Text/SmallText";
import BigText from "../Text/BigText";
import { StatusBar } from "expo-status-bar";
import AccountItem from "./AccountItem";
import AdContent from "./AdContent";
import { Multiply } from "react-native-com-address";

const AccountScreen = () => {
  const [openSDK, setOpenSDK] = useState(false);

  const handleOpen = () => {
    setOpenSDK(true);
  };

  const handleClose = () => {
    setOpenSDK(false);
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="light" />

        <View style={styles.greetingContainer}>
          <View style={styles.child}>
            <SmallText uppercase darkGray textStyle={{ marginTop: 10 }}>
              thursday, 18 june
            </SmallText>
            <View style={{ marginVertical: 5 }} />
            <BigText white>Welcome back, </BigText>
            <BigText white>Olivia!</BigText>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, top: -70, zIndex: 100 }}>
          <AccountItem
            wallet
            title="prospa current account"
            time="00-00-00 1890847"
            amount="5,234.96"
            navigate="account"
          />
          <AccountItem
            saving
            title="savingaccount"
            time="00-00-00 1890847"
            amount="3,234.43"
            navigate="presto"
          />
          <AccountItem
            tax
            title="tax account"
            time="00-00-00 1890847"
            amount="10,234.00"
            navigate="notification"
          />

          <AdContent handleOpen={handleOpen} />
        </View>
      </View>

      <Multiply
        onClose={handleClose}
        onOpen={openSDK}
        dataString="hello world!!"
      />
    </>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.darkGray,
  },
  greetingContainer: {
    height: 200,
    backgroundColor: color.primary,
    paddingTop: 15,
    paddingHorizontal: 20,
    transform: [{ scaleX: 2 }],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    zIndex: -1,
  },

  child: {
    flex: 1,
    transform: [{ scaleX: 0.5 }],
  },
});
