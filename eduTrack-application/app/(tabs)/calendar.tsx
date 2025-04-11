import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useSettings } from '../../context/SettingContext';
import TaskItem from '../../components/TaskItem';

//  CalendarView component to display a calendar and tasks for the selected date
//  It uses the react-native-calendars library to create a calendar view
//  and displays tasks for the selected date using a FlatList component.
//  The component also handles dark mode and light mode settings using the useSettings context.
export default function CalendarView() {
  const { tasks, colors, isDarkMode, getTasksByDate } = useSettings();
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);

  // Calendar theme that responds to dark mode
  // and light mode settings
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
    textDisabledColor: isDarkMode ? "#555" : "#ccc",
    indicatorColor: colors.tint,
  };

  // Marked dates with different colors for completed tasks
  const markedDates = tasks.reduce((acc: Record<string, any>, task) => {
    acc[task.date] = {
      marked: true,
      dotColor: task.completed ? 'green' : colors.tint,
      selected: selectedDate === task.date
    };
    return acc;
  }, {});

  // Add the selected date if it doesn't have tasks
  if (!markedDates[selectedDate]) {
    markedDates[selectedDate] = { selected: true, selectedColor: colors.tint };
  }

  // Main component render
  // Displays the calendar and tasks for the selected date
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Calendar
        theme={calendarTheme}
        markedDates={markedDates}
        onDayPress={(day: { dateString: React.SetStateAction<string>; }) => setSelectedDate(day.dateString)}
      />

      {/* Display tasks for the selected date */}
      <View style={{ padding: 20 }}>
        <Text style={{ 
          fontSize: 18, 
          fontWeight: 'bold', 
          color: colors.text,
          marginBottom: 15 
        }}>
          Tasks for today?
        </Text>
        {/* FlatList to display tasks for the selected date */}
        {/* It uses the getTasksByDate function to filter tasks by date */}
        <FlatList
          data={getTasksByDate(selectedDate)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TaskItem task={item} />}
          ListEmptyComponent={
            <Text style={{ color: colors.text }}>
              No tasks for this day! Try adding some. Or Enjoy Your break!
            </Text>
          }
        />
      </View>
    </View>
  );
}