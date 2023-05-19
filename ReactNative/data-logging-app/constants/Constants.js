// ./constants/Constants.js

// Constants that are used throughout this application.

// TODO: delete the "CONSTANTS_old" variable.
export const CONSTANTS_old = {
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
            "- pasted",
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
          "- pasted",
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
          "- pasted",
        ],
      },
      {
        title: "Mobile loses CGM signal- pasted",
        dataToCollect: [
          "TimeStamp",
          "Circumstances - note field?",
          "Did the pump lose signal too?",
          "Record a related event?",
          "- pasted",
        ],
      },
      {
        title: "Pump loses CGM signal- pasted",
        dataToCollect: [
          "TimeStamp",
          "Circumstances - note field?",
          "Did the CGM lose signal too?",
          "Record a related event?",
          "- pasted",
        ],
      },
      {
        title: "CGM battery 30 day warning- pasted",
        dataToCollect: ["TimeStamp", "Record a related event?", "- pasted"],
      },
      {
        title: "CGM battery 10 day warning- pasted",
        dataToCollect: ["TimeStamp", "Record a related event?", "- pasted"],
      },
      {
        title: "Graph is jumpy - data lost - sporadic readings - etc.- pasted",
        dataToCollect: ["TimeStamp", "Record a related event?", "- pasted"],
      },
      {
        title: "Sensor or Transmitter is pulled off of me.- pasted",
        dataToCollect: [
          "TimeStamp",
          { chooseOne: ["duration/elapsed time", "current time -> TimeStamp"] },
          "Record a related event?",
          "- pasted",
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
        title: "Stress level- pasted",
        dataToCollect: ["TimeStamp", "Record a related event?", "- pasted"],
      },
      {
        title: "Disposition- pasted",
        dataToCollect: ["TimeStamp", "Record a related event?", "- pasted"],
      },
      {
        title: "Weight- pasted",
        dataToCollect: ["TimeStamp", "Record a related event?", "- pasted"],
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
          "- pasted",
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
          "- pasted",
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
          "- pasted",
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
    // groupName: "Other",
    // groupTitle: "Other - Misc. And complete list. See below",
    // groupDescription:
    //   "Issues that is not already covered by the other group options.",
    list: [
      {
        title: "When I eat - for example at 2 am. This one might not be needed",
        // issueTitle:
        //   "When I eat - for example at 2 am. This one might not be needed",
        // issueDescription:
        //   "Long description for another column in case others need to read this database or I share the info with them.",
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
        title: "Other/Misc issue or 'add feature' comment",
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
          "- pasted",
        ],
      },
      {
        title: "When I start/stop sleeping- pasted",
        dataToCollect: [
          "Start time: TimeStamp",
          "Stop Time: TimeStamp",
          { "Exertion Level": ["low", "medium", "high"] },
          "Record a related event?",
          "- pasted",
        ],
      },
      {
        title: "Other Physical Activity- pasted",
        dataToCollect: [
          "Start time: TimeStamp",
          "Stop Time: TimeStamp",
          { "Exertion Level": ["low", "medium", "high"] },
          "Record a related event?",
          "- pasted",
        ],
      },
      {
        title: "In (hot) bathtub or hot tub- pasted.",
        dataToCollect: [
          "TimeStamp",
          { chooseOne: ["duration/elapsed time", "current time -> TimeStamp"] },
          "Record a related event?",
          "- pasted",
        ],
      },
      {
        title: "Disconnected from pump- pasted",
        dataToCollect: [
          "TimeStamp",
          { chooseOne: ["duration/elapsed time", "current time -> TimeStamp"] },
          "Record a related event?",
          "- pasted",
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
        dataToCollect: ["TimeStamp", "Record a related event?", "- pasted"],
      },
      {
        title: "Changed an old reservoir for a new reservoir- pasted",
        dataToCollect: ["TimeStamp", "Record a related event?", "- pasted"],
      },
      {
        title: "Refilled same old reservoir with insulin- pasted",
        dataToCollect: ["TimeStamp", "Record a related event?", "- pasted"],
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
          "- pasted",
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
          "- pasted",
        ],
      },
      {
        title: "Tender came off my body without me knowing it- pasted.",
        dataToCollect: ["TimeStamp", "Record a related event?", "- pasted"],
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
          "- pasted",
        ],
      },
    ],
    color: "#8a2be2",
  },
};

// TODO: make sure the strings in the dataToCollect array are uniform.
export const CONSTANTS = {
  CGM: {
    name: "CGM",
    title: "Dexcom G6 Transmitters, Dexcom G6 Sensors, Etc.",
    descriptionShort: "Issues that are caused by the cgm.",
    descriptionLong: "A description that is as long as it needs to be.",
    items: {
      battery: {
        name: "",
        title: "",
        descriptionShort: "A brief description.",
        descriptionLong: "A description that is as long as it needs to be.",
        issues: [
          // Battery? button -> warning or died? -> 30/day warning? 10 day warning?
          {
            issue: "CGM battery XX day warning",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              { "Record a related event?": Boolean },
              { "comment field required": Boolean },
            ],
          },
          {
            issue: "CGM battery X day warning",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              { "Record a related event?": Boolean },
              { "comment field required": Boolean },
            ],
          },
          {
            issue: "Battery died",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              { "Record a related event?": Boolean },
              { "comment field required": Boolean },
            ],
          },
          // { issue: "", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
        ],
      },
      signal: {
        name: "",
        title: "",
        descriptionShort: "A brief description.",
        descriptionLong: "A description that is as long as it needs to be.",
        issues: [
          // Signal button -> lost signal or gained signal? mobile or pump or both? or graph is jumpy?
          {
            issue: "Mobile lost CGM signal",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              { "Record a related event?": Boolean },
              { "comment field required": Boolean },
            ],
          },
          {
            issue: "Record an error, alert, or warning.",
            dataToCollect: [],
          },
          {
            issue: "Mobile gains CGM signal",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              { "Record a related event?": Boolean },
              { "comment field required": Boolean },
            ],
          },
          {
            issue: "Pump lost CGM signal",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              { "Record a related event?": Boolean },
              { "comment field required": Boolean },
            ],
          },
          {
            issue: "Pump gains CGM signal",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              { "Record a related event?": Boolean },
              { "comment field required": Boolean },
            ],
          },
          {
            issue: "Record an error, alert, or warning.",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              { "Record a related event?": Boolean },
              { "comment field required": Boolean },
            ],
          },
          // { issue: "", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
        ],
      },
      sensor: {
        name: "",
        title: "",
        descriptionShort: "A brief description.",
        descriptionLong: "A description that is as long as it needs to be.",
        issues: [
          {
            issue: "Graph is jumpy - data lost - sporadic readings - etc.",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              { "Record a related event?": Boolean },
              { "comment field required": Boolean },
            ],
          },
          {
            issue: "Replace (old) sensor (for new sensor)",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              { "Record a related event?": Boolean },
              { "comment field required": Boolean },
              "Location on body",
              "Lot Number",
              "Sensor Code",
            ],
          },
          {
            issue: "Sensor came off of me.",
            dataToCollect: [
              "TimeStamp",
              { "Record a related event?": Boolean },
              { "comment field required": Boolean },
              // { chooseOne: ["Sensor", "Transmitter"] },
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
            ],
          },
          {
            issue: "Record an error, alert, or warning.",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              { "Record a related event?": Boolean },
              { "comment field required": Boolean },
            ],
          },
        ],
      },
      transmitter: {
        name: "",
        title: "",
        descriptionShort: "A brief description.",
        descriptionLong: "A description that is as long as it needs to be.",
        issues: [
          // Transmitter button? -> reuse old transmitter? or start a new one?
          {
            issue: "Replace old transmitter for new transmitter",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              { "Record a related event?": Boolean },
              { "comment field required": Boolean },
              "Lot Number",
              "Transmitter Code",
            ],
          },
          {
            issue:
              "Remove old transmitter and then replace the same old transmitter",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              { "Record a related event?": Boolean },
              { "comment field required": Boolean },
            ],
          },
          {
            issue: "Record an error, alert, or warning.",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              { "Record a related event?": Boolean },
              { "comment field required": Boolean },
            ],
          },
        ],
      },
    },
    color: "#008b8b",
  },
  CORPORAL_INFORMATION: {
    name: "Corporal Information",
    title: "My weight, my disposition - example stress due to driving, Etc.",
    descriptionShort: "A short description.",
    descriptionLong: "A description that is as long as it needs to be.",
    items: {
      renameMeToo: {
        name: "",
        title: "",
        descriptionShort: "Too much food. Too little food. Caused by food.",
        descriptionLong: "A description that is as long as it needs to be.",
        issues: [
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
    },
    color: "#008b8b",
  },
  FOOD_INSULIN: {
    name: "Food & Insulin",
    title: "Food - Insulin Issue",
    descriptionShort:
      "Issues cause by the food or insulin. Nothing caused by the insulin pump nor cgm. Something as a result of my decision, rather than device issue.",
    descriptionLong: "A description that is as long as it needs to be.",
    items: {
      food: {
        name: "",
        title: "",
        descriptionShort: "Too much food. Too little food. Caused by food.",
        descriptionLong: "A description that is as long as it needs to be.",
        issues: [
          {
            issue: "I ate something that made my blood sugar spike",
            dataToCollect: [
              "TimeStamp",
              "Carbohydrates Quantity - integer",
              "Insulin Quantity - integer",
              "steps taken to correct (see 'steps taken to correct' in the 'typesOFDataToCollect' variable below.)",
              "Circumstances - note field?",
              "Record a related event?",
            ],
          },
          // { issue: "", dataToCollect: [] },
        ],
      },
      insulin: {
        name: "",
        title: "",
        descriptionShort:
          "Too much insulin. Too little insulin. Caused by insulin.",
        descriptionLong: "A description that is as long as it needs to be.",
        issues: [
          {
            issue: "Delayed taking insulin",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              "Time I should have taken insulin (use this to calculate - offer both)",
              "steps taken to correct (see 'steps taken to correct' in the 'typesOFDataToCollect' variable below.)",
              "amount of time elapsed since I should have taken insulin (or use this to calculate - offer both)",
              "Circumstances - note field?",
              "Record a related event?",
            ],
          },
          // { issue: "", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
        ],
      },
      bolus: {
        name: "",
        title: "",
        descriptionShort: "A brief description.",
        descriptionLong: "A description that is as long as it needs to be.",
        issues: [
          {
            issue: "correction",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              "Quantity - integer",
              "steps taken to correct (see 'steps taken to correct' in the 'typesOFDataToCollect' variable below.)",
              "Circumstances - note field?",
              "Record a related event?",
            ],
          },
          { issue: "bolus over duration/time", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
        ],
      },
      // correction: {
      //   name: "",
      //   title: "",
      //   descriptionShort: "A brief description.",
      //   descriptionLong: "A description that is as long as it needs to be.",
      //   issues: [
      //     {
      //       issue: "When I take sugar correction - for example at 2 am",
      //       dataToCollect: [],
      //     },
      //   ],
      // },
    },
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
    items: {
      renameMe: {
        name: "",
        title: "",
        descriptionShort: "???????????",
        descriptionLong: "A description that is as long as it needs to be.",
        issues: [
          {
            title:
              "When I eat - for example at 2 am. This one might not be needed",
            // issueTitle:
            //   "When I eat - for example at 2 am. This one might not be needed",
            // issueDescription:
            //   "Long description for another column in case others need to read this database or I share the info with them.",
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
            title: "Other/Misc issue or 'add feature' comment",
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
      },
    },
    color: "#d2691e",
  },
  PHYSICAL_ACTIVITY: {
    name: "Physical Activity",
    title: "Running, Having Sex, Sleeping, Etc.",
    descriptionShort: "Issues that are caused by a physical activity.",
    descriptionLong: "A description that is as long as it needs to be.",
    items: {
      exercise: {
        name: "",
        title: "",
        descriptionShort: "A brief description.",
        descriptionLong: "A description that is as long as it needs to be.",
        issues: [
          {
            issue: "Start exercising",
            dataToCollect: [
              "Start time: TimeStamp",
              "Stop Time: TimeStamp",
              { "Exertion Level": ["low", "medium", "high"] },
              "Record a related event?",
            ],
          },
          {
            issue: "Stop exercising",
            dataToCollect: [
              "Start time: TimeStamp",
              "Stop Time: TimeStamp",
              { "Exertion Level": ["low", "medium", "high"] },
              "Record a related event?",
            ],
          },
          {
            issue: "Start sleeping",
            dataToCollect: [
              "Start time: TimeStamp",
              "Stop Time: TimeStamp",
              { "Exertion Level": ["low", "medium", "high"] },
              "Record a related event?",
            ],
          },
          {
            issue: "Stop sleeping",
            dataToCollect: [
              "Start time: TimeStamp",
              "Stop Time: TimeStamp",
              { "Exertion Level": ["low", "medium", "high"] },
              "Record a related event?",
            ],
          },
          {
            issue: "In (hot) bathtub or hot tub.",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              "Record a related event?",
            ],
          },
          {
            issue: "Get out of (hot) bathtub or hot tub.",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              "Record a related event?",
            ],
          },
          {
            issue: "Disconnected pump from tender",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              "Record a related event?",
            ],
          },
          {
            issue: "Reattached pump to tender",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
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
          // { issue: "", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
        ],
      },
    },
    color: "#0000ff",
  },
  PUMP: {
    name: "Pump",
    title: "Pump, Insulin, Tubing, Etc.",
    descriptionShort:
      "Issues that are caused by something related to the insulin pump.",
    descriptionLong: "A description that is as long as it needs to be.",
    items: {
      reservoir: {
        name: "",
        title: "",
        descriptionShort: "A brief description.",
        descriptionLong: "A description that is as long as it needs to be.",
        issues: [
          {
            issue: "Refilled reservoir",
            dataToCollect: [
              "timestamp",
              { "Record a related event?": Boolean },
              { "comment field required": Boolean },
              "choose: new reservoir - identify it, old reservoir - choose from list ",
              "Lot Number",
            ],
          },
          {
            issue: "Refilled same old reservoir with insulin",
            dataToCollect: [
              "timestamp",
              "same viol as last time? yes-default, no - choose from list",
              "Lot Number",
              "Record a related event?",
            ],
          },
          {
            issue: "Replaced an old reservoir for a new reservoir",
            dataToCollect: [],
          },
          // { issue: "", dataToCollect: [] },
        ],
      },
      tubing: {
        name: "",
        title: "",
        descriptionShort: "A brief description.",
        descriptionLong: "A description that is as long as it needs to be.",
        issues: [
          { issue: "Change only tubing", dataToCollect: [] },
          {
            issue: "Change Complete Infusion Set - tube and tender",

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
        ],
      },
      tender: {
        name: "",
        title: "",
        descriptionShort: "A brief description.",
        descriptionLong: "A description that is as long as it needs to be.",
        issues: [
          {
            issue: "Tender came off my body without me knowing it",
            dataToCollect: ["TimeStamp", "Record a related event?"],
          },
          { issue: "Insert new tender", dataToCollect: ["Location on body"] },
        ],
      },
      "insulin viols": {
        name: "",
        title: "",
        descriptionShort: "A brief description.",
        descriptionLong: "A description that is as long as it needs to be.",
        issues: [
          {
            issue: "Receive this insulin viol",
            dataToCollect: [
              "TimeStamp",
              "Lot Number",
              {
                chooseOne: [
                  "Arrived - comment field optional",
                  "Started - comment field optional",
                  "Issue/problem - comment field required",
                  "Used - comment field optional",
                ],
              },
              "identifying mark",
            ],
          },
          {
            issue: "Open/start using this insulin viol",
            dataToCollect: ["identifying mark"],
          },
          {
            issue: "Empty/finish using this insulin viol",
            dataToCollect: ["identifying mark"],
          },
          {
            issue:
              "Report incident with this insulin viol - frozen for example",
            dataToCollect: ["identifying mark"],
          },
          // { issue: "", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
        ],
      },
      "pump status": {
        name: "",
        title: "Update Pump Status",
        descriptionShort: "A brief description.",
        descriptionLong: "A description that is as long as it needs to be.",
        issues: [
          {
            issue: "Activated the ___ profile",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              {
                chooseOne: [
                  "pump is off",
                  "Primary2023/DEFAULT",
                  "HALF",
                  "ZERO",
                ],
              },
              "Record a related event?",
            ],
          },
          {
            issue:
              "Failed to 'resume the insulin' after priming the tubing or priming the tender",
            dataToCollect: [
              "TimeStamp",
              {
                chooseOne: [
                  "duration/elapsed time",
                  "current time -> TimeStamp",
                ],
              },
              {
                chooseOne: ["Priming the tubing", "Priming the tender"],
              },
              "Record a related event?",
            ],
          },
          { issue: "Literally turned pump off", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
        ],
      },
    },
    color: "#8a2be2",
  },

  next_one: {
    name: "",
    title: "",
    descriptionShort: "A short description.",
    descriptionLong: "A description that is as long as it needs to be.",
    items: {
      "01": {
        name: "",
        title: "",
        descriptionShort: "A brief description.",
        descriptionLong: "A description that is as long as it needs to be.",
        issues: [
          // { issue: "", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
        ],
      },
      "02": {
        name: "",
        title: "",
        descriptionShort: "A brief description.",
        descriptionLong: "A description that is as long as it needs to be.",
        issues: [
          // { issue: "", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
        ],
      },
      "03": {
        name: "",
        title: "",
        descriptionShort: "A brief description.",
        descriptionLong: "A description that is as long as it needs to be.",
        issues: [
          // { issue: "", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
        ],
      },
      "04": {
        name: "",
        title: "",
        descriptionShort: "A brief description.",
        descriptionLong: "A description that is as long as it needs to be.",
        issues: [
          // { issue: "", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
          // { issue: "", dataToCollect: [] },
        ],
      },
    },
    color: "",
  },
};

// // NOTE:
// // Potential data to collect.
// // And their schema/data type.
// export const typesOFDataToCollect = {
//   timestamp: int,
//   //   "lot number": [int, this["comment field required"]],
//   //   code: [String, this["comment field required"]],
//   //   "location On body": [
//   //     [],
//   //     // OR {},
//   //     this["comment field required"],
//   //   ],
//   //   "personal profile": [
//   //     ["Primary2023/DEFAULT", "HALF", "ZERO"],
//   //     this["comment field required"],
//   //   ],
//   chooseAtLeastOne: [],
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
//   //   "identifying mark": "To be determined", // for my insulin viols and the pump cartridges
//   //   "Exertion Level": [[String, "or", int], this["comment field required"]],
//   //   "misc./other": [
//   //     this["comment field"],
//   //     [
//   //       "To be determined. Possibly:",
//   //       this["pre-populated dropdown list"],
//   //       this["radio buttons"],
//   //     ],
//   //   ], // catchall for misc. issues
//   "comment field required": Boolean,
//   //   "Record a related event?": Boolean, // If true, add another event.
//   //   "radio buttons": [
//   //     "option one",
//   //     "option two",
//   //     "option three",
//   //     "option four opens a short field to enter a brief description",
//   //   ],
//   //   "pre-populated dropdown list": [
//   //     "option one",
//   //     "option two",
//   //     "option three",
//   //     "option four opens a short field to enter a brief description",
//   //   ],
//   //   quantity: int,
//   //   "Did the ____ lose signal too?": Boolean,
//   //   "steps taken to correct": "To be determined", // To be used when I need to take a correction bolus, or other step to lower my sugar.
//   dexcomClarityAppErrorOrWarningCode: {
//     "0001": "",
//     warning: "",
//     error: "",
//     "Signal Loss":
//       "This alert tells you when you’re not getting Dexcom G6 readings. Your display device may be too far from your transmitter or there may be something, such as a wall or water, between your transmitter and your display device. ",
//     "Sensor Error":
//       "...it means the sensor is temporarily unable to measure the glucose OR your components are not communicating. (from https://www.dexcom.com/en-us/faqs/what-does-sensor-error-alert-mean). And 'During a sensor error, your transmitter is communicating with your display device but is unable to detect the correct glucose value.' (from https://www.dexcom.com/en-ca/faqs/what-is-the-difference-between-signal-loss-sensor-error-no-readings)",
//     "No Readings":
//       "'The No Readings alert means the sensor is temporarily unable to measure glucose due to something blocking the sensor’s Bluetooth connection. ' (from https://www.dexcom.com/en-ca/faqs/what-is-the-difference-between-signal-loss-sensor-error-no-readings). And see https://www.dexcom.com/en-us/faqs/what-does-no-readings-alert-mean",
//     "Urgent Low": "",
//     "Urgent Low Soon": "",
//     "Low Glucose Alert": "",
//     "High Glucose Alert": "",
//   }, // populate this as I learn them.
// };
