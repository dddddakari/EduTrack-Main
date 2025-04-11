import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";
import { AntDesign } from "@expo/vector-icons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useSettings } from "../../context/SettingContext";
import TaskItem from "../../components/TaskItem";

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const { colors, isDarkMode, tasks, getTasksByDate } = useSettings();
  const [calendarTheme, setCalendarTheme] = useState({});
  const [tasksForDate, setTasksForDate] = useState<any[]>([]);

  useEffect(() => {
    setCalendarTheme({
      backgroundColor: colors.background,
      calendarBackground: colors.background,
      textSectionTitleColor: colors.tint,
      dayTextColor: colors.text,
      todayTextColor: colors.tint,
      selectedDayBackgroundColor: colors.tint,
      selectedDayTextColor: "#fff",
      arrowColor: colors.tint,
      monthTextColor: colors.tint,
      textDisabledColor: isDarkMode ? "#555" : "#ccc",
      dotColor: colors.tint,
      selectedDotColor: "#fff",
      disabledArrowColor: isDarkMode ? "#333" : "#ddd",
      indicatorColor: colors.tint,
    });
  }, [colors, isDarkMode]);

  useEffect(() => {
    if (selectedDate) {
      setTasksForDate(getTasksByDate(selectedDate));
    }
  }, [selectedDate]);

  const handleDayPress = (day: { dateString: string }) => {
    setSelectedDate(day.dateString);
  };

  // Create marked dates
  const markedDates: any = {};
  tasks.forEach((task) => {
    if (task.date) {
      markedDates[task.date] = { marked: true, dotColor: colors.tint };
    }
  });
  if (selectedDate) {
    markedDates[selectedDate] = {
      ...markedDates[selectedDate],
      selected: true,
      selectedColor: colors.tint,
    };
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Calendar
        key={isDarkMode ? "dark" : "light"}
        theme={calendarTheme}
        onDayPress={handleDayPress}
        markedDates={markedDates}
      />

      {selectedDate && (
        <View style={styles.tasksContainer}>
          <Text style={[styles.dateHeader, { color: colors.text }]}>
            Tasks for {new Date(selectedDate).toLocaleDateString()}
          </Text>

          <ScrollView style={styles.tasksScroll}>
            {tasksForDate.length > 0 ? (
              tasksForDate.map((task: any) => (
                <TaskItem key={task.id} task={task} onToggle={() => {}} onDelete={() => {}} />
              ))
            ) : (
              <View style={styles.noTasks}>
                <Fontisto name="smiling" size={50} color={colors.tint} />
                <Text style={[styles.noTasksText, { color: colors.text }]}>No tasks for this day</Text>
              </View>
            )}
          </ScrollView>
        </View>
      )}

      {!selectedDate && (
        <View style={styles.footer}>
          <Fontisto name="smiling" size={50} color={colors.tint} />
          <Text style={[styles.text, { color: colors.text }]}>Select a date to view tasks</Text>
        </View>
      )}

      <TouchableOpacity style={[styles.fab, { backgroundColor: colors.tint }]}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50 },
  tasksContainer: { flex: 1, marginTop: 20 },
  dateHeader: { fontSize: 18, fontWeight: "bold", marginBottom: 15 },
  tasksScroll: { flex: 1 },
  noTasks: { alignItems: "center", justifyContent: "center", padding: 40 },
  noTasksText: { marginTop: 15, fontSize: 16 },
  footer: { alignItems: "center", marginTop: 20 },
  text: { fontSize: 18, fontWeight: "bold", paddingTop: 20 },
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
