import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Import the components for each section
import General from "../../components/General";
import Pricing from "../../components/Pricing";
import DateAndTime from "../../components/DateAndTime";
import HelpAndFeedback from "../../components/HelpAndFeedback";

const SettingsScreen = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Function to render the active section
  const renderActiveSection = () => {
    switch (activeSection) {
      case "General":
        return <General />;
      case "Pricing":
        return <Pricing />;
      case "DateAndTime":
        return <DateAndTime />;
      case "HelpAndFeedback":
        return <HelpAndFeedback />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {/* Only render the profile section if there's no active section */}
      {!activeSection && (
        <TouchableOpacity style={styles.profileSection}>
          <Image
            source={require("@/assets/images/placeholder.jpg")} // Replace with your profile image path
            style={styles.profileImage}
          />
          <Text style={styles.signInText}>Sign in or Sign up</Text>
          <Ionicons name="chevron-forward" size={20} color="#17C3B2" />
        </TouchableOpacity>
      )}

      {/* If an active section is selected, show the section instead of the settings list */}
      {activeSection ? (
        <View style={styles.sectionContainer}>
          <Button
            title="Back To Settings"
            color="#17C3B2"
            onPress={() => setActiveSection(null)} // Go back to the settings list
          />
          {renderActiveSection()}
        </View>
      ) : (
        // Settings List
        <View style={styles.settingsList}>
          <SettingsItem
            icon="settings-outline"
            label="General"
            onPress={() => setActiveSection("General")}
          />
          <SettingsItem
            icon="diamond-outline"
            label="Pricing"
            onPress={() => setActiveSection("Pricing")}
          />
          <SettingsItem
            icon="musical-notes-outline"
            label="Sounds & Notifications"
          />
          <SettingsItem
            icon="time-outline"
            label="Date & Time"
            onPress={() => setActiveSection("DateAndTime")}
          />
        </View>
      )}

      {/* Other Sections */}
      {!activeSection && (
        <View style={styles.settingsList}>
          <SettingsItem
            icon="help-circle-outline"
            label="Help & Feedback"
            onPress={() => setActiveSection("HelpAndFeedback")}
          />
          <SettingsItem icon="people-outline" label="Follow Us" />
          <SettingsItem icon="information-circle-outline" label="About" />
        </View>
      )}
    </View>
  );
};

const SettingsItem = ({ icon, label, onPress }: any) => (
  <TouchableOpacity
    style={styles.settingsItem}
    onPress={onPress} // Trigger the onPress function passed as a prop
  >
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
  sectionContainer: {
    flex: 1,
  },
});

export default SettingsScreen;
