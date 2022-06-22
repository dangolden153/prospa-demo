import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import BigText from "../../components/Text/BigText";
import { color } from "../../components/Colors";
import NavBar from "../../components/NavBar";
import AccountTansContent from "../../components/AccountTansContent";
import Swiper from "react-native-swiper";
import TransactionHistory from "../../components/TransactionHistory";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CreateAccount = ({ route }) => {
  const { time } = route?.params;
  // console.log('time', time)
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavBar
        title="Create Account"
        time={time}
        color={color.secondary}
        background={color.primary}
      />
      <View style={styles.accountContainer}>
        <View style={styles.child}>
          <Swiper
            activeDotColor={color?.secondary}
            dotColor={`${color?.secondary}60`}
            style={styles.wrapper}
          >
            <View style={styles.slide1}>
              <BigText white>
                <MaterialCommunityIcons
                  name="currency-ngn"
                  size={24}
                  color={color.white}
                />
                5,234.96
              </BigText>
            </View>
            <View style={styles.slide1}>
              <BigText white>
                <MaterialCommunityIcons
                  name="currency-ngn"
                  size={24}
                  color={color.white}
                />
                5,234.96
              </BigText>
            </View>
            <View style={styles.slide1}>
              <BigText white>
                <MaterialCommunityIcons
                  name="currency-ngn"
                  size={24}
                  color={color.white}
                />
                5,234.96
              </BigText>
            </View>
          </Swiper>
        </View>
      </View>

      {/* *******create account content ******** */}
      <AccountTansContent />

      {/* ***** transaction history **** */}
      <TransactionHistory />
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  accountContainer: {
    height: 140,
    backgroundColor: color.primary,
    // paddingTop: 15,
    paddingHorizontal: 20,
    transform: [{ scaleX: 2 }],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    zIndex: -1,
  },

  child: {
    flex: 1,
    transform: [{ scaleX: 0.5 }],
    alignItems: "center",
  },

  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#9DD6EB'
    marginBottom: 40,
  },
});
