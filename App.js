import {
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Startewe Native</Text>
      <TouchableHighlight onPress={() => console.log("pressedMe")}>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={{ width: 190, height: 150 }}
          blurRadius={1}
        />
      </TouchableHighlight>

      <Button
        title="Click Me"
        onPress={() => Alert.alert("Alert", "You clicked Me")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    // alignItems: "center",
    // justifyContent: "center",
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
