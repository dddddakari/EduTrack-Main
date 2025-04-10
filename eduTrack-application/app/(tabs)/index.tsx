// app/index.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Fab from "@/components/edubutton";
import { useSettings } from '../context/SettingContext';

const InboxScreen = () => {
  const { colors } = useSettings();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.text }]}>Tasks</Text>

      <View style={styles.content}>
        <Ionicons name="grid" size={60} color={colors.tint} />
        <Text style={[styles.title, { color: colors.text }]}>New Tasks</Text>
        <Text style={[styles.description, { color: colors.text }]}>
          It's time to set a new task! Start Now!
        </Text>

        <TouchableOpacity style={[styles.newTaskButton, { backgroundColor: colors.tint }]}>
          <Ionicons name="add-circle" size={20} color="white" />
          <Text style={styles.newTaskText}>New Inbox Task</Text>
        </TouchableOpacity>
      </View>

      <Fab onPress={() => console.log("Create new post")} tabBarHeight={40} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    textAlign: "center",
    marginVertical: 10,
  },
  newTaskButton: {
    flexDirection: "row",
    alignItems: "center",
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
  },
});

export default InboxScreen;