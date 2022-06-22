import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { color } from "./Colors";
import { mobileData } from "../Contrainst/DataFiles";
import MobileItem from "./MobileItem";

const MobileContenList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={mobileData}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <MobileItem item={item} />}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        contentContainerStyle={{
          width: "100%",
          backgroundColor: color.white,
        }}
      />
    </View>
  );
};

export default MobileContenList;

const styles = StyleSheet.create({
  container: {},
  seperator: {
    backgroundColor: color.darkGray,
    height: 1,
    width: "85%",
    alignSelf: "flex-end",
  },
});
