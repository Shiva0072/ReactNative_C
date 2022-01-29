import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({ title, subtitle, img }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img}></Image>
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subtitle: {
    fontSize: 12,
    color: colors.medium,
  },
  title: {
    fontWeight: "600",
  },
});

export default ListItem;
