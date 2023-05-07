import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";
import Config from "react-native-config"; // NOTE: not being used.
import { API_URL, API_TOKEN } from "@env";
import React, { useState, useEffect } from "react";
// import { Text, View, StyleSheet } from 'react-native';

Config.API_URL; // 'https://myapi.com'
Config.GOOGLE_MAPS_API_KEY; // 'abcdefgh'

console.log(Config.API_URL);
console.log(API_URL);
console.log(API_TOKEN);

const url = "https://jsonplaceholder.typicode.com/posts";

const timeStamp = () => console.log(Date.now());

const Separator = () => <View style={styles.separator} />;

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
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
          accessibilityLabel to help make your app usable by everyone. URL:{" "}
          {API_URL}
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
