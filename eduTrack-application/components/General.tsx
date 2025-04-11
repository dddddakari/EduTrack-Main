import React, { useContext } from "react";
import { View, Text, StyleSheet, Switch, ScrollView } from "react-native";
import { SettingsContext } from "../context/SettingContext";

const General = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    return null;
  }

  const { isDarkMode, setIsDarkMode, colors } = context;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        General Settings
      </Text>

      <View style={styles.setting}>
        <Text style={[styles.label, { color: colors.text }]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(!isDarkMode)}
          trackColor={{ false: "#767577", true: colors.tint }}
          thumbColor={isDarkMode ? "#f4f3f4" : "#f4f3f4"}
        />
      </View>

      <View
        style={[
          styles.landAcknowledgment,
          { backgroundColor: colors.cardBackground },
        ]}
      >
        <Text style={[styles.title, { color: colors.text }]}>
          Land Acknowledgment
        </Text>

        <ScrollView style={styles.acknowledgmentScroll}>
          <Text style={[styles.landText, { color: colors.text }]}>
            In the spirit of respect, reciprocity and truth, we honour and
            acknowledge Moh'kinsstis, and the traditional Treaty 7 territory and
            oral practices of the Blackfoot confederacy:
          </Text>
          <Text style={[styles.bulletPoint, { color: colors.text }]}>
            • Siksika
          </Text>
          <Text style={[styles.bulletPoint, { color: colors.text }]}>
            • Kainai
          </Text>
          <Text style={[styles.bulletPoint, { color: colors.text }]}>
            • Piikani
          </Text>
          <Text style={[styles.landText, { color: colors.text }]}>
            Stoney Nakoda Nations:
          </Text>
          <Text style={[styles.bulletPoint, { color: colors.text }]}>
            • Chiniki
          </Text>
          <Text style={[styles.bulletPoint, { color: colors.text }]}>
            • Bearspaw
          </Text>
          <Text style={[styles.bulletPoint, { color: colors.text }]}>
            • Goodstoney
          </Text>
          <Text style={[styles.landText, { color: colors.text }]}>
            and Tsuut'ina Nation. We acknowledge that this territory is home to
            the Otipemisiwak Métis Government of the Métis Nation within Alberta
            Districts 5 and 6.
            {"\n\n"}
            This sacred gathering place provides us with an opportunity to
            engage in and demonstrate leadership on reconciliation. Thank you
            for your enthusiasm and commitment to join our team on the lands of
            Treaty 7 territory.
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
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  setting: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
  },
  landAcknowledgment: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
  },
  acknowledgmentScroll: {
    maxHeight: 400,
  },
  landText: {
    fontSize: 16,
    lineHeight: 30,
    marginBottom: 5,
    fontWeight: "400",
    fontStyle: "italic",
  },
  bulletPoint: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 15,
  },
});

export default General;
