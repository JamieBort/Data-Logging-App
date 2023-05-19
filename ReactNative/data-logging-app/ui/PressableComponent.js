// ./ui/PressableComponent.js

import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const PressableComponent = (props) => {
  // const [timesPressed, setTimesPressed] = useState(0);

  // let textLog = "";
  // if (timesPressed > 1) {
  //   textLog = timesPressed + "x onPress";
  // } else if (timesPressed > 0) {
  //   textLog = "onPress";
  // }

  // console.log("props.acolor:", props.color);

  return (
    <View style={styles.container}>
      <Pressable
        // onPress={() => {
        //   setTimesPressed((current) => current + 1);
        // }}

        onPress={() => {
          console.log("Pressable is pressed.");
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
          styles.wrapperCustom,
          { backgroundColor: props.color },
        ]}
      >
        <Text style={styles.logBox}>{props.title}</Text>

        {/* {({ pressed }) => (
          <Text style={styles.text}>{pressed ? "Pressed!" : "Press Me"}</Text>
        )} */}
      </Pressable>

      {/* <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f0f0f0",
    backgroundColor: "#f9f9f9",
  },
});

export default PressableComponent;
