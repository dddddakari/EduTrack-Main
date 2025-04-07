import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {/* Profile Section */}
      <TouchableOpacity style={styles.profileSection}>
        <Image
          source={require("@/assets/images/placeholder.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.signInText}>Sign in or Sign up</Text>
        <Ionicons name="chevron-forward" size={20} color="#17C3B2" />
      </TouchableOpacity>

      {/* Settings List */}
      <View style={styles.settingsList}>
        <SettingsItem icon="settings-outline" label="General" />
        <SettingsItem icon="diamond-outline" label="Pricing" />
        <SettingsItem icon="musical-notes-outline" label="Sounds & Notifications" />
        <SettingsItem icon="time-outline" label="Date & Time" />
      </View>

      {/* Other Sections */}
      <View style={styles.settingsList}>
        <SettingsItem icon="help-circle-outline" label="Help & Feedback" />
        <SettingsItem icon="people-outline" label="Follow Us" />
        <SettingsItem icon="information-circle-outline" label="About" />
      </View>
    </View>
  );
};

const SettingsItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.settingsItem}>
    <Ionicons name={icon} size={24} color="#17C3B2" />
    <Text style={styles.settingsLabel}>{label}</Text>
    <Ionicons name="chevron-forward" size={20} color="#17C3B2" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#D4D2D5",
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#58355E",
    marginBottom: 30,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  signInText: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    color: "#58355E",
  },
  settingsList: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  settingsItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  settingsLabel: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: "#58355E",
  },
});

export default SettingsScreen;
