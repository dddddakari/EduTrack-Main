import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Calendar } from "react-native-calendars";
import { AntDesign } from "@expo/vector-icons";
import Fontisto from '@expo/vector-icons/Fontisto';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <View style={styles.container}>
      <Calendar
        theme={{
          backgroundColor: "#D4D2D5",
          calendarBackground: "#D4D2D5",
          textSectionTitleColor: "#58355E",
          dayTextColor: "#58355E",
          todayTextColor: "#17C3B2",
          selectedDayBackgroundColor: "#17C3B2",
          selectedDayTextColor: "#fff",
          arrowColor: "#58355E",
          monthTextColor: "#58355E",
        }}
        onDayPress={(day: { dateString: React.SetStateAction<null>; }) => setSelectedDate(day.dateString)}
        markedDates={{
          ...(selectedDate ? { [selectedDate]: { selected: true, selectedColor: "#17C3B2" } } : {}),
        }}
      />
      <View style={styles.footer}>
      <Fontisto name="smiling" size={50} color="#58355E"/>
        <Text style={styles.text}>You have a free day</Text>
        <Text style={styles.subtext}>Take it easy</Text>
      </View>
      <TouchableOpacity style={styles.fab}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D4D2D5",
    padding: 20,
    paddingTop: 50,
  },
  footer: {
    alignItems: "center",
    marginTop: 20,
  },
  Fontisto: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  text: {
    color: "#58355E",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 20,
  },
  subtext: {
    color: "#58355E",
    fontSize: 14,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 100,
    backgroundColor: "#17C3B2",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default CalendarScreen;
