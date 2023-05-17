// ./components/FeatureList.js
// Created this component to list the data I'd like to record.

// TODO: Clean up this file.
// Specifically,
//   * remove the superfluous lines of code,
//   * comments,
//   * etc.
//   * add helpful comments.
//  Also, rename the variables so that
//   * they're more human readable
//   * and appropriate.
// Lastly, make sure the `index` in each map is used correctly for React's need (regarding the `key` prop).

import React from "react";
import { View } from "react-native";
import { Variables, CONSTANTS_old } from "./../constants/Constants";

// console.log(CONSTANTS_old);

const DATA_OBJECT = {
  cgm: [
    // Variables.CGM,
    CONSTANTS_old.CGM.title,
    {
      title: "When I replace the old sensor for a new sensor.",
      data: [
        "TimeStamp",
        "Lot Number",
        "Code",
        "Location On Body",

        // (LocationOnBody = [
        //   ["left side of body", "right side of body"],
        //   (bodyPart = ["thigh"]),
        // [front of body part, back of body part, right side of body part, left side of body part,]
        // ]),

        // {
        //   "Location on Body": [
        //     ["left side", "right side"],
        //     (bodyPart = ["thigh"]),
        // [front of body part, back of body part, right side of body part, left side of body part,]
        //   ],
        // },
      ],
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
      title: "When my mobile loses the CGM signal.",
      data: [
        "TimeStamp",
        "Circumstances - note field?",
        "Did the pump lose signal too?",
      ],
    },
    {
      title: "When my pump loses the CGM signal.",
      data: [
        "TimeStamp",
        "Circumstances - note field?",
        "Did the CGM lose signal too?",
      ],
    },
  ],

  physicalActivity: [
    // Variables.PHYSICAL_ACTIVITY,
    CONSTANTS_old.PHYSICAL_ACTIVITY.title,
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
      title: "Other Physical Activity",
      data: [
        "Start time: TimeStamp",
        "Stop Time: TimeStamp",
        { "Exertion Level": ["low", "medium", "high"] },
      ],
    },
  ],

  pump: [
    // Variables.PUMP,
    CONSTANTS_old.PUMP.title,
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
        "When I refill an old reservoir with insulin (and replace the old tubing for new tubing - this always happens together)",
      data: ["TimeStamp"],
    },
    {
      title: "Change Infusion Set",
      data: [
        "TimeStamp",
        "Location On Body",

        // (LocationOnBody = [
        //   ["left side", "right side"],
        //   (bodyPart = ["thigh"]),
        // [front of body part, back of body part, right side of body part, left side of body part,]
        // ]),

        // {
        //   "Location on Body": [
        //     ["left side", "right side"],
        //     (bodyPart = ["thigh"]),
        // [front of body part, back of body part, right side of body part, left side of body part,]
        //   ],
        // },
      ],
    },
    {
      // this doesn't belong here.
      title: "When my pump/mobile loses the CGM signal.",
      data: ["TimeStamp", "Circumstances - note field?"],
    },
    {
      // this doesn't belong here.
      title: "When my pump/mobile loses the CGM signal.",
      data: ["TimeStamp", "Circumstances - note field?"],
    },
    {
      title:
        "Personal Profiles: When I activate a particular personal profile.",
      data: [
        "TimeStamp",
        { "Personal Profile": ["Primary2023/DEFAULT", "HALF", "ZERO"] },
        //  ["Primary2023/DEFAULT", "HALF", "ZERO"]
      ],
    },
  ],

  food: [
    // Variables.FOOD,
    CONSTANTS_old.FOOD.title,
    {
      title: "When I take sugar correction - for example at 2 am.",
      data: ["TimeStamp", "Quantity - integer", "Circumstances - note field?"],
    },
    {
      title: "Delayed taking insulin",
      data: [
        "TimeStamp",
        "Time I should have taken insulin (use this to calculate - offer both)",
        "amount of time elapsed since I should have taken insulin (or use this to calculate - offer both)",
        "Circumstances - note field?",
      ],
    },
  ],

  other: [
    // "Other - Misc. And complete list. See below",
    CONSTANTS_old.OTHER.title,
    {
      title: "When I eat - for example at 2 am. This one might not be needed.",
      data: ["TimeStamp", "Circumstances - note field?"],
    },
    {
      title: "Stayed up all night.",
      data: ["TimeStamp", "Circumstances - note field?"],
    },
    {
      title: "Something the doctor will want to know.",
      data: ["TimeStamp", "Circumstances - note field?"],
    },
    {
      title: "Other/Misc.",
      data: [
        "TimeStamp",
        "Circumstances - note field?",
        {
          "Dropdown or Radio buttons or check boxes": [
            "option one",
            "option two",
            "option three",
            "option four opens a short field to enter a brief description",
          ],
        },
      ],
    },
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
    // console.log("item:", item);
    //   console.log("index:", index);
    //   console.log("item:", item.data);
    // }

    const itemFeatures = item.data.map((itemFeature, index) => {
      // console.log("itemFeature:", itemFeature);
      // console.log("index:", index);
      // console.log(typeof itemFeature === "object");
      // console.log(typeof itemFeature);
      if (typeof itemFeature === "object") {
        // map over array
        // console.log("itemFeature:", itemFeature);
        // return itemFeature.map((itemSubFeature, index) => {
        //   <ul key={index}>{itemSubFeature}</ul>;
        // });

        const itemSubFeatures = itemFeature[Object.keys(itemFeature)[0]].map(
          (itemSubFeature, index) => {
            // itemSubFeature["ID"] = index;
            // console.log("itemSubFeature:", itemSubFeature);
            return <li key={index}>{itemSubFeature}</li>;
          },
        );
        // console.log("itemSubFeatures:", itemSubFeatures);
        return (
          <ul key={index}>
            {Object.keys(itemFeature)[0]}
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
