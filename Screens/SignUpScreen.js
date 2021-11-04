import { StatusBar } from "expo-status-bar";
import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Image,
  Button
} from "react-native";
// import pics from "../images/login.png";
// import firebase from "../firebase";

const SignUpScreen = ()=>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (

<View>
<TextInput
placeholderTextColor={"black"}
placeholder="password"
type="text"
value={email}
onChangeText={(text) => setEmail(text)}
/>

<TextInput
placeholderTextColor={"black"}
value={password}
onChangeText={(text) => setPassword(text)}
type="password"
secureTextEntry
placeholder="comfirm Password"
/>

<Button

title="Sign up"
raised
// onPress={() => handleSignUp()}
/>

</View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({})