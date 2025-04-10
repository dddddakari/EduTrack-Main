import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert, TextInput, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Fab from "@/components/edubutton";

const InboxScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = newTask;
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, newTask]);
    }

    setNewTask("");
    setModalVisible(false);
  };

  const handleEditTask = (index) => {
    setNewTask(tasks[index]);
    setEditingIndex(index);
    setModalVisible(true);
  };

  const handleDeleteTask = (index) => {
    Alert.alert("Delete Task", "Are you sure you want to delete this task?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => setTasks(tasks.filter((_, i) => i !== index)),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tasks</Text>

      <View style={styles.content}>
        {tasks.length === 0 ? (
          <>
            <Ionicons name="grid" size={60} color="#17C3B2" />
            <Text style={styles.title}>New Tasks</Text>
            <Text style={styles.description}>
              It's time to set a new task! Start Now!
            </Text>
          </>
        ) : (
          <FlatList
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.taskItem}>
                <Text style={styles.taskText}>{item}</Text>
                <View style={styles.taskActions}>
                  <TouchableOpacity onPress={() => handleEditTask(index)}>
                    <Ionicons name="pencil" size={20} color="#17C3B2" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDeleteTask(index)} style={{ marginLeft: 10 }}>
                    <Ionicons name="trash" size={20} color="red" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        )}

        <TouchableOpacity
          style={styles.newTaskButton}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="add-circle" size={20} color="white" />
          <Text style={styles.newTaskText}>New Inbox Task</Text>
        </TouchableOpacity>
      </View>

      <Fab onPress={() => setModalVisible(true)} tabBarHeight={40} />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => {
          setModalVisible(false);
          setEditingIndex(null);
          setNewTask("");
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              value={newTask}
              onChangeText={setNewTask}
              placeholder="Enter task"
              style={styles.input}
            />
            <TouchableOpacity style={styles.saveBtn} onPress={handleAddTask}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                {editingIndex !== null ? "Update Task" : "Add Task"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D4D2D5",
    padding: 20,
    paddingTop: 50
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#58355E",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#58355E",
    marginTop: 10,
  },
  description: {
    textAlign: "center",
    color: "#58355E",
    marginVertical: 10,
  },
  newTaskButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#17C3B2",
    padding: 12,
    borderRadius: 12,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  newTaskText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 5,
    fontSize: 16,
  },
  Fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    color: "#17C3B2",
  },
  taskItem: {
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskText: {
    fontSize: 16,
    color: "#333",
  },
  taskActions: {
    flexDirection: "row",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    width: "80%",
    borderRadius: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  saveBtn: {
    backgroundColor: "#17C3B2",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
});

export default InboxScreen;