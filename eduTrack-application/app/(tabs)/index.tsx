import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSettings } from "../../context/SettingContext";
import TaskItem from "../../components/TaskItem";
import { Ionicons } from "@expo/vector-icons";
import TaskModal from "../../components/Task";

// This is the main task list component that displays today's tasks, upcoming tasks, and completed tasks
// It uses a FlatList to render the tasks in sections and includes a button to add new tasks
export default function TaskList() {
  const { getTodaysTasks, getFutureTasks, getCompletedTasks, colors } =
    useSettings();
  const [modalVisible, setModalVisible] = useState(false);

  // Function to render the task list
  // It uses FlatList to display tasks in sections
  return (
    // Main container for the task list
    // TASKS are seperated by date and status
    // Each section has a title and a list of tasks
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={[
          { title: "Today's Tasks", data: getTodaysTasks() },
          { title: "Upcoming Tasks", data: getFutureTasks() },
          { title: "Completed Tasks", data: getCompletedTasks() },
        ]}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              {item.title}
            </Text>
            {item.data.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </View>
        )}
      />

      {/* Floating action button to add a new task */}
      {/* It opens a modal to create a new task */}
      <TouchableOpacity
        style={[styles.addButton, { backgroundColor: colors.tint }]}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>

      <TaskModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  addButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
});
