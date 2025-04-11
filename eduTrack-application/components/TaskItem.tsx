import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSettings } from "../context/SettingContext";


// This component represents a single task item in the task list.
// It displays the task title, date, time, and a checkbox to mark it as completed.
// It also includes a delete button to remove the task from the list.
// The component uses the `useSettings` context to access the current theme colors and task management functions.
const TaskItem = ({ task }: { task: any }) => {
  const { colors, toggleTask, deleteTask } = useSettings();

  return (
    <View
      style={[styles.taskContainer, { backgroundColor: colors.cardBackground }]}
    >
      <TouchableOpacity onPress={() => toggleTask(task.id)}>
        <Ionicons
          name={task.completed ? "checkbox" : "square-outline"}
          size={24}
          color={task.completed ? "green" : colors.text}
        />
      </TouchableOpacity>

    
        {/* Task title and time */}
        {/* The task title is displayed with a line-through style if the task is completed */}
      <View style={styles.taskContent}>
        <Text
          style={[
            styles.taskTitle,
            {
              color: colors.text,
              textDecorationLine: task.completed ? "line-through" : "none",
            },
          ]}
        >
          {task.title}
        </Text>
        <Text style={[styles.taskTime, { color: colors.text }]}>
          {task.date} • {task.time}
        </Text>
      </View>

      <TouchableOpacity onPress={() => deleteTask(task.id)}>
        <Ionicons name="trash-outline" size={20} color="#FF6B6B" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  taskContent: {
    flex: 1,
    marginLeft: 15,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  taskTime: {
    fontSize: 12,
    opacity: 0.7,
  },
});

export default TaskItem;
