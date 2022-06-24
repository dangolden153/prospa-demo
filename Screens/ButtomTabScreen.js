import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../components/AccountScreen/AccountScreen";
import InvoiceScreen from "../components/InvoiceScreen";
import {
  AntDesign,
  Foundation,
  SimpleLineIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import AccountSvg from "../assets/svg/wallet.svg";
import { Image, StyleSheet, View } from "react-native";
import SmallText from "../components/Text/SmallText";
import Pay from "../components/Pay";
import Summary from "../components/Summary";
import { color } from "../components/Colors";
import { StatusBar } from "expo-status-bar";
import HeaderLeftNav from "../components/AccountScreen/HeaderLeftNav";
import HeaderRightNav from "../components/AccountScreen/HeaderRightNav";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />

      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            alignItems: "center",
            justifyContent: "space-between",
            height: 60,
            elevation: 0,
          },
        }}
      >
        <Tab.Screen
          name="Accounts"
          options={{
            title: "",
            headerStyle: { backgroundColor: color.primary, elevation: 0 },
            headerLeft: () => <HeaderLeftNav />,
            headerRight: () => <HeaderRightNav />,
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabBarIcon}>
                {focused ? (
                  <AccountSvg />
                ) : (
                  <AntDesign name="wallet" size={20} color={color.gray} />
                )}
                {focused ? (
                  <SmallText secondary>Accounts</SmallText>
                ) : (
                  <SmallText gray>Accounts</SmallText>
                )}
              </View>
            ),
          }}
          component={AccountScreen}
        />

        {/* **********invoice*************** */}
        <Tab.Screen
          name="Invoice"
          options={{
            headerStyle: { backgroundColor: "white", elevation: 0 },
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabBarIcon}>
                <FontAwesome5
                  name="file-invoice"
                  size={20}
                  color={focused ? color.secondary : color.gray}
                />
                {focused ? (
                  <SmallText secondary>Invoice</SmallText>
                ) : (
                  <SmallText gray>Invoice</SmallText>
                )}
              </View>
            ),
          }}
          component={InvoiceScreen}
        />

        {/* **********Pay*************** */}
        <Tab.Screen
          name="pay"
          options={{
            headerStyle: { backgroundColor: "white", elevation: 0 },
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabBarIcon}>
                <SimpleLineIcons
                  name="paypal"
                  size={20}
                  color={focused ? color.secondary : color.gray}
                />
                {focused ? (
                  <SmallText secondary>Pay</SmallText>
                ) : (
                  <SmallText gray>Pay</SmallText>
                )}
              </View>
            ),
          }}
          component={Pay}
        />

        {/* **********Summary*************** */}
        <Tab.Screen
          name="summary"
          options={{
            headerStyle: { backgroundColor: "white", elevation: 0 },
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabBarIcon}>
                <Foundation
                  name="graph-pie"
                  size={24}
                  color={focused ? color.secondary : color.gray}
                />
                {focused ? (
                  <SmallText secondary>Summary</SmallText>
                ) : (
                  <SmallText gray>Summary</SmallText>
                )}
              </View>
            ),
          }}
          component={Summary}
        />
      </Tab.Navigator>

      {/* **********More*************** */}
      <Tab.Screen
        name="more"
        options={{
          headerStyle: { backgroundColor: "white", elevation: 0 },
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Foundation
                name="indent-more"
                size={20}
                color={focused ? color.secondary : color.gray}
              />
              {focused ? (
                <SmallText secondary>More</SmallText>
              ) : (
                <SmallText gray>More</SmallText>
              )}
            </View>
          ),
        }}
        component={Summary}
      />
    </View>
  );
}
export default MyTabs;

const styles = StyleSheet.create({
  tabBarIcon: {
    alignItems: "center",
  },
  text: {},
});
