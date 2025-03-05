import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import Assignment3 from "./assignment3";

export default function App() {
  return (
    <View style={styles.container}>
      <Assignment3 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  link: {
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  linkText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
