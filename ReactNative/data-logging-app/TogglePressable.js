// ./ui/TogglePressable.js

import React, { useState, useEffect } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

const TogglePressable = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [show, setShow] = useState(false);

  //   console.log("props:", props);
  //   console.log("props.isStatus:", props.isStatus);
  //   console.log("props.isStatus:", props.isStatus[0]);
  //   console.log("props.item:", props.item);
  //   console.log("props.item[0]:", props.item[0]);
  //   console.log("props.item[1].issues:", props.item[1].issues);

  //   console.log("props.isStatus:", props.isStatus);
  //   const propertyNames = Object.keys(props.isStatus);
  //   console.log("propertyNames:", propertyNames);
  // console.log("propertyNames.length:", propertyNames.length);

  const issues = props.item[1].issues;
  //   console.log("issues:", issues);
  const issue = issues.map((issue, index) => {
    // console.log("issue:", issue);
    // console.log("issue.issue:", issue.issue);

    // for (const property in props.isStatus) {
    // //   console.log(`${property}: ${props.isStatus[property]}`);
    //   if (props.isStatus[property] === false) {
    //     return null;
    //   } else {
    //     return <li key={index}>{issue.issue}</li>;
    //   }
    // }
    return <li key={index}>{issue.issue}</li>;
  });

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          //   console.log("Pressed!");
          setIsVisible(!isVisible);
          //   props.handleVisibility(setIsVisible(!isVisible));
          props.handleVisibility([props.item[0], !isVisible]);
          // props.handleVisibility({ this.props.number: !isVisible });
        }}
      >
        <Text>{props.item[0]}</Text>
        <Text>{props.children}</Text>
        {/* {isVisible ? <Text>{props.children}</Text> : null} */}

        {/* comment out */}
        {/* {props.isStatus[props.item[0]] ? (
          <ul>{issue}</ul>
        ) : null} */}

        {/* {props.isStatus[0] ? <ul>{issue}</ul> : null} */}

        <ul>{issue}</ul>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    backgroundColor: "lightblue",
    margin: 10,
    padding: 10,
  },
});

export default TogglePressable;
