import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import AppButton from "../Components/AppButton";
import AppText from "../Components/AppText";
import ListItem from "../Components/ListItem";
import colors from "../config/colors";

function ListingScreen(props) {
  return (
    <View>
      <Image
        style={styles.img}
        source={require("../assets/jacket.jpg")}
      ></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Comfy Jacket</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>

      <View style={styles.userContainer}>
        <ListItem
          img={require("../assets/mosh.jpg")}
          title="Richard"
          subtitle="6 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 10,
  },
  img: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  userContainer: {
    margin: 10,
  },
});

export default ListingScreen;
