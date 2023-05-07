import React from "react";
import { Button, View, Text } from "react-native";

const Button2 = () => {
  return (
    <>
      <View>
        <Text>PLease press this</Text>
        <Button
          title="Press this now."
          onPress={() => console.log("button fired")}
        ></Button>
      </View>
    </>
  );
};

export default Button2;
