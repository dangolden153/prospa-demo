import React, {useState, useRef, useEffect} from "react";
// import { KeyboardAvoidingView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
// import { Platform } from "react-native";
import MyTabs from "./Screens/ButtomTabScreen";
import CreateAccount from "./Screens/CreateAccount/CreateAccount";
import {
  createStackNavigator,
  CardStyleInterpolators, 
  TransitionPresets,
} from "@react-navigation/stack";
import TransactionDetails from "./Screens/TransactionDetails/TransactionDetails";
import NotificationScreen from "./Screens/NotificationScreen/NotificationScreen";
import Presto from "./Screens/Presto/Presto";
import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  Platform
} from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { Button } from "react-native-elements";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});


export default function App() {
  // console.log("notification", notification);

  // const Stack = createStackNavigator();




  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const sendPushNotification = async (expoPushToken) => {
    console.log("notification pushed!", expoPushToken);
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "Original Title",
      body: "And here is the body !",
    };

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  };

  const registerForPushNotificationsAsync = async () => {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      // console.log('finalStatus', finalStatus)

      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      // console.log("token", token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    return token;
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>hello world</Text>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>
          Title: {notification && notification.request.content.title}{" "}
        </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>
          Data:{" "}
          {notification && JSON.stringify(notification.request.content.data)}
        </Text>
      </View>
      <View style={{ marginVertical: 10 }} />
      <Button
        title="Press to schedule a notification"
        onPress={() => sendPushNotification(expoPushToken)}
      />

      {/* <TouchableOpacity onPress={()=>sendPushNotification(expoPushToken)}>
      <Text>send</Text>
    </TouchableOpacity> */}
    </View>
  );
  























  // return (
  //   <NavigationContainer>
  //     <SafeAreaProvider>
  //       <KeyboardAvoidingView 
  //         style={{ flex: 1 }}
  //         behavior={Platform.OS === "ios" ? "padding" : "height"}
  //         keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
  //       >
  //         <Stack.Navigator
  //           // initialRouteName="details"
  //           screenOptions={{
  //             gestureEnabled: true,
  //             gestureDirection: "horizontal",
  //             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  //             presentation: "transparentModal",
  //           }}
  //         >
  //           <Stack.Screen
  //             name="bottomTab"
  //             options={{ headerShown: false }}
  //             component={MyTabs}
  //           />

            
  //           <Stack.Screen
  //             name="notification"
  //             options={{ headerShown: false }}
  //             component={NotificationScreen}
  //           />
  //            <Stack.Screen
  //             name="presto"
  //             options={{ headerShown: false }}
  //             component={Presto}
  //           />
  //           <Stack.Screen
  //             name="account"
  //             options={{ headerShown: false }}
  //             component={CreateAccount}
  //           />
             
  //           <Stack.Screen
  //             name="details"
  //             options={{
  //               headerShown: false,
  //               ...TransitionPresets.ModalSlideFromBottomIOS,
  //             }}
  //             component={TransactionDetails}
  //           />
  //         </Stack.Navigator>
  //       </KeyboardAvoidingView>
  //     </SafeAreaProvider>
  //   </NavigationContainer>
  // );
}
