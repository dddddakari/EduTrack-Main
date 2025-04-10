import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const General = () => {
  // State to manage settings
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const [showHints, setShowHints] = useState(false);

  const handleDarkModeToggle = () => setIsDarkMode((prev) => !prev);
  const handleFontSizeChange = (value: string) => setFontSize(value);
  const handleHintsToggle = () => setShowHints((prev) => !prev);

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.header, isDarkMode && styles.darkText]}>General Settings</Text>
      <Text style={[styles.text, isDarkMode && styles.darkText]}>Modify general preferences here.</Text>

      {/* Dark Mode Toggle */}
      <View style={styles.settingItem}>
        <Text style={[styles.settingLabel, isDarkMode && styles.darkText]}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={handleDarkModeToggle} />
      </View>

      {/* Font Size Selection */}
      <View style={styles.settingItem}>
        <Text style={[styles.settingLabel, isDarkMode && styles.darkText]}>Font Size</Text>
        <Picker
          selectedValue={fontSize}
          style={[styles.picker, isDarkMode && styles.darkText]}
          onValueChange={handleFontSizeChange}
        >
          <Picker.Item label="Small" value="small" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Large" value="large" />
        </Picker>
      </View>

      {/* Apply Changes Button */}
      <Button
        title="Apply Changes"
        color="#17C3B2"
        onPress={() => {
          // Apply changes or save preferences
          console.log('Settings Applied:', { isDarkMode, fontSize });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#D4D2D5',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#58355E',
    marginBottom: 20,
  },
  darkText: {
    color: '#fff',
  },
  text: {
    fontSize: 16,
    color: '#58355E',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  settingLabel: {
    fontSize: 18,
    color: '#58355E',
  },
  picker: {
    height: 100,
    width: 200,
  },
});

export default General;
