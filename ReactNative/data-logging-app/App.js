// API call resources:
// https://www.freecodecamp.org/news/react-native-networking-api-requests-using-fetchapi/

import { StyleSheet, Button, View, Text, Alert } from "react-native";
import {
  AIRTABLE_BASE_ID_DATA_LOGGING_BASE,
  TABLE_ID,
  AIRTABLE_TOKEN,
  wrong_TOKEN,
} from "@env";
import React from "react";
import Toggle from "./Toggle";

const Separator = () => <View style={styles.separator} />;

const App = () => {
  // POST event in Data Logging Base base in Airtable.
  const postEvent = async (param) => {
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
            // Authorization: `Bearer ${wrong_TOKEN}`,
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
      Alert.alert("Event Created:", dataResponse.fields.Type);
    } catch (error) {
      console.log(error.message);
      Alert.alert("Event NOT Created:", error.message);
      return null;
    }
  };

  // // GET from Data Logging Base base in Airtable.
  // useEffect(() => {
  //   const loadTable = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://api.airtable.com/v0/${AIRTABLE_BASE_ID_DATA_LOGGING_BASE}/${TABLE_ID}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${AIRTABLE_TOKEN}`,
  //           },
  //         },
  //       );

  //       if (!response.ok) {
  //         const message = `Error: ${response.status}`;
  //         throw new Error(message);
  //       }

  //       const todosFromAPI = await response.json();
  //       // console.log(todosFromAPI);

  //       const todos = todosFromAPI.records.map((todo) => {
  //         const newTodo = {
  //           id: todo.id,
  //           title: todo.fields.Title,
  //           // title: todo,
  //         };

  //         return newTodo;
  //       });

  //       // console.log(todos);
  //       //  setTodos(todos);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   loadTable();
  // }, []);

  // Function for sending the event/action to the database.
  const actionFunction = (param) => {
    console.log("Event sent:", param);
    Alert.alert("Event to send:", param, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed - don't send yet."),
        style: "cancel",
      },
      {
        text: "Accept",
        onPress: () => {
          postEvent(param);
          console.log("Accept Pressed");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Data Logger</Text>
      <Separator />
      <View>
        <Text style={styles.h2}>Sensor</Text>
        <Button
          title="Replaced the old sensor for a new sensor."
          color="#f194ff"
          onPress={() =>
            actionFunction("Replaced the old sensor for a new sensor.")
          }
        ></Button>
      </View>
      <Separator />
      <View>
        <Text style={styles.h2}>Insulin</Text>
        <Button
          title="Refilled the old reservoir with insulin"
          color="#f0f"
          onPress={() =>
            actionFunction("Refilled the old reservoir with insulin")
          }
        ></Button>
        <Separator />
        <Button
          title="Change only my tubing"
          color="#f0f"
          onPress={() => actionFunction("Change only my tubing")}
        ></Button>
        <Separator />
        <Button
          title="Changed an old reservoir for a new reservoir"
          color="#f0f"
          onPress={() =>
            actionFunction("Changed an old reservoir for a new reservoir")
          }
        ></Button>
      </View>

      <Separator />
      <Toggle name="Edit Entries" />
      <Separator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // TODO: What does this do?
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
