import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <FontAwesome name="close" size={35} color="white" />
      </View>
      <View style={styles.deleteIcon}>
        <FontAwesome5 name="trash-alt" size={35} color="white" />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewScreen;
