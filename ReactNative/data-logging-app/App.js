import { StyleSheet, Button, View, Text, Alert } from "react-native";
import {
  AIRTABLE_API_KEY,
  AIRTABLE_BASE_ID,
  AIRTABLE_BASE_ID_DATA_LOGGING_BASE,
  TABLE_ID,
  AIRTABLE_TOKEN,
} from "@env";
import React, { useEffect, useState } from "react";
import Toggle from "./Toggle";
// import AlertComponent from "./AlertComponent";

const Separator = () => <View style={styles.separator} />;

const App = () => {
  // const [newAction, setNewAction] = useState();

  // POST event in Data Logging Base base in Airtable.

  const postEvent = async (param) => {
    // function async postEvent(){
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

      Alert.alert("Time created:", dataResponse.createdTime); // Commented out
      Alert.alert("Name:", dataResponse.fields.Type); // Commented out
      Alert.alert("Alert Title", "My Alert Msg", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);

      // Alert.alert(
      //   "Time created:" +
      //     dataResponse.createdTime +
      //     "Name:" +
      //     dataResponse.fields.Type,
      // );

      // return dataResponse;
      // setNewAction(dataResponse);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };

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

        // console.log(todosFromAPI);

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

  // // GET from Jamie's Base in Airtable.
  // useEffect(() => {
  //   const loadTodos = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Default`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${AIRTABLE_API_KEY}`,
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

  //       console.log(todos);
  //       //  setTodos(todos);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   loadTodos();
  // }, []);

  // // POST to Jamie's Base in Airtable.
  // useEffect(() => {
  //   const postTodo = async (todo) => {
  //     try {
  //       const airtableData = {
  //         fields: {
  //           Title: todo,
  //         },
  //       };

  //       const response = await fetch(
  //         `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Default`,
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${AIRTABLE_API_KEY}`,
  //           },
  //           body: JSON.stringify(airtableData),
  //         },
  //       );

  //       if (!response.ok) {
  //         const message = `Error has ocurred:
  //                                ${response.status}`;
  //         throw new Error(message);
  //       }

  //       const dataResponse = await response.json();
  //       console.log(dataResponse);
  //       return dataResponse;
  //     } catch (error) {
  //       console.log(error.message);
  //       return null;
  //     }
  //   };
  //   // postTodo({
  //   //   id: 6666666666,
  //   //   // createdTime: "2023-03-03T14:22:08.000Z",
  //   //   fields: { Title: "DO THIS NOW!!!!" },
  //   // });

  //   postTodo("DO THIS NOW AGAIN!!!!");

  //   // postTodo();
  // }, []);

  // // An API POST request is a type of API request that is used to create or update a resource on a web server.
  // // It sends data to the server in the form of a request body which usually contains information such as the title, description, and other relevant details. If the data is accepted, the server responds with a success code and the resource is created or updated.
  // // When making a POST request with the FetchAPI, you must specify the method as ‘POST’. Here’s an example of a POST to the fake server from our React Native app:
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       userId: 55,
  //       id: 101,
  //       title: "Post title",
  //       body: "Post body",
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       console.log(JSON.stringify(responseData));
  //     })
  //     .catch((error) => console.error(error));
  //   // .done();
  // }, []);

  // // Similar to a POST request, the server sends back a response to tell you if the resource was updated on the server or not (and why it failed).
  // // In a PUT request, you need to specify the ID of the resource you want to update on the server as well as the new values. Here’s an example which updates the title and body of post one on the server:
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts/1", {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       userId: 155,
  //       id: 101,
  //       title: "New Post title",
  //       body: "New Post body",
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       console.log(JSON.stringify(responseData));
  //     })
  //     .catch((error) => console.error(error));
  //   // .done();
  // }, []);

  // // In a DELETE request, you only specify the ID of resource you want to delete on the server:
  // // Once the server is done with processing the request, it sends back a response to tell you if the resource was deleted on the server or not (and why it failed).
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts/50", {
  //     method: "DELETE",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       console.log(JSON.stringify(responseData));
  //     })
  //     .catch((error) => console.error(error));
  //   // .done();
  // }, []);

  const actionFunction = (param) => {
    console.log(param);
    // console.log("TimeStamp is sent.");
    // console.log("Confirmation that it's been received.");

    // Alert.alert(
    //   `${param}. \n TimeStamp is sent. \nConfirmation that it's been received.`,
    // );

    const test = postEvent(param);
    // console.log("test", test);
    // Alert.alert(test);

    // return postEvent(param);
  };

  const displayResults = () => {
    Alert.alert(newAction.createdTime); // Commented out
    console.log("newAction:", newAction);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Data Logger</Text>
      {/* <AlertComponent /> */}
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
      <View>
        <Text style={styles.h2}>Temporary</Text>
        <Text>List:</Text>
        <Text>{`\u2022`}Button to confirm the selection.</Text>
        {/* <Text>{`\u2022`}Confirmed response that the selection was added.</Text> */}
        {/* <Text>{`\u2022`}Option to edit and delete the last entry.</Text>
        <Text>{`\u2022`}Edit button to modify the previous entries.</Text> */}
        <Button
          title="Results"
          // color="#f0f"
          onPress={() => displayResults()}
        ></Button>
      </View>
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
