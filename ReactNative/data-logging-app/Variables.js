// ./Variables.js

// Constants that are used throughout this application.

export const Variables = {
  CGM: "Dexcom G6 Transmitters, Dexcom G6 Sensors, Etc.",
  PHYSICAL_ACTIVITY: "Running, Having Sex, Sleeping, Etc.",
  PUMP: "Pump, Insulin, Tubing, Etc.",
  FOOD: "Food",
  // OTHER: "Other",
  OTHER: "Other - Misc. And complete list. See below",
};

export const CONSTANTS = {
  CGM: {
    name: "cgm",
    title: "Dexcom G6 Transmitters, Dexcom G6 Sensors, Etc.",
    list: [
      "Replace old sensor for new sensor",
      "Replace old transmitter for new transmitter",
      "Remove old transmitter and then replace the same old transmitter",
      "Mobile loses CGM signal",
      "Pump loses CGM signal",
    ],
    color: "#00ffff",
  },
  FOOD: {
    name: "food",
    title: "Food",
    list: [
      "When I take sugar correction - for example at 2 am",
      "Delayed taking insulin",
    ],
    color: "#5f9ea0",
  },
  PHYSICAL_ACTIVITY: {
    name: "physical_activity",
    title: "Running, Having Sex, Sleeping, Etc.",
    color: "#0000ff",
  },
  PUMP: {
    name: "pump",
    title: "Pump, Insulin, Tubing, Etc.",
    color: "#8a2be2",
  },
  OTHER: {
    name: "other",
    title: "Other - Misc. And complete list. See below",
    color: "#d2691e",
  },
};
