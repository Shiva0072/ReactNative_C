// import React from "react";
import { useState } from "react";
import { View, StyleSheet, Text, TextInput, Switch } from "react-native";

import ViewScreen from "./app/screens/ViewScreen";
import WelcomeScreen from "./app/screens/WelcomScreen";
import AppText from "./app/Components/AppText";
import AppButton from "./app/Components/AppButton";
import Card from "./app/Components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import Screen from "./app/Components/Screen";
import Icon from "./app/Components/Icon";
import ListItem from "./app/Components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingDetailsScreen";
import AppTextInput from "./app/Components/AppTextInput";
import AppPicker from "./app/Components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "MacBook", value: 3 },
];

export default function App() {
  const [selectedItem, setSelectedItem] = useState(categories[0]);

  return (
    <Screen>
      <LoginScreen />
    </Screen>
  );
}
