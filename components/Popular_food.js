import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Image } from "react-native-elements/dist/image/Image";
import { mealData } from "./data";

const PopularFood = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text
          h3
          style={{
            textAlign: "left",
            fontSize: 23,
            fontWeight: "bold",
            margin: 10,
            color: "#ffff",
          }}
        >
          Popular Foods
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {mealData.map((meal) => (
            <View style={styles.content} meal={meal} key={meal.id}>
              <Image
                source={meal.img}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 50,
                  margin: 10,
                }}
              />
              <Text style={{ fontSize: 17, color: "#dddddd" }}>
                {meal.mealName}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default PopularFood;

const styles = StyleSheet.create({
  container: {
    flexGrow: 0.1,
  },
  box: {
    padding: 20,
    alignItems: "flex-start",
  },
  content: {
    alignItems: "center",
  },
});
