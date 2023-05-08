// ListComponent.js
// For listing all records in the database.
// Not yet implemented

import React, { useEffect } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const ListComponent = () => {
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

        const todosFromAPI = await response.json();
        console.log(todosFromAPI);

        const todos = todosFromAPI.records.map((todo) => {
          const newTodo = {
            id: todo.id,
            title: todo.fields.Title,
            // title: todo,
          };

          return newTodo;
        });

        // console.log(todos);
        //  setTodos(todos);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadTable();
  }, []);

  return (
    <View style={styles.container}>
      <Text>List all records....</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default ListComponent;
