import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import pics from "../images/profile.jpg";
import FoodPhotos from "../components/foodPhotos";
import Favourite from "../components/favouriteFood";
import { Image } from "react-native-elements/dist/image/Image";

const Profile = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#1A1A21" },
      headerTitleStyle: { color: "white" },
      headerTintColor: "white",
      title: "Profile",
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

      <View style={styles.profile}>
        <View style={{ flexDirection: "row" }}>
          <Image
            rounded
            source={pics}
            style={{ height: 150, width: 150, borderRadius: 100 }}
          />

          <View style={{ marginLeft: 40 }}>
            {/* user name */}
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                letterSpacing: 1,
                marginBottom: 9,
              }}
            >
              Dan Golden
            </Text>

            {/* follwers and following */}
            <View style={styles.followers_container}>
              <View>
                <Text style={{ color: "white", fontSize: 19 }}>1234</Text>
                <Text style={{ color: "#E5E5E5", fontSize: 18 }}>follwers</Text>
              </View>

              <View>
                <Text style={{ color: "white", fontSize: 19 }}>432</Text>
                <Text style={{ color: "#E5E5E5", fontSize: 18 }}>
                  following
                </Text>
              </View>
            </View>

            {/* number of post */}
            <View>
              <Text style={{ color: "white", fontSize: 19 }}>300</Text>
              <Text style={{ color: "#E5E5E5", fontSize: 18 }}>Posts</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.photo_fav}>
        <FoodPhotos />
        <Favourite navigation={navigation} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A21",
  },

  photo_fav: {
    flex: 1,
    backgroundColor: "#C4C4C4",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 100,
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
});
