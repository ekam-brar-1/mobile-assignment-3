import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Decrement from "../components/decrement";
import Increment from "../components/increment";

export default function Lab() {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current count: {count}</Text>
      <Decrement decrement={decrement} />
      <Increment increment={increment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
