import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Icon from "../Components/Icon";
import ListItem from "../Components/ListItem";
import ListItemSeparator from "../Components/ListItemSeparator";
import Screen from "../Components/Screen";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Richard"
          subtitle="codeMe@gmail.com"
          img={require("../assets/mosh.jpg")}
        ></ListItem>
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => {
            <ListItem
              title={item.title}
              icon={
                <Icon
                  name={item.icon.name}
                  background={item.icon.backgroundColor}
                />
              }
            />;
          }}
        />
      </View>
      <ListItem
        title="Log Out"
        icon={<Icon name="logout" background="#ffe66d" />}
      ></ListItem>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
