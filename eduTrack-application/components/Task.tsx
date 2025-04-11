import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker"; // Import the modal datetime picker
import { useSettings } from "../context/SettingContext";


// This component is a modal for adding a new task.
// It includes input fields for task title, date, and time.
// The date and time picker is implemented using the react-native-modal-datetime-picker library.
// The modal is displayed when the user clicks on the add task button in the task list screen.
const TaskModal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  const { colors, addTask } = useSettings();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [isPickerVisible, setPickerVisible] = useState(false);

  // Function to handle the date and time selection
  // It updates the date state with the selected date and time
  // and closes the picker modal
  const handleAddTask = () => {
    if (title.trim()) {
      addTask({
        title,
        date: date.toISOString().split("T")[0],
        time: date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        category: "Personal",
        description: "",
        completed: false,
      });
      setTitle("");
      setDate(new Date());
      onClose();
    }
  };

  const handleDateChange = (selectedDate: Date) => {
    setDate(selectedDate);
    setPickerVisible(false); // Hide the picker after date selection
  };

  // Function to show the date picker modal
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View
        style={[styles.modalContainer, { backgroundColor: "rgba(0,0,0,0.5)" }]}
      >
        <View
          style={[
            styles.modalContent,
            { backgroundColor: colors.cardBackground },
          ]}
        >
          <Text style={[styles.title, { color: colors.text }]}>
            Add New Task
          </Text>

          <TextInput
            style={[
              styles.input,
              {
                color: colors.text,
                borderColor: colors.tint,
              },
            ]}
            placeholder="Task title"
            placeholderTextColor="#999"
            value={title}
            onChangeText={setTitle}
          />

          <TouchableOpacity
            style={[styles.dateButton, { borderColor: colors.tint }]}
            onPress={() => setPickerVisible(true)}
          >
            <Ionicons name="calendar" size={20} color={colors.tint} />
            <Text style={[styles.dateText, { color: colors.text }]}>
              {date.toLocaleDateString()} at{" "}
              {date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          </TouchableOpacity>

          {/* Use DateTimePickerModal instead */}
          <DateTimePickerModal
            isVisible={isPickerVisible}
            mode="datetime"
            date={date}
            onConfirm={handleDateChange}
            onCancel={() => setPickerVisible(false)} // Close the picker without changing the date
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#ccc" }]}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: colors.tint }]}
              onPress={handleAddTask}
            >
              <Text style={[styles.buttonText, { color: "white" }]}>
                Add Task
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  dateButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  dateText: {
    marginLeft: 10,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export default TaskModal;
