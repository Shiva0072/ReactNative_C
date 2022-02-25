import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";

function Pppp(props) {
  return (
    <TouchableWithoutFeedback onLongPress={() => alert("jjo")}>
      <View>
        <View
          style={{ backgroundColor: "tomato", width: 500, height: 600 }}
        ></View>
        <Text>======================DWDW=====</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Pppp;
