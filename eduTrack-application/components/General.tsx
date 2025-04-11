import React, { useContext } from "react";
import { View, Text, StyleSheet, Switch, ScrollView } from "react-native";
import { SettingsContext } from "../context/SettingContext";

const General = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    return null; // Handle case when context is not available
  }

  const {
    isDarkMode,
    setIsDarkMode,
  } = context;

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>General Settings</Text>

      <View style={styles.setting}>
        <Text style={[styles.label, isDarkMode && styles.darkText]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(!isDarkMode)}
        />
      </View>

      <View style={[styles.landAcknowledgment, isDarkMode && styles.darkLandAcknowledgment]}>
        <Text style={[styles.title, isDarkMode && styles.darkText]}>Land Acknowledgment</Text>
        
        {/* Add ScrollView to make the acknowledgment text scrollable */}
        <ScrollView>
          <Text style={[styles.landText, isDarkMode && styles.darkText]}>
            In the spirit of respect, reciprocity and truth, we honour and acknowledge Moh’kinsstis, and the traditional Treaty 7 territory and oral practices of the Blackfoot confederacy: Siksika, Kainai, Piikani, Stoney Nakoda Nations: Chiniki, Bearspaw, Goodstoney and Tsuut’ina Nation. We acknowledge that this territory is home to the Otipemisiwak Métis Government of the Métis Nation within Alberta Districts 5 and 6. Finally, we acknowledge all Nations – Indigenous and non – who live, work and play on this land, and who honour and celebrate this territory.

            This sacred gathering place provides us with an opportunity to engage in and demonstrate leadership on reconciliation. Thank you for your enthusiasm and commitment to join our team on the lands of Treaty 7 territory.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  darkContainer: {
    backgroundColor: "#333",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  darkText: {
    color: "#fff",
  },
  setting: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    flex: 1,
    fontSize: 18,
  },
  landAcknowledgment: {
    marginTop: 30,
    padding: 10,
    borderRadius: 5,
    maxHeight: 500,
    marginBottom: 30,
  },
  darkLandAcknowledgment: {
    backgroundColor: "#555",
  },
  landText: {
    fontSize: 16,
    fontStyle: "italic",
  },
});

export default General;
