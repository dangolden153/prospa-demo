import { StatusBar } from 'expo-status-bar';
import React,{useLayoutEffect,useContext,useState} from 'react'
import { View, Text,StyleSheet ,KeyboardAvoidingView,Platform} from 'react-native'
import { Image , Input, Button} from 'react-native-elements';
import { Context } from '../context';
import pics from '../images/food_1.jpg'


const Sign_in = ({navigation}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "back to login",
      title:"Login "
    });
  }, [navigation]);



  const Username =()=>{
    username = "dangolden" ? true : setError("invalid username")
  }

  const Password =()=>{
    password = "test123" ? true : setError("invalid password")
  }

  const login =()=>{
    if (Username && Password){
      navigation.navigate("country-list")
    }

    else {
      console.log(error)
    }
  }
  const navigateContext =()=>{
    navigation.navigate("country-list")
    setState(state - 1)
  }

  const {state, setState} = useContext(Context)

  // {Platform.OS ? "padding" : "height"}
    return (
        <KeyboardAvoidingView
          behavior={Platform.OS ? "padding" : "height"}
          style={styles.container}
          keyboardVerticalOffset={90}
        >
        <StatusBar style='light' />
        <Text>{error}</Text>
          <Image source={pics} style={{width: 150, height: 150,  marginBottom: 20,marginTop:30,}}  />
          <Text h3 style={{ textAlign: "center", fontSize: 30 }}>
            Sign in
          </Text>
          <View style={styles.inputContainer}>
            <Input
              style={styles.input}
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="Username or Email"
              type="text"
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
    
          </View>
    
          <View style={styles.btnContainer}>
            <Button
              containerStyle={styles.btn}
              buttonStyle={{ backgroundColor: "#F64B29" }}
              title="Login"
              raised
              onPress={login}
            />
    
            <Text style={{ paddingTop: 20, paddingBottom:10 }}>
              forgot password?{" "}
              <Text >Click here</Text>
            </Text>

            <Text>you dont have an account? <Text onPress={() => navigation.navigate("sign up")}>Sign up</Text></Text>
          </View>
          {/* <View style={{height: 100}} /> */}
        </KeyboardAvoidingView>
      );
}

export default Sign_in


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
  