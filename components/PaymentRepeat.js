import React, { useState } from "react";
import { StyleSheet, Switch ,View,TouchableOpacity} from "react-native";
import { color } from "./Colors";
import RegularText from "./Text/RegularText";
import SmallText from "./Text/SmallText";

const PaymentRepeat = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <TouchableOpacity style={styles.container} activeOpacity={.5}>
      <View>
        <RegularText>Repeating payment</RegularText>
        <SmallText gray bold>
          We'll predict this for you in summary
        </SmallText>
      </View>

      <Switch
        trackColor={{ false: "#767577", true: color?.green }}
        thumbColor={isEnabled ? "#ffff" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        
      />
    </TouchableOpacity>
  );
};

export default PaymentRepeat;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: color.white,
    elevation: 2,
  },
});
