// ./constants/Constants.js

// Constants that are used throughout this application.

// // TODO: delete the "Variables" variable. MAYBE used in the `./components/FeatureList.js` file. But not anywhere else.
// export const Variables = {
//   CGM: "Dexcom G6 Transmitters, Dexcom G6 Sensors, Etc.",
//   PHYSICAL_ACTIVITY: "Running, Having Sex, Sleeping, Etc.",
//   PUMP: "Pump, Insulin, Tubing, Etc.",
//   FOOD: "Food",
//   // OTHER: "Other",
//   OTHER: "Other - Misc. And complete list. See below",
// };

// // TODO: delete the "CONSTANTS_old" variable.
export const CONSTANTS_old = {
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
    color: "#008b8b",
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
  OTHER: {
    name: "other",
    title: "Other - Misc. And complete list. See below",
    list: [
      "When I eat - for example at 2 am. This one might not be needed",
      "Stayed up all night",
      "Something the doctor will wan to know",
      "Other/Misc",
    ],
    color: "#d2691e",
  },
  PHYSICAL_ACTIVITY: {
    name: "physical_activity",
    title: "Running, Having Sex, Sleeping, Etc.",
    list: [
      "When I start/stop exercising",
      "When I start/stop sleeping",
      "Other Physical Activity",
    ],
    color: "#0000ff",
  },
  PUMP: {
    name: "pump",
    title: "Pump, Insulin, Tubing, Etc.",
    list: [
      "Change only tubing",
      "Changed an old reservoir for a new reservoir",
      "Refilled same old reservoir with insulin",
      "Change Complete Infusion Set",
      "Personal Profiles: When I activate a particular personal profile",
    ],
    color: "#8a2be2",
  },
};

// TODO: make sure the strings in the dataToCollect array are uniform.
export const CONSTANTS = {
  CGM: {
    name: "CGM",
    title: "Dexcom G6 Transmitters, Dexcom G6 Sensors, Etc.",
    description: "Issues that are caused by the cgm - delete me.",
    descriptionShort: "Issues that are caused by the cgm.",
    descriptionLong: "A description that is as long as it needs to be.",
    list: [
      {
        title: "Replace old sensor for new sensor- pasted",
        dataToCollect: [
          [
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
            "Record a related event?",
          ],
        ],
      },
      {
        title: "Replace old transmitter for new transmitter- pasted",
        dataToCollect: [
          "TimeStamp",
          "Lot Number",
          "Code",
          "Record a related event?",
        ],
      },
      {
        title:
          "Remove old transmitter and then replace the same old transmitter- pasted",
        dataToCollect: [
          "TimeStamp",
          "Lot Number (?)",
          "Code (?)",
          "Record a related event?",
        ],
      },
      {
        title: "Mobile loses CGM signal- pasted",
        dataToCollect: [
          "TimeStamp",
          "Circumstances - note field?",
          "Did the pump lose signal too?",
          "Record a related event?",
        ],
      },
      {
        title: "Pump loses CGM signal- pasted",
        dataToCollect: [
          "TimeStamp",
          "Circumstances - note field?",
          "Did the CGM lose signal too?",
          "Record a related event?",
        ],
      },
      {
        title: "CGM battery 30 day warning- pasted",
        dataToCollect: ["TimeStamp", "Record a related event?"],
      },
      {
        title: "CGM battery 10 day warning- pasted",
        dataToCollect: ["TimeStamp", "Record a related event?"],
      },
      {
        title: "Graph is jumpy - data lost - sporadic readings - etc.- pasted",
        dataToCollect: ["TimeStamp", "Record a related event?"],
      },
      {
        title: "Sensor or Transmitter is pulled off of me.- pasted",
        dataToCollect: [
          "TimeStamp",
          { chooseOne: ["duration/elapsed time", "current time -> TimeStamp"] },
          "Record a related event?",
        ],
      },
    ],
    color: "#008b8b",
  },
  CORPORAL_INFORMATION: {
    name: "Corporal Information",
    title: "My weight, my disposition - example stress due to driving, Etc.",
    description: "",
    list: [
      {
        title: "Stress level",
        dataToCollect: ["TimeStamp", "Record a related event?"],
      },
      {
        title: "Disposition",
        dataToCollect: ["TimeStamp", "Record a related event?"],
      },
      {
        title: "Weight",
        dataToCollect: ["TimeStamp", "Record a related event?"],
      },
    ],
    color: "#008b8b",
  },
  FOOD_INSULIN: {
    name: "Food & Insulin",
    title: "Food - Insulin Issue",
    description:
      "Issues cause by the food or insulin. Nothing caused by the insulin pump nor cgm - delete me.",
    descriptionShort:
      "Issues cause by the food or insulin. Nothing caused by the insulin pump nor cgm.",
    descriptionLong: "A description that is as long as it needs to be.",
    list: [
      {
        title: "When I take sugar correction - for example at 2 am- pasted",
        dataToCollect: [
          "TimeStamp",
          { chooseOne: ["duration/elapsed time", "current time -> TimeStamp"] },
          "Quantity - integer",
          "steps taken to correct (see 'steps taken to correct' in the 'typesOFDataToCollect' variable below.)",
          "Circumstances - note field?",
          "Record a related event?",
        ],
      },
      {
        title: "Delayed taking insulin- pasted",
        dataToCollect: [
          "TimeStamp",
          { chooseOne: ["duration/elapsed time", "current time -> TimeStamp"] },
          "Time I should have taken insulin (use this to calculate - offer both)",
          "steps taken to correct (see 'steps taken to correct' in the 'typesOFDataToCollect' variable below.)",
          "amount of time elapsed since I should have taken insulin (or use this to calculate - offer both)",
          "Circumstances - note field?",
          "Record a related event?",
        ],
      },
      {
        title: "I ate something that made my blood sugar spike- pasted",
        dataToCollect: [
          "TimeStamp",
          "Carbohydrates Quantity - integer",
          "Insulin Quantity - integer",
          "steps taken to correct (see 'steps taken to correct' in the 'typesOFDataToCollect' variable below.)",
          "Circumstances - note field?",
          "Record a related event?",
        ],
      },
    ],
    color: "#5f9ea0",
  },
  OTHER: {
    name: "Other",
    description:
      "Issues that is not already covered by the other group options - delete me.",
    descriptionShort:
      "Issues that is not already covered by the other group options.",
    descriptionLong: "A description that is as long as it needs to be.",
    title: "Other - Misc. And complete list. See below",
    groupName: "Other",
    groupTitle: "Other - Misc. And complete list. See below",
    groupDescription:
      "Issues that is not already covered by the other group options.",
    list: [
      {
        title: "When I eat - for example at 2 am. This one might not be needed",
        issueTitle:
          "When I eat - for example at 2 am. This one might not be needed",
        issueDescription:
          "Long description for another column in case others need to read this database or I share the info with them.",
        dataToCollect: [
          "TimeStamp",
          "Circumstances - note field?",
          "Record a related event?",
        ],
      },
      {
        title: "Stayed up all night",
        dataToCollect: [
          "TimeStamp",
          "Circumstances - note field?",
          "Record a related event?",
        ],
      },
      {
        title: "Something the doctor will want to know",
        dataToCollect: [
          "TimeStamp",
          "Circumstances - note field?",
          "Record a related event?",
        ],
      },
      {
        title: "Went running hard and hadn't drunk water for days....",
        dataToCollect: [
          "TimeStamp",
          "Circumstances - note field?",
          "Record a related event?",
        ],
      },
      {
        title: "Other/Misc",
        dataToCollect: [
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
          "Record a related event?",
        ],
      },
      {
        title:
          "For the rest of the data points that are to be collect, see the Data points to collect section of the Personal Dashboard Business Requirements Google Drive doc.",
        dataToCollect: ["TimeStamp", "Record a related event?"],
      },
    ],
    color: "#d2691e",
  },
  PHYSICAL_ACTIVITY: {
    name: "Physical Activity",
    title: "Running, Having Sex, Sleeping, Etc.",
    description: "Issues that are caused by a physical activity - delete me.",
    descriptionShort: "Issues that are caused by a physical activity.",
    descriptionLong: "A description that is as long as it needs to be.",
    list: [
      {
        title: "When I start/stop exercising- pasted",
        dataToCollect: [
          "Start time: TimeStamp",
          "Stop Time: TimeStamp",
          { "Exertion Level": ["low", "medium", "high"] },
          "Record a related event?",
        ],
      },
      {
        title: "When I start/stop sleeping- pasted",
        dataToCollect: [
          "Start time: TimeStamp",
          "Stop Time: TimeStamp",
          { "Exertion Level": ["low", "medium", "high"] },
          "Record a related event?",
        ],
      },
      {
        title: "Other Physical Activity",
        dataToCollect: [
          "Start time: TimeStamp",
          "Stop Time: TimeStamp",
          { "Exertion Level": ["low", "medium", "high"] },
          "Record a related event?",
        ],
      },
      {
        title: "In (hot) bathtub or jacuzy- pasted.",
        dataToCollect: [
          "TimeStamp",
          { chooseOne: ["duration/elapsed time", "current time -> TimeStamp"] },
          "Record a related event?",
        ],
      },
      {
        title: "Disconnected from pump- pasted",
        dataToCollect: [
          "TimeStamp",
          { chooseOne: ["duration/elapsed time", "current time -> TimeStamp"] },
          "Record a related event?",
        ],
      },
    ],
    color: "#0000ff",
  },
  PUMP: {
    name: "Pump",
    title: "Pump, Insulin, Tubing, Etc.",
    description:
      "Issues that are caused by a something related to the insulin pump - delete me.",
    descriptionShort:
      "Issues that are caused by a something related to the insulin pump.",
    descriptionLong: "A description that is as long as it needs to be.",
    list: [
      {
        title: "Change only tubing- pasted",
        dataToCollect: ["TimeStamp", "Record a related event?"],
      },
      {
        title: "Changed an old reservoir for a new reservoir- pasted",
        dataToCollect: ["TimeStamp", "Record a related event?"],
      },
      {
        title: "Refilled same old reservoir with insulin- pasted",
        dataToCollect: ["TimeStamp", "Record a related event?"],
      },
      {
        title: "Change Complete Infusion Set - tube and tender- pasted",
        dataToCollect: [
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
          "Record a related event?",
        ],
      },
      {
        title:
          "Personal Profiles: When I activate a particular personal profile- pasted", // Pump status - this is missing the "off" status when I have literally turned my pump off. or when the tubing has been primed but I failed to "resume the insulin"
        dataToCollect: [
          "TimeStamp",
          { "Personal Profile": ["Primary2023/DEFAULT", "HALF", "ZERO"] },
          //  ["Primary2023/DEFAULT", "HALF", "ZERO"]
          "Record a related event?",
        ],
      },
      {
        title: "Tender came off my body without me knowing it- pasted.",
        dataToCollect: ["TimeStamp", "Record a related event?"],
      },
      {
        title: "Viols of Insulin- pasted",
        dataToCollect: [
          "TimeStamp",
          {
            chooseOne: [
              "Arrived - comment field optional",
              "Started - comment field optional",
              "Issue/problem - comment field required",
              "Used - comment field optional",
            ],
          },
          "LotNumber or identifying mark",
          "Circumstances - note field?",
          // "Which info to collect?",
          // "For each viol the",
          // "time stamp",
          // "identifying number/mark",
          // {
          //   identifyingMark: "01",
          //   arrival: "timestamp",
          //   lastUsed: "timestamp",
          // },
          // {
          //   identifyingMark: "02",
          //   arrival: "timestamp",
          //   lastUsed: "timestamp",
          // },
          // {
          //   identifyingMark: "03",
          //   arrival: "timestamp",
          //   lastUsed: "timestamp",
          // },
          // {
          //   identifyingMark: "04",
          //   arrival: "timestamp",
          //   lastUsed: "timestamp",
          // },
          // {
          //   identifyingMark: "05",
          //   arrival: "timestamp",
          //   lastUsed: "timestamp",
          // },
          "Record a related event?",
        ],
      },
    ],
    color: "#8a2be2",
  },
};

// // TODO: Replace `CONSTANTS` with `CONSTANTS_brainstorm`. Then rename as `CONSTANTS`.
// export const CONSTANTS_brainstorm = {
//   CGM: {
//     name: "CGM",
//     title: "Dexcom G6 Transmitters, Dexcom G6 Sensors, Etc.",
//     descriptionShort: "Issues that are caused by the cgm.",
//     descriptionLong: "A description that is as long as it needs to be.",
//     items: {
//       battery: {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           { issue: "CGM battery XX day warning", dataToCollect: [] },
//           { issue: "CGM battery X day warning", dataToCollect: [] },
//           { issue: "Battery died", dataToCollect: [] },
//           {
//             issue: "Sensor or Transmitter is pulled off of me.",
//             dataToCollect: [],
//           },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//       signal: {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           { issue: "Mobile lost CGM signal", dataToCollect: [] },
//           { issue: "Mobile gains CGM signal", dataToCollect: [] },
//           { issue: "Pump lost CGM signal", dataToCollect: [] },
//           { issue: "Pump gains CGM signal", dataToCollect: [] },
//           {
//             issue: "Graph is jumpy - data lost - sporadic readings - etc.",
//             dataToCollect: [],
//           },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//       sensor: {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           { issue: "Replace old sensor for new sensor", dataToCollect: [] },
//           { issue: "Replace old sensor for new sensor", dataToCollect: [] },
//         ],
//       },
//       transmitter: {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           {
//             issue: "Replace old transmitter for new transmitter",
//             dataToCollect: [],
//           },
//           {
//             issue:
//               "Remove old transmitter and then replace the same old transmitter",
//             dataToCollect: [],
//           },
//           {
//             issue: "",
//             dataToCollect: [],
//           },
//           {
//             issue: "",
//             dataToCollect: [],
//           },
//           {
//             issue: "",
//             dataToCollect: [],
//           },
//         ],
//       },
//     },
//     color: "#008b8b",
//   },
//   CORPORAL_INFORMATION: {
//     name: "Corporal Information",
//     title: "My weight, my disposition - example stress due to driving, Etc.",
//     descriptionShort: "A short description.",
//     descriptionLong: "A description that is as long as it needs to be.",
//     items: {
//       list: [
//         {
//           title: "Stress level",
//           dataToCollect: ["TimeStamp", "Record a related event?"],
//         },
//         {
//           title: "Disposition",
//           dataToCollect: ["TimeStamp", "Record a related event?"],
//         },
//         {
//           title: "Weight",
//           dataToCollect: ["TimeStamp", "Record a related event?"],
//         },
//       ],
//     },
//     color: "#008b8b",
//   },
//   FOOD_INSULIN: {
//     name: "Food & Insulin",
//     title: "Food - Insulin Issue",
//     descriptionShort:
//       "Issues cause by the food or insulin. Nothing caused by the insulin pump nor cgm.",
//     descriptionLong: "A description that is as long as it needs to be.",
//     items: {
//       food: {
//         name: "",
//         title: "",
//         descriptionShort: "Too much food. Too little food. Caused by food.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           {
//             issue: "I ate something that made my blood sugar spike",
//             dataToCollect: [],
//           },
//           { issue: "Delayed taking insulin", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//       insulin: {
//         name: "",
//         title: "",
//         descriptionShort:
//           "Too much insulin. Too little insulin. Caused by insulin.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//       correction: {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           {
//             issue: "When I take sugar correction - for example at 2 am",
//             dataToCollect: [],
//           },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//       04: {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//     },
//     color: "#5f9ea0",
//   },
//   PHYSICAL_ACTIVITY: {
//     name: "Physical Activity",
//     title: "Running, Having Sex, Sleeping, Etc.",
//     descriptionShort: "Issues that are caused by a physical activity.",
//     descriptionLong: "A description that is as long as it needs to be.",
//     items: {
//       exercise: {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           { issue: "Start exercising", dataToCollect: [] },
//           { issue: "Stop exercising", dataToCollect: [] },
//           { issue: "Start sleeping", dataToCollect: [] },
//           { issue: "Stop sleeping", dataToCollect: [] },
//           { issue: "In (hot) bathtub or jacuzy.", dataToCollect: [] },
//           { issue: "Get out of (hot) bathtub or jacuzy.", dataToCollect: [] },
//           { issue: "Disconnected pump from tender", dataToCollect: [] },
//           { issue: "Reattached pump to tender", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//       02: {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//       03: {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//       04: {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//     },
//     color: "#0000ff",
//   },
//   PUMP: {
//     name: "Pump",
//     title: "Pump, Insulin, Tubing, Etc.",
//     descriptionShort:
//       "Issues that are caused by something related to the insulin pump.",
//     descriptionLong: "A description that is as long as it needs to be.",
//     items: {
//       reservoir: {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           {
//             issue: "Refilled same old reservoir with insulin",
//             dataToCollect: [],
//           },
//           {
//             issue: "Replaced an old reservoir for a new reservoir",
//             dataToCollect: [],
//           },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//       tubing: {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           { issue: "Change only tubing", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//       tender: {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           {
//             issue: "Tender came off my body without me knowing it",
//             dataToCollect: [],
//           },
//           {
//             issue: "Change Complete Infusion Set - tube and tender",
//             dataToCollect: [],
//           },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//       "insulin viols": {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           { issue: "Receive this insulin viol", dataToCollect: [] },
//           { issue: "Open/start using this insulin viol", dataToCollect: [] },
//           { issue: "Empty/finish using this insulin viol", dataToCollect: [] },
//           {
//             issue:
//               "Report incident with this insulin viol - frozen for example",
//             dataToCollect: [],
//           },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//       "pump status": {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           {
//             issue: "Activated the ___ profile",
//             dataToCollect: [
//               "TimeStamp",
//               {
//                 chooseOne: [
//                   "duration/elapsed time",
//                   "current time -> TimeStamp",
//                 ],
//               },
//               "choose between default, half, and zero",
//               "Record a related event?",
//             ],
//           },
//           {
//             issue:
//               "Failed to 'resume the insulin' after priming the tubing or priming the tender",
//             dataToCollect: [
//               "TimeStamp",
//               {
//                 chooseOne: [
//                   "duration/elapsed time",
//                   "current time -> TimeStamp",
//                 ],
//               },
//               "Choose between priming the tubing and priming the tender",
//               "Record a related event?",
//             ],
//           },
//           { issue: "Literally turned pump off", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//       06: {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//       07: {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//     },
//     color: "#8a2be2",
//   },

//   next_one: {
//     name: "",
//     title: "",
//     descriptionShort: "A short description.",
//     descriptionLong: "A description that is as long as it needs to be.",
//     items: {
//       01: {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//       02: {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//       03: {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//       04: {
//         name: "",
//         title: "",
//         descriptionShort: "A brief description.",
//         descriptionLong: "A description that is as long as it needs to be.",
//         issues: [
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//           { issue: "", dataToCollect: [] },
//         ],
//       },
//     },
//     color: "",
//   },
// };

// // NOTE:
// // Potential data to collect.
// // And their schema/data type.
// export const typesOFDataToCollect = {
//   timestamp: int,
//   "lot number": [int, this["comment field required"]],
//   code: [String, this["comment field required"]],
//   "location On body": [
//     [],
//     // OR {},
//     this["comment field required"],
//   ],
//   "personal profile": [
//     ["Primary2023/DEFAULT", "HALF", "ZERO"],
//     this["comment field required"],
//   ],
//   chooseOne: [
//     [
//       "Arrived - comment field optional",
//       "Started - comment field optional",
//       "Issue/problem - comment field required",
//       "Used - comment field optional",
//     ],
//     this["comment field required"],
//   ],
//   "comment field": String,
//   "identifying mark": "To be determined", // for my insulin viols and the pump cartridges
//   "Exertion Level": [[String, "or", int], this["comment field required"]],
//   "misc./other": [
//     this["comment field"],
//     [
//       "To be determined. Possibly:",
//       this["pre-populated dropdown list"],
//       this["radio buttons"],
//     ],
//   ], // catchall for misc. issues
//   "comment field required": Boolean,
//   "Record a related event?": Boolean, // If true, add another event.
//   "radio buttons": [
//     "option one",
//     "option two",
//     "option three",
//     "option four opens a short field to enter a brief description",
//   ],
//   "pre-populated dropdown list": [
//     "option one",
//     "option two",
//     "option three",
//     "option four opens a short field to enter a brief description",
//   ],
//   quantity: int,
//   "Did the ____ lose signal too?": Boolean,
//   "steps taken to correct": "To be determined", // To be used when I need to take a correction bolus, or other step to lower my sugar.
// };
