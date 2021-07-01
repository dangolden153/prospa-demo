import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button, Input } from "react-native-elements";

function ForgotPassword({ navigation }) {
  const [resetPassword, setResetPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Reset Password",
    });
  });
  // const handleResetPassword = () => {
  //   console.log("resetting password");
  // };

  return (
    <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={90}>
      {/* header text */}
      <Text
        h2
        style={{
          marginTop: 30,
          marginBottom: 90,
          color: "black",
          alignSelf: "flex-start",
          fontWeight: "bold",
          fontSize: 25,
        }}
      >
        Forgot Password ?
      </Text>

      {/* forgot password Description */}
      <Text
        style={{
          textAlign: "left",
          fontSize: 17,
          marginBottom: 30,
          color: "#3F3F3F",
        }}
      >
        if you need help resetting your password, we can help by sending you a
        link to reset it
      </Text>

      {/* text input  */}

      <View style={{ width: "100%" }}>
        <Input
          style={styles.input}
          placeholder="Email Address"
          value={resetPassword}
          onChangeText={(text) => setResetPassword(text)}
          autoFocus
        />
      </View>

      {/* btn */}
      <Button
        // onPress={handleResetPassword}
        title="Send"
        buttonStyle={{ backgroundColor: "#F64B29" }}
        containerStyle={styles.btn}
        raised
      />
      <View style={{ height: 50 }} />
    </KeyboardAvoidingView>
  );
}

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  input: {
    color: "black",
    fontSize: 17,
  },
  btn: {
    color: "white",
    width: 300,
    borderRadius: 20,
    marginTop: 10,
  },
});
