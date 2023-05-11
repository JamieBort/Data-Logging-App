// FeatureList.js

// https://reactnative.dev/docs/0.67/sectionlist

// Created this component to list the data I'd like to implement.

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
      data: ["TimeStamp", "Lot Number", "Code"],
    },
    {
      title: "When I replace the old transmitter for a new transmitter.",
      data: ["TimeStamp", "Lot Number", "Code"],
    },
    {
      title:
        "When I remove the old transmitter and then replace the same old transmitter",
      data: ["TimeStamp", "Lot Number (?)", "Code (?)"],
    },
    {
      title: "When my pump/mobile loses the CGM signal.",
      data: ["TimeStamp", "Circumstances"],
    },
  ],
  physicalActivity: [
    "Running, Having Sex, Sleeping, Etc.",
    {
      title: "When I start/stop exercising",
      data: [
        "Start time: TimeStamp",
        "Stop Time: TimeStamp",
        { "Exertion Level": ["low", "medium", "high"] },
      ],
    },
    {
      title: "When I start/stop sleeping",
      data: [
        "Start time: TimeStamp",
        "Stop Time: TimeStamp",
        { "Exertion Level": ["low", "medium", "high"] },
      ],
    },
    {
      title: "My sleep start/end.",
      data: [
        "Start time: TimeStamp",
        "Stop Time: TimeStamp",
        { "Exertion Level": ["low", "medium", "high"] },
      ],
    },
  ],
  pump: [
    "Pump, Insulin, Tubing, Etc.",
    {
      title: "When I change only my tubing (this almost never happens)",
      data: ["TimeStamp"],
    },
    {
      title:
        "When I change an old reservoir for a new reservoir (and refill it with insulin and replace the old tubing for new tubing - this always happens together)",
      data: ["TimeStamp"],
    },
    {
      title:
        "When I refill an old reservoir with insulin ( and replace the old tubing for new tubing - this always happens together)",
      data: ["TimeStamp"],
    },
    {
      title: "When my pump/mobile loses the CGM signal.",
      data: ["TimeStamp", "Circumstances"],
    },
  ],

  other: [
    "Other - See below",
    {
      title:
        "For the rest of the data points that are to be collect, see the Data points to collect section of the Personal Dashboard Business Requirements Google Drive doc.",
      data: [],
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
    //   console.log("item:", item.data);
    // }

    const itemFeatures = item.data.map((itemFeature, index) => {
      // console.log("itemFeature:", itemFeature);
      // console.log("index:", index);
      // console.log(typeof itemFeature === "object");
      if (typeof itemFeature === "object") {
        // map over array
        // console.log("itemFeature:", itemFeature);
        // return itemFeature.map((itemSubFeature, index) => {
        //   <ul key={index}>{itemSubFeature}</ul>;
        // });

        const itemSubFeatures = itemFeature["Exertion Level"].map(
          (itemSubFeature, index) => {
            // itemSubFeature["ID"] = index;
            // console.log("itemSubFeature:", itemSubFeature);
            return <li key={index}>{itemSubFeature}</li>;
          },
        );
        // console.log("itemSubFeatures:", itemSubFeatures);
        return (
          <ul key={index}>
            My Sub Features
            {itemSubFeatures}
          </ul>
        );
      } else if (typeof itemFeature === "string") {
        return <li key={index}>{itemFeature}</li>;
      }
    });

    return (
      <View key={item.ID}>
        <li>
          {item.ID + 1}: {item.title}
        </li>
        {itemFeatures[0] ? (
          <ul>
            Questions to ask/data to collect:
            {itemFeatures}
          </ul>
        ) : null}
      </View>
    );
  });

  return (
    <View key={key}>
      <h2 style={{ textAlign: "center" }}>{value[0]}</h2>
      <ul>{subListWithIds}</ul>
    </View>
  );
});

const FeatureList = () => {
  return (
    <View>
      <h1 style={{ textAlign: "center" }}>Feature List</h1>
      {list}
    </View>
  );
};

export default FeatureList;
