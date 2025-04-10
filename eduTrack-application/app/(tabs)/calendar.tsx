import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { AntDesign } from "@expo/vector-icons";
import Fontisto from '@expo/vector-icons/Fontisto';
import { useSettings } from '../context/SettingContext';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const { colors } = useSettings();

  const calendarTheme = {
    backgroundColor: colors.background,
    calendarBackground: colors.background,
    textSectionTitleColor: colors.tint,
    dayTextColor: colors.text,
    todayTextColor: colors.tint,
    selectedDayBackgroundColor: colors.tint,
    selectedDayTextColor: "#fff",
    arrowColor: colors.tint,
    monthTextColor: colors.tint,
  };

  const handleDayPress = (day: { dateString: string }) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Calendar
        theme={calendarTheme}
        onDayPress={handleDayPress}
        markedDates={{
          ...(selectedDate ? { [selectedDate]: { selected: true, selectedColor: colors.tint } } : {}),
        }}
      />
      <View style={styles.footer}>
        <Fontisto name="smiling" size={50} color={colors.tint} />
        <Text style={[styles.text, { color: colors.text }]}>You have a free day</Text>
        <Text style={[styles.subtext, { color: colors.text }]}>Take it easy</Text>
      </View>
      <TouchableOpacity style={[styles.fab, { backgroundColor: colors.tint }]}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  footer: {
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 20,
  },
  subtext: {
    fontSize: 14,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 100,
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
