// ListComponent.js
// For listing all records in the database.
// Not yet implemented

import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";
import {
  AIRTABLE_BASE_ID_DATA_LOGGING_BASE,
  TABLE_ID,
  AIRTABLE_TOKEN,
  wrong_TOKEN,
} from "@env";

const ListComponent = () => {
  const [newEvents, setNewEvents] = useState();
  const [loading, setLoading] = useState(false);
  // GET from Data Logging Base base in Airtable.
  useEffect(() => {
    const loadTable = async () => {
      try {
        const response = await fetch(
          `https://api.airtable.com/v0/${AIRTABLE_BASE_ID_DATA_LOGGING_BASE}/${TABLE_ID}`,
          {
            headers: {
              Authorization: `Bearer ${AIRTABLE_TOKEN}`,
            },
          },
        );

        if (!response.ok) {
          const message = `Error: ${response.status}`;
          throw new Error(message);
        }

        const eventsFromAPI = await response.json();
        // console.log(eventsFromAPI);

        const events = eventsFromAPI.records.map((todo) => {
          const newEvent = {
            id: todo.id,
            title: todo.fields.Type,
            createdTime: todo.createdTime,
          };

          return newEvent;
        });

        // console.log(todos);
        //  setTodos(todos);
        setNewEvents(events);
        // console.log(events);
        setLoading(true);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadTable();
  }, []);

  // console.log(newEvents);

  return (
    <View style={styles.container}>
      {loading ? (
        <View>
          <Text>All Records</Text>

          <View>
            {newEvents.map((event) => {
              return (
                <View key={event.id} style={styles.event}>
                  {/* <ul key={event.id}> */}
                  <Text>Title: {event.title}</Text>
                  <ul>
                    <li>ID: {event.id}</li>
                    {/* <li>{event.title}</li> */}
                    <li>TimeStamp: {event.createdTime}</li>
                  </ul>
                </View>
              );
            })}
          </View>
        </View>
      ) : (
        <Text>Loading all records....</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  event: {
    backgroundColor: "beige",
    borderWidth: 2,
    marginBottom: 5,
    marginTop: 5,
  },
});

export default ListComponent;
