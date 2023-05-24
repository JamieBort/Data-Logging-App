// ./ui/PressableComponent2.js

// NOTE: this is a temporary file. To be used until I make ./ui/PressableComponent.js recursive.

import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import TimeStamp from "./components/dataComponents/TimeStamp";

const PressableComponent2 = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  console.log("props:", props);
  //   console.log("props.dataToCollect:", props.dataToCollect);
  //   console.log("props.title:", props.title);

  const data = props.dataToCollect.map((param, index) => {
    // console.log("param:", param);
    // console.log("index:", index);

    return (
      <View key={index}>
        <li>
          <Text>{param}</Text>
          <TimeStamp />
        </li>
      </View>
    );
  });

  return (
    <View>
      <Button
        onPress={() => setIsVisible(!isVisible)}
        title={props.title}
      ></Button>
      {isVisible ? <ul>{data}</ul> : null}

      {/* <Text>{props.title}</Text>
      <ul>{data}</ul> */}
    </View>
  );
};

export default PressableComponent2;
