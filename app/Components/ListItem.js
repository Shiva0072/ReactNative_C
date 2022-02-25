import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({ title, subtitle, img, icon, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {icon}
          {img && <Image style={styles.img} source={img}></Image>}
          <View style={styles.datialsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 11,
    backgroundColor: colors.white,
  },
  datialsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
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
