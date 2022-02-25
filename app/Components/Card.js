import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({ title, subtitle, img }) => {
  return (
    <View style={styles.card}>
      <Image source={img} style={styles.img}></Image>
      <View style={styles.detailsContainer}>
        <AppText>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  img: {
    width: "100%",
    height: 200,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
