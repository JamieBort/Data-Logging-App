// ./Constants.js

// Constants that are used throughout this application.

// TODO: delete the "Variables" variable.
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

// TODO: Replace `CONSTANTS` with `CONSTANTS_new`. Then rename as `CONSTANTS`.
// TODO: make sure the strings in the dataToCollect array are uniform.
export const CONSTANTS_new = {
  CGM: {
    name: "CGM",
    title: "Dexcom G6 Transmitters, Dexcom G6 Sensors, Etc.",
    description: "Issues that are caused by the cgm.",
    list: [
      {
        title: "Replace old sensor for new sensor",
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
        title: "Replace old transmitter for new transmitter",
        dataToCollect: [
          "TimeStamp",
          "Lot Number",
          "Code",
          "Record a related event?",
        ],
      },
      {
        title:
          "Remove old transmitter and then replace the same old transmitter",
        dataToCollect: [
          "TimeStamp",
          "Lot Number (?)",
          "Code (?)",
          "Record a related event?",
        ],
      },
      {
        title: "Mobile loses CGM signal",
        dataToCollect: [
          "TimeStamp",
          "Circumstances - note field?",
          "Did the pump lose signal too?",
          "Record a related event?",
        ],
      },
      {
        title: "Pump loses CGM signal",
        dataToCollect: [
          "TimeStamp",
          "Circumstances - note field?",
          "Did the CGM lose signal too?",
          "Record a related event?",
        ],
      },
      {
        title: "CGM battery 30 day warning",
        dataToCollect: ["TimeStamp", "Record a related event?"],
      },
      {
        title: "CGM battery 10 day warning",
        dataToCollect: ["TimeStamp", "Record a related event?"],
      },
      {
        title: "Graph is jumpy - data lost - sporadic readings - etc.",
        dataToCollect: ["TimeStamp", "Record a related event?"],
      },
      {
        title: "Sensor or Transmitter is pulled off of me.",
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
  },
  FOOD_INSULIN: {
    name: "Food & Insulin",
    title: "Food - Insulin Issue",
    description:
      "Issues cause by the food or insulin. Nothing caused by the insulin pump nor cgm.",
    list: [
      {
        title: "When I take sugar correction - for example at 2 am",
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
        title: "Delayed taking insulin",
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
        title: "I ate something that made my blood sugar spike",
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
      "Issues that is not already covered by the other group options.",
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
    description: "Issues that are caused by a physical activity.",
    list: [
      {
        title: "When I start/stop exercising",
        dataToCollect: [
          "Start time: TimeStamp",
          "Stop Time: TimeStamp",
          { "Exertion Level": ["low", "medium", "high"] },
          "Record a related event?",
        ],
      },
      {
        title: "When I start/stop sleeping",
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
        title: "In (hot) bathtub or jacuzy.",
        dataToCollect: [
          "TimeStamp",
          { chooseOne: ["duration/elapsed time", "current time -> TimeStamp"] },
          "Record a related event?",
        ],
      },
      {
        title: "Disconnected from pump.",
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
      "Issues that are caused by a something related to the insulin pump.",
    list: [
      {
        title: "Change only tubing",
        dataToCollect: ["TimeStamp", "Record a related event?"],
      },
      {
        title: "Changed an old reservoir for a new reservoir",
        dataToCollect: ["TimeStamp", "Record a related event?"],
      },
      {
        title: "Refilled same old reservoir with insulin",
        dataToCollect: ["TimeStamp", "Record a related event?"],
      },
      {
        title: "Change Complete Infusion Set",
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
          "Personal Profiles: When I activate a particular personal profile", // Pump status - this is missing the "off" status when I have literally turned my pump off. or when the tubing has been primed but I failed to "resume the insulin"
        dataToCollect: [
          "TimeStamp",
          { "Personal Profile": ["Primary2023/DEFAULT", "HALF", "ZERO"] },
          //  ["Primary2023/DEFAULT", "HALF", "ZERO"]
          "Record a related event?",
        ],
      },
      {
        title: "Tender came off my body without me knowing it.",
        dataToCollect: ["TimeStamp", "Record a related event?"],
      },
      {
        title: "Viols of Insulin",
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

// TODO: Replace `CONSTANTS_new` with `CONSTANTS_brainstorm`. Then rename as `CONSTANTS`.

export const CONSTANTS_brainstorm = {
  CGM: {
    name: "CGM",
    title: "Dexcom G6 Transmitters, Dexcom G6 Sensors, Etc.",
    descriptionShort: "Issues that are caused by the cgm.",
    descriptionLong: "",
    list: {
      battery: {
        name: "",
        title: "",
        descriptionShort: "",
        descriptionLong: "",
        issues: [
          { issue: "low battery", dataToCollect: [] },
          { issue: "dead battery", dataToCollect: [] },
        ],
      },
      signal: {
        name: "",
        title: "",
        descriptionShort: "",
        descriptionLong: "",
        issues: [
          { issue: "cell phone lost signal", dataToCollect: [] },
          { issue: "pump lost signal", dataToCollect: [] },
        ],
      },
      sensor: {
        name: "",
        title: "",
        descriptionShort: "",
        descriptionLong: "",
        issues: [
          { issue: "Replace old sensor for new sensor", dataToCollect: [] },
          { issue: "", dataToCollect: [] },
        ],
      },
      transmitter: {
        name: "",
        title: "",
        descriptionShort: "",
        descriptionLong: "",
        issues: [
          {
            issue: "Replace old transmitter for new transmitter",
            dataToCollect: [],
          },
          { issue: "", dataToCollect: [] },
        ],
      },
    },
  },
};

// NOTE:
// Potential data to collect.
// And their schema/data type.
export const typesOFDataToCollect = {
  timestamp: int,
  "lot number": [int, this["comment field required"]],
  code: [String, this["comment field required"]],
  "location On body": [
    [],
    // OR {},
    this["comment field required"],
  ],
  "personal profile": [
    ["Primary2023/DEFAULT", "HALF", "ZERO"],
    this["comment field required"],
  ],
  chooseOne: [
    [
      "Arrived - comment field optional",
      "Started - comment field optional",
      "Issue/problem - comment field required",
      "Used - comment field optional",
    ],
    this["comment field required"],
  ],
  "comment field": String,
  "identifying mark": "To be determined", // for my insulin viols and the pump cartridges
  "Exertion Level": [[String, "or", int], this["comment field required"]],
  "misc./other": [
    this["comment field"],
    [
      "To be determined. Possibly:",
      this["pre-populated dropdown list"],
      this["radio buttons"],
    ],
  ], // catchall for misc. issues
  "comment field required": Boolean,
  "Record a related event?": Boolean, // If true, add another event.
  "radio buttons": [
    "option one",
    "option two",
    "option three",
    "option four opens a short field to enter a brief description",
  ],
  "pre-populated dropdown list": [
    "option one",
    "option two",
    "option three",
    "option four opens a short field to enter a brief description",
  ],
  quantity: int,
  "Did the ____ lose signal too?": Boolean,
  "steps taken to correct": "To be determined", // To be used when I need to take a correction bolus, or other step to lower my sugar.
};
