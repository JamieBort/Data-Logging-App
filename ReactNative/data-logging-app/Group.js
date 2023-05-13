import { StyleSheet, View, Text, Button } from "react-native";
import { Variables } from "./Variables";
import Separator from "./ui/Separator";

const Group = (props) => {
  //   console.log("props:", props);
  //   console.log("props.groupData:", props.groupData);
  //   console.log("props.groupData.list:", props.groupData.list);
  //   console.log("props.color:", props.color);

  //   TODO: change the name of myButtons to something else.
  const myButtons = props.groupData.list.map((param, index) => {
    console.log(param);
    return (
      <View key={index}>
        <Separator />
        <Button
          title={param}
          color={props.groupData.color}
          onPress={() => confirmation(param)}
        ></Button>
      </View>
    );
  });
  // console.log(myButtons);

  return (
    <View style={styles.container}>
      <Text style={styles.h2}>{Variables.CGM}</Text>
      {/* TODO: Swap this out for a ToggleButton */}
      <Button
        title="Display all Buttons in this view Toggle Title"
        color={props.groupData.color}
      ></Button>
      {myButtons}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "red",
    padding: 10,
    margin: 10,
    // color: props.color,
  },
  //   h1: { fontSize: 33, textAlign: "center", fontWeight: "bold" },
  h2: { fontSize: 20, textAlign: "center" },
  //   separator: {
  //     marginVertical: 8,
  //     borderBottomColor: "#737373",
  //     borderBottomWidth: StyleSheet.hairlineWidth,
  //   },
  //   group: { borderWidth: 2, padding: 10, margin: 10 },

  //   separator: {
  //     marginVertical: 8,
  //     borderBottomColor: "#737373",
  //     borderBottomWidth: StyleSheet.hairlineWidth,
  //   },
});

export default Group;
