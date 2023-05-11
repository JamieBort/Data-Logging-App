// FeatureList.js
// NOTE: NOT USING THIS.
// TODO: delete this file.

// https://reactnative.dev/docs/0.67/sectionlist

// Created this component to list the features I'd like to implement.

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from "react-native";

const DATA_OBJECT = {
  cgm: [
    "Dexcom G6 Transmitters, Dexcom G6 Sensors, Etc.",
    {
      title: "When I replace the old sensor for a new sensor.",
      features: [],
    },
    {
      title: "When I replace the old transmitter for a new transmitter.",
      features: [],
    },
    {
      title:
        "When I remove the old transmitter and then replace the same old transmitter",
      features: [],
    },
    {
      title: "When my pump/mobile loses the CGM signal.",
      features: [],
    },
  ],
  physicalActivity: [
    "Running, Having Sex, Sleeping, Etc.",
    {
      title: "When I start/stop exercising",
      features: [],
    },
    {
      title: "When I start/stop sleeping",
      features: [],
    },
    {
      title: "Possibly to log my sleep start/end.",
      features: [],
    },
  ],
  pump: [
    "Pump, Insulin, Tubing, Etc.",
    {
      title: "When I change only my tubing (this almost never happens)",
      features: [],
    },
    {
      title:
        "When I change an old reservoir for a new reservoir (and refill it with insulin and replace the old tubing for new tubing - this always happens together)",
      features: [],
    },
    {
      title:
        "When I refill an old reservoir with insulin ( and replace the old tubing for new tubing - this always happens together)",
      features: [],
    },
    {
      title: "When my pump/mobile loses the CGM signal.",
      features: [],
    },
  ],

  other: [
    "Other",
    {
      title:
        "For the rest of the data points that are to be collect, see the `${<h3>}`Data points to collect`${</h3>}` section of the Personal Dashboard Business Requirements Google Drive doc.",
      features: [],
    },
  ],
};

const DATA_ARRAY = [
  {
    title: "When I change only my tubing (this almost never happens)",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title:
      "When I change an old reservoir for a new reservoir (and refill it with insulin and replace the old tubing for new tubing - this always happens together)",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title:
      "When I refill an old reservoir with insulin ( and replace the old tubing for new tubing - this always happens together)",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "When I replace the old sensor for a new sensor.",
    data: ["Cheese Cake", "Ice Cream"],
  },
  {
    title: "When I replace the old transmitter for a new transmitter",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title:
      "When I remove the old transmitter and then replace the same old transmitter",
    data: ["Cheese Cake", "Ice Cream"],
  },
  {
    title: "When I start/stop exercising",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "When my pump/mobile loses the CGM signal.",
    data: ["Cheese Cake", "Ice Cream"],
  },
  {
    title: "Possibly to log my sleep start/end.",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title:
      "For the rest of the data points that are to be collect, see the `${<h3>}`Data points to collect`${</h3>}` section of the Personal Dashboard Business Requirements Google Drive doc.",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const FeatureList = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA_ARRAY}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});

export default FeatureList;
