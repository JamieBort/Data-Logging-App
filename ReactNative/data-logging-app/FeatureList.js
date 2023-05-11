// FeatureList.js

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
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      title: "When I replace the old transmitter for a new transmitter.",
      features: ["Feature 4", "Feature 5"],
    },
    {
      title:
        "When I remove the old transmitter and then replace the same old transmitter",
      features: ["Feature A", "Feature B", "Feature C"],
    },
    {
      title: "When my pump/mobile loses the CGM signal.",
      features: ["Feature 6", "Feature 7", "Feature 8", "Feature 9"],
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

const list = Object.entries(DATA_OBJECT).map(([key, value]) => {
  // {console.log("key:", key, "value:", value);
  // console.log(value[0]);}

  const cleanedArray = value.slice(1);

  const subListWithIds = cleanedArray.map((item, index) => {
    item["ID"] = index;
    // {
    //   console.log("item:", item);
    //   console.log("index:", index);
    //   console.log("item:", item.features);
    // }

    const itemFeatures = item.features.map((itemFeature, index) => {
      // {console.log("itemFeature:", itemFeature);
      // itemFeature["ID"] = index;
      // console.log("index:", index);}
      return <li key={index}>{itemFeature}</li>;
    });

    return (
      <View key={item.ID}>
        <li>{item.title}</li>
        {itemFeatures[0] ? (
          <ul>
            List of Features:
            {/* <p>List of Features:</p> */}
            {itemFeatures}
          </ul>
        ) : null}
      </View>
    );
  });

  return (
    <View key={key}>
      <h2>{value[0]}</h2>
      <ul>{subListWithIds}</ul>
    </View>
  );
});

const FeatureList = () => {
  return (
    <View>
      <h1>Feature List</h1>
      {list}
    </View>
  );
};

export default FeatureList;
