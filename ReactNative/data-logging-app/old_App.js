// ./App.js

// TODO: Look into the use cases for <SafeAreaView> and consider using it.

// import React, { Component } from "react";

import {
  //  TODO: replace Alert with a modal.
  Alert,
  // TODO: replace Button with Pressable.
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import {
  AIRTABLE_BASE_ID_DATA_LOGGING_BASE,
  TABLE_ID,
  AIRTABLE_TOKEN,
  wrong_TOKEN,
} from "@env";

import React, { useState, useEffect } from "react";
import ToggleSwitch from "./ui/ToggleSwitch";
import FeatureList from "./components/FeatureList";
import ToggleButton from "./ui/ToggleButton";
import { CONSTANTS, CONSTANTS_old } from "./constants/Constants";
// import ListAllComponent from "./ListAllComponent";
import Group from "./components/Group";
import Separator from "./ui/Separator";
import PressableComponent from "./ui/PressableComponent";
import ModalComponent from "./components/ModalComponent";
import TogglePressable from "./TogglePressable";

// // console.log("CONSTANTS_old:", CONSTANTS_old);
// console.log("CONSTANTS_old.CGM:", CONSTANTS_old.CGM);
// // console.log("CONSTANTS:", CONSTANTS);
// console.log("CONSTANTS.CGM:", CONSTANTS.CGM);
// console.log("CONSTANTS.CGM.color:", CONSTANTS.CGM.color);

const items = Object.entries(CONSTANTS.CGM.items);

// const App = () => {
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDelay: false,
      lastEvent: ["There is no entry."],
      isStatus: {
        1: false,
        2: false,
        3: false,
        4: false,
      },
    };
  }

  // const [isDelay, setIsDelay] = useState(false);
  // const [lastEvent, setLastEvent] = useState(["There is no entry."]);
  // // const [isVisible, setIsVisible] = useState(false);
  // const [isStatus, setIsStatus] = useState(() => {
  //   const items = Object.entries(CONSTANTS.CGM.items);
  //   const tempObj = {};
  //   for (let index = 0; index < items.length; index++) {
  //     tempObj[index] = false;
  //   }
  //   // console.log("tempObj:", tempObj);
  //   // console.log("isStatus:", isStatus);
  // });
  // console.log("isStatus:", isStatus);
  // //   [
  // //   [1, false],
  // //   [2, false],
  // //   [3, false],
  // // ]
  // // { 1: false, 2: false, 3: false },
  // // console.log("isStatus:", isStatus);

  // // // POST event in Data Logging Base base in Airtable.
  // // const postAnEvent = async (param) => {
  // //   try {
  // //     const airtableData = {
  // //       fields: {
  // //         Type: param,
  // //         TimeStamp: Date.now(),
  // //       },
  // //     };

  // //     const response = await fetch(
  // //       `https://api.airtable.com/v0/${AIRTABLE_BASE_ID_DATA_LOGGING_BASE}/${TABLE_ID}`,
  // //       {
  // //         method: "POST",
  // //         headers: {
  // //           "Content-Type": "application/json",
  // //           Authorization: `Bearer ${AIRTABLE_TOKEN}`,
  // //           // Authorization: `Bearer ${wrong_TOKEN}`, // NOTE: Used for testing.
  // //         },
  // //         body: JSON.stringify(airtableData),
  // //       },
  // //     );

  // //     if (!response.ok) {
  // //       const message = `Error has ocurred:${response.status}`;
  // //       throw new Error(message);
  // //     }

  // //     const dataResponse = await response.json();
  // //     console.log("dataResponse:", dataResponse);
  // //     // console.log("typeof dataResponse.id:", typeof dataResponse.id);
  // //     setLastEvent([dataResponse.id, dataResponse.fields.Type]);

  // //     // NOTE: COMMENT OUT for web development.
  // //     Alert.alert("Event Created:", dataResponse.fields.Type);
  // //   } catch (error) {
  // //     console.log(error.message);

  // //     // NOTE: COMMENT OUT for web development.
  // //     Alert.alert("Event NOT Created:", error.message);

  // //     // TODO: Determine whether to keep or remove this "return null". And why.
  // //     return null;
  // //   }
  // // };

  // // The DELETE event in Data Logging Base base in Airtable.
  // const deleteLastEvent = async (param) => {
  //   console.log("ID of event to be deleted:", param);
  //   fetch(
  //     `https://api.airtable.com/v0/${AIRTABLE_BASE_ID_DATA_LOGGING_BASE}/${TABLE_ID}/${param}`,
  //     {
  //       method: "DELETE",
  //       headers: {
  //         Authorization: `Bearer ${AIRTABLE_TOKEN}`,
  //         "Content-Type": "application/json",
  //       },
  //     },
  //   )
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log("res:", res);
  //       console.log(res.id, " was deleted.");
  //       console.log('"', lastEvent[1], '"was deleted.');
  //       console.log("lastEvent:", lastEvent);

  //       // NOTE: COMMENT OUT for web development.
  //       Alert.alert("Event was deleted:", res.id);
  //     });

  //   console.log(param, " was deleted.");
  //   setLastEvent([]);
  // };

  // // // Function for sending the event/action to the database.
  // // const confirmation = (param) => {
  // //   console.log("Event sent:", param);

  // //   // // NOTE: COMMENT OUT for mobile development.
  // //   // postAnEvent(param);

  // //   // NOTE: COMMENT OUT for web development.
  // //   Alert.alert("Send this event?", param, [
  // //     {
  // //       text: "Cancel",
  // //       onPress: () => console.log("Cancel Pressed - don't send yet."),
  // //       style: "cancel",
  // //     },
  // //     {
  // //       text: "Accept",
  // //       onPress: () => {
  // //         postAnEvent(param);
  // //         console.log("Accept Pressed");
  // //       },
  // //     },
  // //   ]);
  // // };

  // const checkLastEvent = () => {
  //   console.log("lastEvent", lastEvent);

  //   // NOTE: COMMENT OUT for web development.
  //   Alert.alert("lastEvent ID:", lastEvent[0]);
  //   Alert.alert("lastEvent Name:", lastEvent[1]);
  // };

  // // // For CGM
  // // const items = Object.entries(CONSTANTS.CGM.items);
  // // // console.log(items);
  // // const pressableComponent = items.map((item, index) => {
  // //   // console.log("item:", item);
  // //   // console.log("index:", index);
  // //   // console.log("item[0]:", item[0]);
  // //   // console.log("item[1]:", item[1]);
  // //   // console.log("item[1].issues:", item[1].issues);
  // //   const [title, issues] = item;
  // //   // console.log("title:", title);
  // //   // console.log("issues:", issues);

  // //   // console.log("CONSTANTS.CGM.items:", CONSTANTS.CGM).items;
  // //   // const [isVisible, setIsVisible] = useState(false);
  // //   return (
  // //     <PressableComponent
  // //       // isVisible={isVisible}
  // //       // setIsVisible={setIsVisible()}
  // //       key={index}
  // //       title={title}
  // //       issues={issues}
  // //     ></PressableComponent>
  // //   );
  // // });

  handleVisibility = (param) => {
    // const handleVisibility = (param) => {
    const handleReset = (param) => {
      // Use this to reset the isVisible status of the TogglePressable component.
      console.log(
        "The TogglePresseable component that will be reset is:",
        param[0],
        "\nsuch that the status will be changed to FALSE.",
      );
      param[1] = false;
      // console.log(param);
      return param;
    };
    // console.log("param:", param);
    const entries = new Map([param]);
    const obj = Object.fromEntries(entries);
    setIsStatus(() => {
      // Checking for more than one
      // if more than one is true, return the newest one as true

      const temp = { ...isStatus };

      // // NOTE: Option 1
      // for (const iterator in temp) {
      //   temp[iterator] = false;
      // }
      // handleReset(param);
      // return { ...temp, ...obj };

      // NOTE: Option 2
      for (const property in temp) {
        if (property != param[0]) {
          temp[property] = false;
        } else temp[property] = true;
      }
      return { ...isStatus, ...temp };
    });
  };

  // // Faking data to set up the TogglePressable.js file.
  // // Eventually the data will come from import { CONSTANTS } from "./constants/Constants";
  // const tempData = [1, 2, 3].map((foo, index) => {
  //   return (
  //     <TogglePressable
  //       key={index}
  //       number={foo}
  //       handleVisibility={handleVisibility}
  //       isStatus={isStatus}
  //     />
  //   );
  // });

  // const items = Object.entries(CONSTANTS.CGM.items);
  // // console.log(items);
  // // console.log(items.length);

  // // useEffect(() => {
  // //   // const tempObj = {
  // //   //   1: false,
  // //   //   2: false,
  // //   //   3: false,
  // //   //   4: false,
  // //   // };
  // //   const tempObj = {};
  // //   for (let index = 0; index < items.length; index++) {
  // //     tempObj[index] = false;
  // //   }
  // //   setIsStatus(tempObj);
  // // }, []);
  // // console.log("isStatus:", isStatus);

  togglePressable = items.map((item, index) => {
    // const togglePressable = items.map((item, index) => {
    // console.log("item:", item[1]);
    // console.log("index:", index);
    const test = Object.entries(this);
    console.log("test:", test);
    // console.log("this:", this);
    console.log("this:", this);
    // console.log("isStatus:", isStatus);
    // return (
    //   <TogglePressable
    //     key={index}
    //     item={item}
    //     handleVisibility={handleVisibility}
    //     isStatus={isStatus}
    //   />
    // );
  });

  // setTimeout(() => {
  //   setIsDelay(true);
  // }, 5000);

  render() {
    return (
      // TODO: The view bleeds into the top bar of my phone. Fix this.
      <View style={styles.container}>
        <View style={styles.group}>
          <Text style={styles.h1}>Data Logger</Text>
        </View>
        <ScrollView>
          {/* NOTE: New user flow. */}

          {/* {isDelay && (
            <View style={styles.group}>
              <Text>Toggle Pressable</Text>
              {togglePressable}
            </View>
          )} */}

          {/* <View style={styles.group}>
          <Text>Toggle Pressable</Text>
          {togglePressable}
        </View> */}

          {/* <View style={styles.group}>
          <Text>Toggle Pressable</Text>
          {tempData}
        </View> */}

          {/* <View style={styles.group}>
          <Text>Pressable Component</Text>
          {pressableComponent}
        </View> */}

          {/* <View style={styles.group}>
          <Text>Modal Component</Text>
          <ModalComponent constants={CONSTANTS.CGM}></ModalComponent>
        </View> */}

          {/* NOTE: commented out while I redesign the user flow. */}
          {/* <View style={styles.group}><Group groupData={CONSTANTS.CGM}></Group></View> */}
          {/* <View style={styles.group}>
          <Text>Top xx buttons pressed.</Text>
          <Text>
            Select between 2 and 10 top issues to display here - using a
            component.
          </Text>
          <Text>To be calculated using the spreadsheet.</Text>
          <Text>Not sure how to display them - yet to be seen.</Text>
          <Text>Display all Buttons Toggle Button</Text>
        </View>
        <View>
          <Group groupData={CONSTANTS.CGM}></Group>
          <Group groupData={CONSTANTS.FOOD_INSULIN}></Group>
          <Group groupData={CONSTANTS.OTHER}></Group>
          <Group groupData={CONSTANTS.CORPORAL_INFORMATION}></Group>
          <Group groupData={CONSTANTS.PHYSICAL_ACTIVITY}></Group>
          <Group groupData={CONSTANTS.PUMP}></Group>
        </View> */}

          {/* TODO: delete the following components that contain the "CONSTANTS_old" variable. */}
          {/* <Group groupData={CONSTANTS_old.CGM}></Group>
        <Group groupData={CONSTANTS_old.FOOD_INSULIN}></Group>
        <Group groupData={CONSTANTS_old.OTHER}></Group>
        <Group groupData={CONSTANTS_old.PHYSICAL_ACTIVITY}></Group>
        <Group groupData={CONSTANTS_old.PUMP}></Group> */}
        </ScrollView>

        <View style={styles.group}>
          <ToggleSwitch
            name="Edit Entries"
            handleEvent={() => deleteLastEvent(lastEvent[0])}
          />
          {/* TODO: style this so that the separator file can be removed. */}
          <Separator />

          {/* </View>

      <View style={styles.group}> */}
          <Button
            title="Check Last Event"
            onPress={() => checkLastEvent()}
          ></Button>

          {/* <Separator />
        <ListAllComponent /> */}

          {/* NOTE: commented out because it's causing problems. */}
          {/* TODO: fix this error. "Text strings must be rendered within a <Text>" */}
          {/* <ToggleButton title="Toggle Feature List" component={<FeatureList />} /> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // TODO: What does this do? Clean up all of the styling.
    marginHorizontal: 16,
  },
  h1: { fontSize: 33, textAlign: "center", fontWeight: "bold" },
  h2: { fontSize: 20, textAlign: "center" },
  group: { borderWidth: 2, padding: 10, margin: 10 },
});

export default App;
