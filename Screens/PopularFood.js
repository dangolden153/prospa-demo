import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import pics from "../images/profile.jpg";
import PopularRecipes from "../components/Popular_recipes";
import PopularFood from "../components/Popular_food";
import { Image } from "react-native-elements/dist/image/Image";

const Popular = ({ navigation }) => {
  const [search, setSearch] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#1A1A21" },
      headerTitleStyle: { color: "white" },
      headerTintColor: "white",
      title: "Pupolar Meal",
      headerRight: () => (
        <View style={{ paddingRight: 15 }}>
          <Ionicons name="menu" size={30} color="white" />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.inputContainer}>
        <TextInput
          type="text"
          placeholder="Search"
          value={search}
          onChangeText={(text) => setSearch(text)}
          style={styles.input}
        />
        <Ionicons name="search" size={30} color="white" />
      </View>
      <View style={styles.photo_fav}>
        <PopularFood />
        <PopularRecipes />
      </View>
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A21",
  },

  photo_fav: {
    flex: 1,
    // backgroundColor: "#C4C4C4",
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
    // height: 100,
  },

  profile: {
    paddingLeft: 20,
    height: 200,
    justifyContent: "center",
  },
  followers_container: {
    flexDirection: "row",
    width: 150,
    justifyContent: "space-between",
    marginBottom: 15,
  },

  inputContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 20,
    marginRight: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    // color: "#C4C4C4 ",
  },
});
