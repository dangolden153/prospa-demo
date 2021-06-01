import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const county = [
  { country_name: "Nigeria", id: 1 },
  { country_name: "Canada", id: 2 },
  { country_name: "Algeria", id: 3 },
  { country_name: "China", id: 4 },
  { country_name: "Japan", id: 5 },
  { country_name: "Finland", id: 6 },
  { country_name: "Finland", id: 7 },
  { country_name: "Finland", id: 8 },
  { country_name: "Finland", id: 9 },
  { country_name: "Finland", id: 10 },
  { country_name: "Nigeria", id: 11 },
  { country_name: "Canada", id: 12 },
  { country_name: "Algeria", id: 13 },
  { country_name: "China", id: 14 },
  { country_name: "Japan", id: 15 },
];

const CountryList = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Country",
      title:"Select a Country"
    });
  }, [navigation]);

  const renderItems = (item) => {
    return (
      <View  >
        <ScrollView contentContainerStyle={{paddingTop:5}}>
          <Text onPress={()=>navigation.navigate("meal")} style={{ fontSize: 20, paddingTop:20, paddingBottom: 20 }}>
            {item.country_name}
          </Text>
          
        </ScrollView>
        <Divider />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <Text h3 style={{ textAlign: "center", margin: 10, fontSize: 25 }}>
        Select a Country
      </Text> */}
       
      <FlatList style={{  paddingLeft: 40, paddingRight: 40, }}
        data={county}
        renderItem={({ item }) => {
          return renderItems(item);
        }}
        keyExtractor={item => `${item.id}`}
      />
    </SafeAreaView>
  );
};

export default CountryList;

const styles = StyleSheet.create({
  container: {flex: 1},
});
