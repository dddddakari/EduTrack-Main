
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Fab from "@/components/edubutton";
import { useSettings } from "../context/SettingContext";
import TaskModal from "../../components/Task";
import TaskItem from "../../components/TaskItem";

const InboxScreen = () => {
  const { colors, tasks, toggleTask, deleteTask } = useSettings();
  const [modalVisible, setModalVisible] = useState(false);

  const completedTasks = tasks.filter((task: any) => task.completed);
  const incompleteTasks = tasks.filter((task: any) => !task.completed);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.text }]}>Tasks</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {incompleteTasks.length > 0 && (
          <>
            <Text style={[styles.sectionHeader, { color: colors.text }]}>To Do</Text>
            {incompleteTasks.map((task: any) => (
              <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
            ))}
          </>
        )}

        {completedTasks.length > 0 && (
          <>
            <Text style={[styles.sectionHeader, { color: colors.text }]}>Completed</Text>
            {completedTasks.map((task: any) => (
              <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
            ))}
          </>
        )}

        {tasks.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons name="grid" size={60} color={colors.tint} />
            <Text style={[styles.title, { color: colors.text }]}>No Tasks Yet</Text>
            <Text style={[styles.description, { color: colors.text }]}>
              It's time to set a new task! Start Now!
            </Text>
          </View>
        )}
      </ScrollView>

      <Fab onPress={() => setModalVisible(true)} tabBarHeight={40} />
      <TaskModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50 },
  header: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  scrollContainer: { paddingBottom: 80 },
  sectionHeader: { fontSize: 20, fontWeight: "600", marginTop: 20, marginBottom: 10 },
  emptyState: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 100 },
  title: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
  description: { textAlign: "center", marginVertical: 10 },
});

export default InboxScreen;
