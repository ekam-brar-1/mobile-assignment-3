import { useEffect } from "react";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
export default function Assignment3() {
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [fact, setFact] = useState("");
  useEffect(() => {
    if (day > 0 && day < 32 && month > 0 && month < 13) {
      fetchFact();
    }
  }, [month, day]);
  const fetchFact = async () => {
    const response = await fetch(`http://numbersapi.com/${month}/${day}/date`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
      },
    });
    const data = await response.text();
    setFact(data);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter a valid Date: </Text>
      <TextInput
        style={styles.input}
        placeholder="Month"
        keyboardType="numeric"
        onChangeText={(text) => setMonth(parseInt(text))}
      />
      <TextInput
        style={styles.input}
        placeholder="Day"
        keyboardType="numeric"
        onChangeText={(text) => setDay(parseInt(text))}
      />
      <Text style={styles.text}>{fact}</Text>
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

  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
  },
});
