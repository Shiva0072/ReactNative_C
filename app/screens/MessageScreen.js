import { useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";

import ListItem from "../Components/ListItem";
import ListItemDeleteAction from "../Components/ListItemDeleteAction";
import ListItemSeparator from "../Components/ListItemSeparator";
import Screen from "../Components/Screen";

const initialMessages = [
  {
    id: "1",
    img: require("../assets/mosh.jpg"),
    subtitle: "D1",
    title: "First Item",
  },
  {
    id: "2",
    img: require("../assets/mosh.jpg"),
    subtitle: "D2",
    title: "Second Item",
  },
  {
    id: "3",
    img: require("../assets/mosh.jpg"),
    subtitle: "D3",
    title: "Third Item",
  },
];

function MessageScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  handleDelete = (message) => {
    let newMessages = messages.filter((msg) => msg.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={initialMessages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <ListItem
              title={item.title}
              subtitle={item.subtitle}
              img={item.img}
              onPress={() => console.log("Pressed")}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          );
        }}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: "1",
              img: require("../assets/mosh.jpg"),
              subtitle: "D1",
              title: "First Item",
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessageScreen;
