import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import { Divider } from "react-native-elements";
import { Image } from "react-native-elements/dist/image/Image";
import { Ionicons } from "@expo/vector-icons";
import { BtnText } from "./Button";
import { mealData } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { foodType } from "../reducer/foodReducer/food_type";
import EmptyFavFood from "./EmptyFavFood";

const Favourite = ({ navigation }) => {
  const { foodRecipes } = useSelector((state) => state);

  // console.log(foodRecipes.length);

  const dispatch = useDispatch();

  const navigateContext = () => {
    navigation.navigate("country-list");
    setState(state - 1);
  };

  const renderMealMenu = (item) => {
    return (
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.menuStyle}
        >
          <Image
            source={item.img}
            style={{ height: 80, width: 80, borderRadius: 20 }}
          />
          <View style={styles.right_flex}>
            <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
              {item.mealName}
            </Text>
            <Text
              numberOfLines={1}
              style={{ color: "#3F3F3F", fontSize: 16, width: 230 }}
            >
              {item.description}
            </Text>

            <View style={styles.iconBtn}>
              <Ionicons name="heart-outline" size={30} color="red" />
              <TouchableOpacity>
                <BtnText
                  title="kitchen"

                  // onPress={() =>
                  //   dispatch({
                  //     type: foodType.FOOD_DATA,
                  //     payload: item,
                  //   })
                  // }
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Divider style={{ marginVertical: 10, backgroundColor: "black" }} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text
        h3
        style={{
          textAlign: "left",
          fontSize: 23,
          fontWeight: "bold",
          marginLeft: 25,
        }}
      >
        Favorite Food
      </Text>
      {foodRecipes.length > 0 ? (
        <FlatList
          style={{ padding: 20, flex: 1 }}
          data={mealData}
          renderItem={({ item }) => {
            return renderMealMenu(item);
          }}
          keyExtractor={(item) => `${item.id}`}
        />
      ) : (
        <EmptyFavFood />
      )}
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
