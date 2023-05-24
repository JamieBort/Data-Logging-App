// ./components/dataComponents/TimeStamp.js

import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

// console.log(Date.now());
const timestamp = Date.now();

const TimeStamp = () => {
  return (
    <View>
      <Text>The current time is: {timestamp}</Text>
    </View>
  );
};

export default TimeStamp;
