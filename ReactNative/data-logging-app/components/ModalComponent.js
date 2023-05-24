// ./components/ModalComponent.js

// NOTE: Copied this file from the ./components/NewComponent.js file.

import React, { useState } from "react";
import {
  // TODO: replace Alert with a modal.
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";

const ModalComponent = (props) => {
  // console.log("props:", props);
  // console.log("props.constants:", props.constants);
  // console.log("props.constants.name:", props.constants.name);
  // console.log("props.constants.items:", props.constants.items);
  // console.log(
  //   "props.constants.styles.color:",
  //   props.constants.styles.color,
  //   props.constants.name,
  // );
  const [modalVisible, setModalVisible] = useState(false);

  // console.log(Object.keys(props.constants.items));
  const items = Object.keys(props.constants.items);
  // console.log(items);
  const item = items.map((item, index) => {
    // console.log("Item:", item, "index:", index);
    return (
      <Pressable
        key={index}
        style={styles.pressableList}
        onPress={() => console.log("List issues")}
      >
        <Text>{item}</Text>
      </Pressable>
    );
  });

  // const entries = Object.entries(props.constants.items);
  // console.log("entries:", entries);
  // console.log("entries[0]:", entries[0]);
  // console.log("entries[0]:", entries[1]);

  // const item = entries.map((props1, index) => {
  //   // console.log("index:", index);
  //   // console.log("props1:", props1);
  //   const issues = props1[1].issues;
  //   // console.log("props1[1].issues:", issues);
  //   const xyz = issues.map((props2, index) => {
  //     // console.log("props2:", props2);
  //     // console.log("props2.issue:", props2.issue);
  //     return (
  //       <Pressable key={index} style={styles.pressableList}>
  //         <Text>{props2.issue}</Text>
  //       </Pressable>
  //     );
  //   });
  //   return <View key={index}>{xyz}</View>;
  // });

  return (
    <View style={styles.centeredView}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{props.constants.title}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            {item}
          </View>
        </View>
      </Modal>
      <Pressable
        style={[
          styles.button,
          // styles.buttonOpen, // NOTE: Keep this for reference. See below.
          { backgroundColor: props.constants.styles.color },
        ]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>{props.constants.name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    // backgroundColor: "#F194FF", // NOTE: Keep this for reference. See above.
    backgroundColor: "#008b8b",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  pressableList: {
    backgroundColor: "orange",
    // borderColor: "orange",
    padding: 5,
    margin: 5,
    borderRadius: 8,
    padding: 6,
  },
});

export default ModalComponent;
