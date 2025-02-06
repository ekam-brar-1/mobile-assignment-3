import React from "react";
import { View, Button, StyleSheet } from "react-native";

interface DecrementProps {
  decrement: () => void;
}

export default function Decrement({ decrement }: DecrementProps) {
  return (
    <View style={styles.container}>
      <Button title="Decrement" onPress={decrement} color="#FF3B30" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
