import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";

export default function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.label}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  label: {
    padding: 10,
  },
});
