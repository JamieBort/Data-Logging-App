import React, { useState } from "react";
import { View, Switch, StyleSheet, Text, Button } from "react-native";

const Toggle = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  let feature;
  if (isEnabled) {
    feature = (
      <View>
        <Button
          title="Edit last entry"
          onPress={() =>
            console.log(
              "Would you like to delete the last entry? Or would you like to edit the last entry?",
            )
          }
        />
        <Button
          title="Edit previous entries"
          onPress={() =>
            console.log(
              "Would you like to delete the previous entries? Or would you like to edit the previous entries?",
            )
          }
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      {feature}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Toggle;
