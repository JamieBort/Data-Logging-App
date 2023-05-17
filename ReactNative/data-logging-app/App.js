// ./App.js

// TODO: Look into the use cases for <SafeAreaView> and consider using it.

import {
  StyleSheet,
  // TODO: replace Button with Pressable.
  Button,
  View,
  Text,
  //  TODO: replace Alert with a modal.
  Alert,
  ScrollView,
} from "react-native";

import {
  AIRTABLE_BASE_ID_DATA_LOGGING_BASE,
  TABLE_ID,
  AIRTABLE_TOKEN,
  wrong_TOKEN,
} from "@env";

import React, { useState } from "react";
import ToggleSwitch from "./ui/ToggleSwitch";
import FeatureList from "./components/FeatureList";
import ToggleButton from "./ui/ToggleButton";
import { CONSTANTS_old, CONSTANTS, CONSTANTS_new } from "./constants/Constants";
// import ListAllComponent from "./ListAllComponent";
import Group from "./components/Group";
import Separator from "./ui/Separator";

// // console.log("CONSTANTS:", CONSTANTS);
// console.log("CONSTANTS.CGM:", CONSTANTS.CGM);
// // console.log("CONSTANTS_new:", CONSTANTS_new);
// console.log("CONSTANTS_new.CGM:", CONSTANTS_new.CGM);

const App = () => {
  const [lastEvent, setLastEvent] = useState(["There is no entry."]);

  // // POST event in Data Logging Base base in Airtable.
  // const postAnEvent = async (param) => {
  //   try {
  //     const airtableData = {
  //       fields: {
  //         Type: param,
  //         TimeStamp: Date.now(),
  //       },
  //     };

  //     const response = await fetch(
  //       `https://api.airtable.com/v0/${AIRTABLE_BASE_ID_DATA_LOGGING_BASE}/${TABLE_ID}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${AIRTABLE_TOKEN}`,
  //           // Authorization: `Bearer ${wrong_TOKEN}`, // NOTE: Used for testing.
  //         },
  //         body: JSON.stringify(airtableData),
  //       },
  //     );

  //     if (!response.ok) {
  //       const message = `Error has ocurred:${response.status}`;
  //       throw new Error(message);
  //     }

  //     const dataResponse = await response.json();
  //     console.log("dataResponse:", dataResponse);
  //     // console.log("typeof dataResponse.id:", typeof dataResponse.id);
  //     setLastEvent([dataResponse.id, dataResponse.fields.Type]);

  //     // NOTE: COMMENT OUT for web development.
  //     Alert.alert("Event Created:", dataResponse.fields.Type);
  //   } catch (error) {
  //     console.log(error.message);

  //     // NOTE: COMMENT OUT for web development.
  //     Alert.alert("Event NOT Created:", error.message);

  //     // TODO: Determine whether to keep or remove this "return null". And why.
  //     return null;
  //   }
  // };

  // The DELETE event in Data Logging Base base in Airtable.
  const deleteLastEvent = async (param) => {
    console.log("ID of event to be deleted:", param);
    fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID_DATA_LOGGING_BASE}/${TABLE_ID}/${param}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${AIRTABLE_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    )
      .then((response) => response.json())
      .then((res) => {
        console.log("res:", res);
        console.log(res.id, " was deleted.");
        console.log('"', lastEvent[1], '"was deleted.');
        console.log("lastEvent:", lastEvent);

        // NOTE: COMMENT OUT for web development.
        Alert.alert("Event was deleted:", res.id);
      });

    console.log(param, " was deleted.");
    setLastEvent([]);
  };

  // // Function for sending the event/action to the database.
  // const confirmation = (param) => {
  //   console.log("Event sent:", param);

  //   // // NOTE: COMMENT OUT for mobile development.
  //   // postAnEvent(param);

  //   // NOTE: COMMENT OUT for web development.
  //   Alert.alert("Send this event?", param, [
  //     {
  //       text: "Cancel",
  //       onPress: () => console.log("Cancel Pressed - don't send yet."),
  //       style: "cancel",
  //     },
  //     {
  //       text: "Accept",
  //       onPress: () => {
  //         postAnEvent(param);
  //         console.log("Accept Pressed");
  //       },
  //     },
  //   ]);
  // };

  const checkLastEvent = () => {
    console.log("lastEvent", lastEvent);

    // NOTE: COMMENT OUT for web development.
    Alert.alert("lastEvent ID:", lastEvent[0]);
    Alert.alert("lastEvent Name:", lastEvent[1]);
  };

  return (
    // TODO: The view bleeds into the top bar of my phone. Fix this.
    <View style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.h1}>Data Logger</Text>
      </View>
      <ScrollView>
        <View style={styles.group}>
          <Text>Top xx buttons pressed.</Text>
          <Text>
            Select between 2 and 10 top issues to display here - using a
            component.
          </Text>
          <Text>To be calculated using the spreadsheet.</Text>
          <Text>Not sure how to display them - yet to be seen.</Text>
          <Text>Display all Buttons Toggle Button</Text>
        </View>

        <Group groupData={CONSTANTS_new.CGM}></Group>

        <Group groupData={CONSTANTS_new.FOOD_INSULIN}></Group>

        {/* <Group groupData={CONSTANTS_new.OTHER}></Group>

        and CORPORAL_INFORMATION */}

        <Group groupData={CONSTANTS_new.PHYSICAL_ACTIVITY}></Group>

        <Group groupData={CONSTANTS_new.PUMP}></Group>

        {/* <Group groupData={CONSTANTS.CGM}></Group> */}

        {/* <Group groupData={CONSTANTS.FOOD_INSULIN}></Group>

        <Group groupData={CONSTANTS.OTHER}></Group>

        <Group groupData={CONSTANTS.PHYSICAL_ACTIVITY}></Group>

        <Group groupData={CONSTANTS.PUMP}></Group> */}

        {/* TODO: Delete these <Group> components. */}
        {/* <Group groupData={CONSTANTS_old.CGM}></Group>

        <Group groupData={CONSTANTS_old.FOOD}></Group>

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
};

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
