// ./ui/PressableComponent.js

import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PressableComponent2 from "../PressableComponent2";

const PressableComponent = (props) => {
  // console.log("props:", props);
  // console.log("props.issues:", props.issues);
  // console.log("props.issues.issues:", props.issues.issues);
  const [isVisible, setIsVisible] = useState(false);

  // const [issues] = props.issues.issues;
  const issues = props.issues.issues;
  // console.log("issues:", issues);

  const issue = issues.map((param, index) => {
    // console.log("param:", param);
    // console.log("index:", index);
    // console.log("param.issue:", param.issue);
    // console.log("param.dataToCollect:", param.dataToCollect);

    return (
      <PressableComponent2
        dataToCollect={param.dataToCollect}
        title={param.issue}
        key={index}
      >
        {/* <Text>{param.issue}</Text> */}
      </PressableComponent2>
    );
  });

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          console.log(props.title, "is pressed.");
          setIsVisible(!isVisible);
          // props.setIsVisible(!props.isVisible);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
          styles.wrapperCustom,
          { backgroundColor: props.color },
        ]}
      >
        <View style={styles.logBox}>
          {/* <View> */}
          <Text style={{ padding: 10, backgroundColor: "lightblue" }}>
            {props.title}
          </Text>
          {isVisible ? <View>{issue}</View> : null}
        </View>
      </Pressable>
      {/* {item} */}
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
