import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Button,
  Dimensions,
  
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {Btn} from '../components/Button'
import {BtnOutline} from '../components/Button'



const FoodDetail = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name="menu"
          color="black"
          size={30}
          style={{ paddingRight: 10 }}
        />
      ),
    });
  });
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.video}>
        {/* <Video 
        source={{uri:`${require('../images/video.mp4')}`}}
        ref={(ref)=>{this.player = ref}}
        onBuffer={this.onBuffer}
        onError={this.videoError}

        style={{flex: 1}}
         
        /> */}
     <Ionicons name="play" size={80} color="white" />
      </View>

      {/* /////// feedback section */}
      <View style={styles.feedback}>
        <Text style={{ color: "white", fontSize: 18 }}>Feedback</Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "40%",
          }}
        >
          <Ionicons name="star" size={20} color="white" />
          <Ionicons name="star" size={20} color="white" />
          <Ionicons name="star-outline" size={20} color="white" />
          <Ionicons name="star-outline" size={20} color="white" />
          <Ionicons name="star-outline" size={20} color="white" />
        </View>
      </View>

      {/* /////// description section */}
      <View style={styles.description}>
        <Text h2 style={{ marginBottom: 20, fontSize: 23 }}>
          Ingredents & Description
        </Text>
        <Text style={{ lineHeight: 20, color: "black", fontSize: 18 }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
          quisquam ipsa itaque, quas possimus voluptates? Vitae facilis omnis
          in, distinctio iusto ex dolor nostrum modi totam temporibus ut quos
          ipsam facere natus beatae amet officia odio aliquid, est pariatur
          asperiores? Quasi corporis molestiae doloribus explicabo vitae
          provident autem suscipit nisi.
        </Text>
      </View>

      <View style={styles.btn_icon}>
        <BtnOutline />
        <Btn title= "ADD TO CUPBOARD" onPress={console.log('hey yo')} />
        {/* <Button title="ADD TO CUPBOARD" containerStyle={styles.btn} /> */}
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
  video: {
    height: 250,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
    backgroundColor: "purple"
  },
  feedback: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  description: {
    backgroundColor: "grey",
    padding: 10,
    paddingTop: 20,
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
