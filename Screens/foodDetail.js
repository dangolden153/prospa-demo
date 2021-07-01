import React, { useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Button,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Btn } from "../components/Button";
import { BtnOutline, BtnText } from "../components/Button";
import { Video, AVPlaybackStatus } from "expo-av";
import sampleVideo from "../images/video.mp4";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { foodType } from "../reducer/foodReducer/food_type";
const FoodDetail = ({ navigation, route }) => {
  const [status, setStatus] = React.useState({});
  const [data, setData] = React.useState({});
  const [meal, setMeal] = React.useState("");

  useEffect(() => {
    const data = route.params.item;
    // console.log(data);
    setData(data);
  }, [route.params.item]);

  console.log(data?.data);

  // const [status, setStatus] = React.useState({});
  const video = React.useRef(null);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#1A1A21" },
      headerTitleStyle: { color: "white" },
      headerTintColor: "white",
      headerRight: () => (
        <Ionicons
          name="menu"
          color="white"
          size={30}
          style={{ paddingRight: 10 }}
        />
      ),
    });
  });
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.videoContainer}>
        <Video
          style={{ height: "100%", width: "100%" }}
          source={sampleVideo}
          useNativeControls
          resizeMode="cover"
          isLooping
          isMuted={false}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>

      {/* /////// feedback section */}
      <View style={styles.feedback}>
        <Text style={{ color: "white", fontSize: 18, color: "#F7B02E" }}>
          Feedback
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "40%",
          }}
        >
          <Ionicons name="star" size={20} color="#F7B02E" />
          <Ionicons name="star" size={20} color="#F7B02E" />
          <Ionicons name="star-outline" size={20} color="#F7B02E" />
          <Ionicons name="star-outline" size={20} color="#F7B02E" />
          <Ionicons name="star-outline" size={20} color="#F7B02E" />
        </View>
      </View>

      {/* /////// description section */}
      <View style={styles.description}>
        <Text h2 style={{ marginBottom: 20, fontSize: 23 }}>
          Ingredents & Description
        </Text>

        <Text
          style={{
            color: "black",
            fontSize: 20,
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          {/* {mealName} */}dfghj
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "black",
              opacity: 0.7,
            }}
          >
            {/* {description} */}sfdghjk
          </Text>
        </ScrollView>
      </View>

      <View style={styles.btn_icon}>
        <BtnOutline />
        <Button
          title="ADD TO CUPBOARD"
          onPress={() => dispatch({ type: "CUPBOARD", payload: data })}
        />
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A21",
    position: "relative",
  },
  videoContainer: {
    flex: 1,
    height: 250,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
  },
  feedback: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingVertical: 10,
  },
  description: {
    backgroundColor: "grey",
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 70,
    borderTopStartRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },

  btn_icon: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
  },
  btn: {
    backgroundColor: "pink",
    width: 300,
  },
});
