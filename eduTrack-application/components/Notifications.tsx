import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import { useSettings } from '../context/SettingContext';

const SoundsAndNotifications = () => {
  const { colors } = useSettings();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [soundsEnabled, setSoundsEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Sounds & Notifications</Text>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Notification Settings</Text>
        
        <View style={styles.setting}>
          <Text style={[styles.label, { color: colors.text }]}>Enable Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: "#767577", true: colors.tint }}
          />
        </View>

        <View style={styles.setting}>
          <Text style={[styles.label, { color: colors.text }]}>Notification Sounds</Text>
          <Switch
            value={soundsEnabled}
            onValueChange={setSoundsEnabled}
            trackColor={{ false: "#767577", true: colors.tint }}
          />
        </View>

        <View style={styles.setting}>
          <Text style={[styles.label, { color: colors.text }]}>Vibration</Text>
          <Switch
            value={vibrationEnabled}
            onValueChange={setVibrationEnabled}
            trackColor={{ false: "#767577", true: colors.tint }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Sound Settings</Text>
        
        <View style={styles.setting}>
          <Text style={[styles.label, { color: colors.text }]}>App Sounds</Text>
          <Switch
            value={soundsEnabled}
            onValueChange={setSoundsEnabled}
            trackColor={{ false: "#767577", true: colors.tint }}
          />
        </View>

        <View style={styles.setting}>
          <Text style={[styles.label, { color: colors.text }]}>Volume</Text>
          {/* In a real app, you would use a Slider component here */}
          <Text style={[styles.value, { color: colors.text }]}>Medium</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    color: '#666',
  },
});

export default SoundsAndNotifications;