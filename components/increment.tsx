import React from "react";
import { View, Button, StyleSheet } from "react-native";

interface IncrementProps {
  increment: () => void;
}

export default function Increment({ increment }: IncrementProps) {
  return (
    <View style={styles.container}>
      <Button title="Increment" onPress={increment} color="#4CD964" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
