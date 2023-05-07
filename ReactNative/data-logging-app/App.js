import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";
import Config from "react-native-config"; // NOTE: not being used.
import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, TABLE_NAME } from "@env";
import React, { useState, useEffect } from "react";
// import { Text, View, StyleSheet } from 'react-native';

// Config.API_URL; // 'https://myapi.com'
// Config.GOOGLE_MAPS_API_KEY; // 'abcdefgh'

// console.log(Config.API_URL);
console.log(AIRTABLE_BASE_ID);
console.log(AIRTABLE_API_KEY);

const url = "https://jsonplaceholder.typicode.com/posts";

const timeStamp = () => console.log(Date.now());

const Separator = () => <View style={styles.separator} />;

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const response = await fetch(
          `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Default`,
          {
            headers: {
              Authorization: `Bearer ${AIRTABLE_API_KEY}`,
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

        console.log(todos);
        //  setTodos(todos);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadTodos();
  }, []);

  // Post
  useEffect(() => {
    const postTodo = async (todo) => {
      try {
        const airtableData = {
          fields: {
            Title: todo,
          },
        };

        const response = await fetch(
          `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Default`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            },
            body: JSON.stringify(airtableData),
          },
        );

        if (!response.ok) {
          const message = `Error has ocurred:
                                 ${response.status}`;
          throw new Error(message);
        }

        const dataResponse = await response.json();
        console.log(dataResponse);
        return dataResponse;
      } catch (error) {
        console.log(error.message);
        return null;
      }
    };
    // postTodo({
    //   id: 6666666666,
    //   // createdTime: "2023-03-03T14:22:08.000Z",
    //   fields: { Title: "DO THIS NOW!!!!" },
    // });

    postTodo("DO THIS NOW AGAIN!!!!");

    // postTodo();
  }, []);

  // useEffect(() => {
  //   fetch(url)
  //     .then((resp) => resp.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);

  // An API POST request is a type of API request that is used to create or update a resource on a web server.
  // It sends data to the server in the form of a request body which usually contains information such as the title, description, and other relevant details. If the data is accepted, the server responds with a success code and the resource is created or updated.
  // When making a POST request with the FetchAPI, you must specify the method as ‘POST’. Here’s an example of a POST to the fake server from our React Native app:
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 55,
        id: 101,
        title: "Post title",
        body: "Post body",
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(JSON.stringify(responseData));
      })
      .catch((error) => console.error(error));
    // .done();
  }, []);

  // Similar to a POST request, the server sends back a response to tell you if the resource was updated on the server or not (and why it failed).
  // In a PUT request, you need to specify the ID of the resource you want to update on the server as well as the new values. Here’s an example which updates the title and body of post one on the server:
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        userId: 155,
        id: 101,
        title: "New Post title",
        body: "New Post body",
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(JSON.stringify(responseData));
      })
      .catch((error) => console.error(error));
    // .done();
  }, []);

  // In a DELETE request, you only specify the ID of resource you want to delete on the server:
  // Once the server is done with processing the request, it sends back a response to tell you if the resource was deleted on the server or not (and why it failed).
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/50", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(JSON.stringify(responseData));
      })
      .catch((error) => console.error(error));
    // .done();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.bigTitle}>Data Logger</Text>
      <View style={styles.container2}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          data.map((post) => {
            return (
              <View key={post.id}>
                <Text style={styles.title}>{post.title}</Text>
                <Text>{post.body}</Text>
              </View>
            );
          })
        )}
      </View>

      <View>
        <Text style={styles.title}>
          The title and onPress handler are required. It is recommended to set
          accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Button title="Time stamp" onPress={() => timeStamp()} />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On
          iOS, the color prop controls the color of the text. On Android, the
          color adjusts the background color of the button.
        </Text>
        <Button
          title="This button does nothing"
          color="#f194ff"
          onPress={() => Alert.alert("Button with adjusted color pressed")}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          All interaction for the component are disabled.
        </Text>
        <Button
          title="This button does nothing"
          disabled
          onPress={() => Alert.alert("Cannot press this one")}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          This layout strategy lets the title define the width of the button.
        </Text>
        <View style={styles.fixToText}>
          <Button
            title="This button does nothing"
            onPress={() => Alert.alert("Left button pressed")}
          />
          <Button
            title="This button does nothing"
            onPress={() => Alert.alert("Right button pressed")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  bigTitle: { fontSize: 33, textAlign: "center" },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

// const styles = StyleSheet.create({
//   container2: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "#ecf0f1",
//     padding: 8,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: "bold",
//   },
// });

export default App;
