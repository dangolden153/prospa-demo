import { StatusBar } from "expo-status-bar";
import React, { useState, useLayoutEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";
import { Input, Button } from "react-native-elements";
import {Context} from '../context'



const Sign_up = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setcComfirmPassword] = useState("");

  // useLayoutEffect(() => {
  //     effect
  //     return () => {
  //         cleanup
  //     };
  // }, [input])

  const {state, setState} = useContext(Context)

  const navigateContext =()=>{
    navigation.navigate("signin")
    setState(state + 1)
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS ? "padding" : "height"}
      style={styles.container}
      // keyboardVerticalOffset={90}
    >
        <StatusBar style="light" />
      <Text h3 style={{ textAlign: "center", marginTop: 10, fontSize: 30 }}>
        Sign up
      </Text>

      <View style={styles.inputContainer}>
        <Input
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Username"
          type="text"
          autoFocus
        />

        <Input
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          type="email"
          autoFocus
        />

        <Input
          style={styles.input}
          placeholder="password"
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        <Input
          style={styles.input}
          value={comfirmPassword}
          onChangeText={(text) => setcComfirmPassword(text)}
          type="password"
          secureTextEntry
          placeholder="comfirm Password"
        />
      </View>

      <View style={styles.btnContainer}>
        <Button
          containerStyle={styles.btn}
          buttonStyle={{ backgroundColor: "#F64B29" }}
          title="Sign up"
          raised
          onPress={navigateContext}
        />

        <Text style={{ paddingTop: 20 }}>
          you already have an account?{" "} 
          <Text onPress={() => navigation.navigate("signin")}>Sign in</Text>
        </Text>
      </View>

    
      {/* <View style={{height: 50}} /> */}
    </KeyboardAvoidingView>
  );
};

export default Sign_up;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:"center",
    padding: 10,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    marginTop: 10,
    width: "100%",

  },
  btn: {
    backgroundColor: "#F64B29",
    color: "black",
    width: 200,
    borderRadius: 20,
    marginTop:10
  },
});
