import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { color } from "./Colors";
import { userHistoryData } from "../Contrainst/DataFiles";
import UserHistoryItem from "./UserHistoryItem";
import RegularText from "./Text/RegularText";
import BigText from "./Text/BigText";

const UserHistory = () => {
  return (
    <View style={styles.container}>
      

      <BigText
        marginHorizontal={20}
        marginVertical={10}
        fontSize={20}
        fontWeight
      >
        You and MTN
      </BigText>
      <FlatList
        data={userHistoryData}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <UserHistoryItem item={item} />}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        contentContainerStyle={{
          //   bottom: 0,
          //   position: "absolute",
          width: "100%",
          backgroundColor: color.white,
        }}
      />
    </View>
  );
};

export default UserHistory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
  },
  seperator: {
    backgroundColor: color.darkGray,
    height: 1,
    width: "85%",
    alignSelf: "flex-end",
  },
});
