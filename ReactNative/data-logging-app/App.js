// ./App.js

import { StyleSheet, Button, View, Text, Alert } from "react-native";
import {
  AIRTABLE_BASE_ID_DATA_LOGGING_BASE,
  TABLE_ID,
  AIRTABLE_TOKEN,
  wrong_TOKEN,
} from "@env";
import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import FeatureList from "./FeatureList";
import ToggleButton from "./ToggleButton";
import { Variables } from "./Variables";
// import ListAllComponent from "./ListAllComponent";

const Separator = () => <View style={styles.separator} />;

const App = () => {
  const [lastEvent, setLastEvent] = useState([]);
  // POST event in Data Logging Base base in Airtable.
  const postAnEvent = async (param) => {
    try {
      const airtableData = {
        fields: {
          Type: param,
          TimeStamp: Date.now(),
        },
      };

      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID_DATA_LOGGING_BASE}/${TABLE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${AIRTABLE_TOKEN}`,
            // Authorization: `Bearer ${wrong_TOKEN}`, // NOTE: Used for testing.
          },
          body: JSON.stringify(airtableData),
        },
      );

      if (!response.ok) {
        const message = `Error has ocurred:${response.status}`;
        throw new Error(message);
      }

      const dataResponse = await response.json();
      console.log("dataResponse:", dataResponse);
      // console.log("typeof dataResponse.id:", typeof dataResponse.id);
      setLastEvent([dataResponse.id, dataResponse.fields.Type]);

      // NOTE: COMMENT OUT for web development.
      Alert.alert("Event Created:", dataResponse.fields.Type);
    } catch (error) {
      console.log(error.message);

      // NOTE: COMMENT OUT for web development.
      Alert.alert("Event NOT Created:", error.message);

      // TODO: Determine whether to keep or remove this "return null". And why.
      return null;
    }
  };

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

  // Function for sending the event/action to the database.
  const confirmation = (param) => {
    console.log("Event sent:", param);

    // // NOTE: COMMENT OUT for mobile development.
    // postAnEvent(param);

    // NOTE: COMMENT OUT for web development.
    Alert.alert("Send this event?", param, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed - don't send yet."),
        style: "cancel",
      },
      {
        text: "Accept",
        onPress: () => {
          postAnEvent(param);
          console.log("Accept Pressed");
        },
      },
    ]);
  };

  const checkLastEvent = () => {
    console.log("lastEvent", lastEvent);

    // NOTE: COMMENT OUT for web development.
    Alert.alert("lastEvent ID:", lastEvent[0]);
    Alert.alert("lastEvent Name:", lastEvent[1]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Data Logger</Text>
      <Separator />
      <View>
        <Text style={styles.h2}>{Variables.CGM}</Text>
        <Button
          title="Replaced the old sensor for a new sensor."
          color="#f194ff"
          onPress={() =>
            confirmation("Replaced the old sensor for a new sensor.")
          }
        ></Button>
      </View>
      <Separator />
      <View>
        <Text style={styles.h2}>{Variables.PUMP}</Text>
        <Button
          title="Refilled the old reservoir with insulin"
          color="#f0f"
          onPress={() =>
            confirmation("Refilled the old reservoir with insulin")
          }
        ></Button>
        <Separator />
        <Button
          title="Change only my tubing"
          color="#f0f"
          onPress={() => confirmation("Change only my tubing")}
        ></Button>
        <Separator />
        <Button
          title="Changed an old reservoir for a new reservoir"
          color="#f0f"
          onPress={() =>
            confirmation("Changed an old reservoir for a new reservoir")
          }
        ></Button>
      </View>

      <Separator />
      <ToggleSwitch
        name="Edit Entries"
        handleEvent={() => deleteLastEvent(lastEvent[0])}
      />

      <Separator />
      <Button
        title="Check Last Event"
        onPress={() => checkLastEvent()}
      ></Button>

      {/* <ListAllComponent /> */}

      <Separator />
      {/* NOTE: commented out because it's causing problems. */}
      {/* TODO: fix this error. "Text strings must be rendered within a <Text>" */}
      {/* <ToggleButton title="Toggle Feature List" component={<FeatureList />} /> */}

      {/* <Separator /> */}
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
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
