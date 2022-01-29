import React from "react";
import { Text, Platform, StyleSheet } from "react-native";
import colors from "../config/colors";

function AppText({ children, style }) {
  return <Text style={[styles.Text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  Text: {
    fontSize: 18,
    color: colors.black,
    ...Platform.select({
      android: {
        fontFamily: "Roboto",
      },
      ios: {
        fontFamily: "Avenir",
      },
    }),
  },
});

export default AppText;
