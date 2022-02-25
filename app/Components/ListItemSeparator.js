import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function ListItemSeparator(props) {
  return <View style={styles.view} />;
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.light,
    width: "100%",
    height: 1,
  },
});

export default ListItemSeparator;
