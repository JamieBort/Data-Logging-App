// ./ui/ToggleSwitch.js
// A Toggle Switch

import React, { useState } from "react";
// TODO: replace Button with Pressable.
import { StyleSheet, Button, View, Text, Switch, Alert } from "react-native";

const ToggleSwitch = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  let feature;
  if (isEnabled) {
    feature = (
      <View>
        <Button
          title="Edit last entry"
          onPress={() => {
            console.log(
              "Would you like to delete the last entry? Or would you like to edit the last entry?",
            );
            // // NOTE: commented out for web development.
            // Alert.alert(
            //   "Notice",
            //   "Right now this button does not do anything.",
            // );
          }}
        />

        <Button
          title="Temporary delete last entry"
          onPress={props.handleEvent}
        />

        <Button
          title="Edit previous entries"
          onPress={() => {
            console.log(
              "Would you like to delete a previous entries? Or would you like to edit a previous entries?",
            );
            // // NOTE: commented out for web development.
            // Alert.alert(
            //   "Notice",
            //   "Right now this button does not do anything.",
            // );
          }}
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

export default ToggleSwitch;
