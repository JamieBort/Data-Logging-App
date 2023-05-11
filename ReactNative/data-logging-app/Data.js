// Data.js

// My data object that lists all the features I want to implement.
// import { Variables } from "./Variables";

export const Data_Object = {
  cgm: [
    "Variables.ONE",
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
    "Variables.TWO",
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
    "Variables.THREE",
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
