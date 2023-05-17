// ./components/Group.js

import { useState } from "react";
// TODO: replace Alert with a modal.
import { StyleSheet, View, Text, Alert, Button } from "react-native";
import {
  AIRTABLE_BASE_ID_DATA_LOGGING_BASE,
  TABLE_ID,
  AIRTABLE_TOKEN,
  wrong_TOKEN,
} from "@env";
import Separator from "./../ui/Separator";
import NewComponent from "./NewComponent";
// TODO: Create a ToggleSwitchImproved file. Once it is working, change the name to ToggleSwitch and replace the old ToggleSwitch file with ToggleSwitchImproved
// import ToggleSwitch from "./ui/ToggleSwitch";

const Group = (props) => {
  const [lastEvent, setLastEvent] = useState(["There is no entry."]);
  const [shouldShow, setShouldShow] = useState(false);

  // // // console.log("props:", props);
  // console.log("props.groupData:", props.groupData);
  // // if (props.groupData.list)
  // //   console.log("props.groupData.list:", props.groupData.list);
  // // // console.log("props.groupData.title:", props.groupData.title);
  // // // console.log("props.color:", props.color);

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

      //   // NOTE: COMMENT OUT for web development.
      //   Alert.alert("Event Created:", dataResponse.fields.Type);
      // } catch (error) {
      //   console.log(error.message);

      // // NOTE: COMMENT OUT for web development.
      // Alert.alert(
      //   "Event Created. Delete this event? Or accept/keep it:",

      //   dataResponse.fields.Type,
      //   [
      //     {
      //       // TODO: make sure 'style: "cancel",' is what I want here.
      //       text: "Delete",
      //       onPress: () => {
      //         // console.log(
      //         //   "Last event:",
      //         //   lastEvent,
      //         //   "Delete was pressed - implement delete functionality.",
      //         // );
      //         checkLastEvent();
      //         deleteLastEvent(lastEvent[0]);
      //       },
      //       style: "cancel",
      //     },
      //     {
      //       // TODO: make sure I don't want to add 'style: "???????",' here.
      //       text: "Accept",
      //       onPress: () => {
      //         // postAnEvent(param);
      //         checkLastEvent();
      //         // console.log("Last event:", lastEvent, "Accept Pressed");
      //       },
      //     },
      //   ],
      // );
    } catch (error) {
      console.log(error.message);

      // // NOTE: COMMENT OUT for web development.
      // Alert.alert("Event NOT Created:", error.message);

      // TODO: Determine whether to keep or remove this "return null". And why.
      return null;
    }
  };

  // Function for sending the event/action to the database.
  const confirmation = (param) => {
    console.log("Event sent:", param);

    // NOTE: COMMENT OUT for mobile development.
    postAnEvent(param);

    // // NOTE: COMMENT OUT for web development.
    // Alert.alert("Send this event?", param, [
    //   {
    //     text: "Cancel",
    //     onPress: () => console.log("Cancel Pressed - don't send yet."),
    //     style: "cancel",
    //   },
    //   {
    //     text: "Accept",
    //     onPress: () => {
    //       postAnEvent(param);
    //       console.log("Accept Pressed");
    //     },
    //   },
    // ]);
  };

  // Delete last event.
  // The DELETE event in Data Logging Base base in Airtable.
  const deleteLastEvent = async (param) => {
    console.log("Last event deleted. Add an alert to state as much.");
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
        // console.log(res.id, " was deleted.");
        // console.log('"', lastEvent[1], '"was deleted.');
        // console.log("lastEvent:", lastEvent);

        // // NOTE: COMMENT OUT for web development.
        // Alert.alert("Event was deleted:", res.id);
      });

    console.log(param, " was deleted.");
    setLastEvent([]);
  };

  const checkLastEvent = () => {
    console.log("lastEvent", lastEvent);

    // // NOTE: COMMENT OUT for web development.
    // Alert.alert("lastEvent ID:", lastEvent[0]);
    // Alert.alert("lastEvent Name:", lastEvent[1]);
  };
  const { items } = props.groupData;
  // console.log("items:", items);
  const entries = Object.entries(items);
  // console.log("entries:", entries);

  const item = entries.map((props1, index) => {
    // console.log("index:", index);
    // console.log("props1:", props1);
    const issues = props1[1].issues;
    // console.log("props1[1].issues:", issues);
    const xyz = issues.map((props2, index) => {
      // console.log("props2:", props2);
      console.log("props2.issue:", props2.issue);
      return <Button key={index} title={props2.issue} />;
    });
    return (
      <NewComponent key={index} title={props1[0]}>
        {xyz}
        {/* <Button title="first button" />
          <Button title="second button" /> */}
      </NewComponent>
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.h2}>{props.groupData.title}</Text>
      <Text>{props.groupData.descriptionShort}</Text>
      {/* <ToggleSwitch
        name="Edit Entries"
        // handleEvent={() => deleteLastEvent(lastEvent[0])}
        handleEvent={() => console.log("toggled")}
      >
      Passed as children: https://stackoverflow.com/a/51056353/8210460
        {myButtons}
      </ToggleSwitch> */}
      {/* TODO: Swap this button out for a ToggleButton */}
      <Button
        title={"Display all " + props.groupData.name + " issues"}
        // color={props.groupData.color}
        color="green"
        onPress={() => console.log("Does nothing yet.")}
      ></Button>
      <Text>
        This button (above) will close other group(s) if they're open.
      </Text>

      {item}

      {/* TODO: style this so that the separator file can be removed. */}
      <Separator />
      <Button
        title="Delete Button"
        color="green"
        onPress={() => deleteLastEvent(lastEvent[0])}
      ></Button>
      {/* TODO: style this so that the separator file can be removed. */}
      <Separator />
      <Button
        title="Check value of leastEvent"
        color="green"
        onPress={() => checkLastEvent()}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "green",
    padding: 10,
    margin: 10,
    // color: props.color,
  },
  h2: { fontSize: 20, textAlign: "center" },
});

export default Group;
