import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";

export default function Assignment3() {
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [fact, setFact] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("Select Month");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    if (day > 0 && day < 32 && month > 0 && month < 13) {
      fetchFact();
    }
  }, [month, day]);

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const selectMonth = (monthName: string) => {
    setSelectedMonth(monthName);
    const monthIndex = months.indexOf(monthName) + 1;
    setMonth(monthIndex);
    setIsVisible(false);
  };

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
      <Text style={styles.factText}>{fact}</Text>

      <TouchableOpacity style={styles.input} onPress={toggleDropdown}>
        <Text>{selectedMonth}</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Day"
        keyboardType="numeric"
        value={day > 0 ? day.toString() : ""}
        onChangeText={(text) => {
          const dayValue = text ? parseInt(text) : 0;
          setDay(dayValue);
        }}
      />

      <Modal transparent={true} visible={isVisible} animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsVisible(false)}
        >
          <View style={styles.dropdown}>
            <FlatList
              data={months}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => selectMonth(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
  },
  factText: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    width: "80%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    maxHeight: 300,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
