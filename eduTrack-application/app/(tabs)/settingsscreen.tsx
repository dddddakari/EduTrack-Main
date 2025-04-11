import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import General from "../../components/General";
import Pricing from "../../components/Pricing";
import DateAndTime from "../../components/DateAndTime";
import HelpAndFeedback from "../../components/HelpAndFeedback";
import { useSettings } from "../../context/SettingContext";
import FollowUs from "../../components/Followus";
import About from "../../components/About";
import Notifications from "../../components/Notifications";
import AuthModal from "../../components/auth";



// settings screen component
// This component is responsible for rendering the settings screen of the application
// It includes various settings options and handles user authentication
// It uses the useSettings context to manage user state and theme colors
// It also includes a modal for user authentication

const SettingsScreen = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [authModalVisible, setAuthModalVisible] = useState(false);
  const { colors, user, logout } = useSettings();

  // Function to render the active section based on the user's selection
  // It uses a switch statement to determine which component to render
  const renderActiveSection = () => {
    switch (activeSection) {
      case "General":
        return <General />;
      case "Pricing":
        return <Pricing />;
      case "SoundsAndNotifications":
        return <Notifications />;
      case "DateAndTime":
        return <DateAndTime />;
      case "HelpAndFeedback":
        return <HelpAndFeedback />;
      case "FollowUs":
        return <FollowUs />;
      case "About":
        return <About />;
      default:
        return null;
    }
  };

  // Main component render
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.text }]}>Settings</Text>

      {/* Profile section with user information or sign-in prompt */}
      {!activeSection && (
        <TouchableOpacity
          style={[
            styles.profileSection,
            { backgroundColor: colors.cardBackground },
          ]}
          onPress={user ? undefined : () => setAuthModalVisible(true)}
        >
          <Image
            source={
              user?.profileImage || require("@/assets/images/placeholder.jpg")
            }
            style={styles.profileImage}
          />
          {/* User information or sign-in prompt */}
          {/* If user is logged in, show their name and logout option */}
          {user ? (
            <View style={styles.userInfo}>
              <Text style={[styles.userName, { color: colors.text }]}>
                Hello, {user.name}
              </Text>
              <TouchableOpacity onPress={logout}>
                <Text style={[styles.logoutText, { color: colors.tint }]}>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Text style={[styles.signInText, { color: colors.text }]}>
              Sign in or Sign up
            </Text>
          )}
          <Ionicons name="chevron-forward" size={20} color={colors.tint} />
        </TouchableOpacity>
      )}

  
        {/* Render the active section if one is selected */}
        {/* Also adds  a big teal button at the top to let you get back to thr settings */}

      {activeSection ? (
        <View style={styles.sectionContainer}>
          <TouchableOpacity
            style={[styles.backButton, { backgroundColor: colors.tint }]}
            onPress={() => setActiveSection(null)}
          >
            <Ionicons name="arrow-back" size={20} color="white" />
            <Text style={styles.backButtonText}>Back To Settings</Text>
          </TouchableOpacity>
          {renderActiveSection()}
        </View>
      ) : (
        <>
          <View
            style={[
              styles.settingsList,
              { backgroundColor: colors.cardBackground },
            ]}
          >
            {            /* Settings items for different sections */
            /* Each item is a touchable that sets the active section when pressed */}
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
              icon="time-outline"
              label="Date & Time"
              onPress={() => setActiveSection("DateAndTime")}
            />
            <SettingsItem
              icon="musical-notes-outline"
              label="Sounds & Notifications"
              onPress={() => setActiveSection("SoundsAndNotifications")}
            />
          </View>

          <View
            style={[
              styles.settingsList,
              { backgroundColor: colors.cardBackground },
            ]}
          >
            {/* Additional settings items for help, feedback, and about sections */
            /* Each item is a touchable that sets the active section when pressed */
            /* they are seperated into two sections for better organization
            also it looks better this way */}
            
            <SettingsItem
              icon="help-circle-outline"
              label="Help & Feedback"
              onPress={() => setActiveSection("HelpAndFeedback")}
            />
            <SettingsItem
              icon="people-outline"
              label="Follow Us"
              onPress={() => setActiveSection("FollowUs")}
            />
            <SettingsItem
              icon="information-circle-outline"
              label="About"
              onPress={() => setActiveSection("About")}
            />
          </View>
        </>
      )}

      {/* Authentication modal for signing in or signing up */}
      {/* This modal is shown when the user is not logged in and presses the sign-in prompt */}
      {/* It is also shown when the user presses the logout button */}
      <AuthModal
        visible={authModalVisible}
        onClose={() => setAuthModalVisible(false)}
      />
    </View>
  );
};

import { Ionicons } from "@expo/vector-icons";

// SettingsItem component
// This component is responsible for rendering each item in the settings list
const SettingsItem = ({
  icon,
  label,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
}) => {
  const { colors } = useSettings();

  return (
    <TouchableOpacity
      style={[styles.settingsItem, { borderBottomColor: colors.tint }]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={24} color={colors.tint} />
      <Text style={[styles.settingsLabel, { color: colors.text }]}>
        {label}
      </Text>
      <Ionicons name="chevron-forward" size={20} color={colors.tint} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
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
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
  },
  logoutText: {
    fontSize: 14,
    marginTop: 4,
    color: "#17C3B2",
  },
  settingsList: {
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
  },
  settingsLabel: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  sectionContainer: {
    flex: 1,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    margin: 15,
    justifyContent: "center",
  },
  backButtonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 8,
  },
});

export default SettingsScreen;
