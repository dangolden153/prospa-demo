import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Divider, SearchBar } from "react-native-elements";
import { Image } from "react-native-elements/dist/image/Image";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { BtnText } from "../components/Button";
import { useDispatch, useSelector } from "react-redux";

const mealData = [
  {
    id: 1,
    mealName: "Salad",
    description: "react native elements dist image",
    img: require("../images/food_1.jpg"),
  },
  {
    id: 2,
    mealName: "Fried rice",
    description: "react native elements dist image",
    img: require("../images/food_2.jpg"),
  },
  {
    id: 3,
    mealName: "Vegetable",
    description: "react native elements dist image",
    img: require("../images/food_3.jpg"),
  },
  {
    id: 4,
    mealName: "Bread",
    description: "react native elements dist image",
    img: require("../images/food_4.jpg"),
  },
  {
    id: 5,
    mealName: "Fried rice",
    description: "react native elements dist image",
    img: require("../images/food_5.jpg"),
  },
  {
    id: 6,
    mealName: "Vegetable",
    description: "react native elements dist image",
    img: require("../images/food_6.jpg"),
  },
  {
    id: 7,
    mealName: "Bread",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollit quisquam ipsa itaque, quas posLorem ipsum dolor sit, amet consectetur adipisicing elit. Mollit quisquam ipsa itaque, quas posLorem ipsum dolor sit, amet consectetur adipisicing elit. Mollit quisquam ipsa itaque, quas possimus voluptates? Vitae facilis omnisin, distinctio iusto ex dolor nostrum modi totam temporibus ut quosipsam facere natus beatae amet officia odio aliquid, est pariaturasperiores? Quasi corporis molestiae doloribus explicabo vitaeprovident autem suscipit nisi.",
    img: require("../images/food_1.jpg"),
  },
];

const Menu = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [searchBAar, setSearchBar] = useState(false);

  const openSearchBAar = () => setSearchBar(true);
  const closeSearchBAar = () => setSearchBar(false);
  const { cupboard } = useSelector((state) => state);
  console.log(cupboard);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#F64B29" },
      headerTitleStyle: { color: "white" },
      headerTintColor: "white",
      title: "Breakfast Menu",
      headerRight: () => (
        <View
          style={{
            width: 100,
            paddingRight: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <Ionicons
              onPress={openSearchBAar}
              name="search"
              size={30}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5}>
            <Ionicons
              onPress={() => navigation.navigate("cupboard")}
              name="menu"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  ////// data been rendered by an array

  const renderMealMenu = (item) => {
    const { img, mealName, description, id } = item;
    return (
      <View>
        <ScrollView contentContainerStyle={styles.menuStyle}>
          <Image
            source={img}
            style={{ height: 80, width: 80, borderRadius: 20 }}
          />
          <View style={styles.right_flex}>
            <Text style={{ color: "white", fontSize: 20 }}>{mealName}</Text>
            <Text
              numberOfLines={1}
              style={{ color: "white", fontSize: 16, width: 230 }}
            >
              {description}
            </Text>

            <View style={styles.iconBtn}>
              <Ionicons name="heart-outline" size={30} color="white" />
              {/* <BtnText
                title="kitchen"
                navigation="Details"
                // onPress={() => navigation.navigate("Details")}
              /> */}
              <Button
                title="kitchen"
                containerStyle={styles.btnText}
                onPress={
                  () =>
                    navigation.navigate("Details", {
                      item,
                    })
                  //   dispatch({ type: "CUPBOARD", payload: item })
                }
              />
            </View>
          </View>
        </ScrollView>
        <Divider style={{ marginVertical: 10 }} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {searchBAar ? (
        <View style={styles.inputContainer}>
          <TouchableOpacity activeOpacity={0.5}>
            <Ionicons
              onPress={closeSearchBAar}
              name="close"
              size={30}
              color="white"
            />
          </TouchableOpacity>

          <TextInput
            type="text"
            placeholder="Search"
            value={search}
            onChange={(text) => setSearch(text)}
            style={styles.input}
            placeholderTextColor={"grey"}
          />
        </View>
      ) : null}

      <FlatList
        style={{ padding: 20 }}
        data={mealData}
        renderItem={({ item }) => {
          return renderMealMenu(item);
        }}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A21",
    // alignItems:"center",
    // justifyContent:"center",
    // width:"100%",
  },
  menuStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },

  right_flex: {},

  iconBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  btn: {
    color: "#F64B29",
    borderColor: "#F64B29",
  },
  inputContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 17,
    marginLeft: 15,
  },

  btnText: {
    borderWidth: 1,
    borderColor: "#F64B29",
    padding: 10,
    borderRadius: 10,
  },
});
