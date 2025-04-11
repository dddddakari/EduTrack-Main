// components/HelpAndFeedback.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert, Linking } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { useSettings } from '../context/SettingContext';

export default function HelpAndFeedback() {
  const { colors } = useSettings();

  const handleFeedbackPress = () => {
    const email = 'sonic@team.ca';
    const subject = 'StudyPlanner Feedback';
    const body = 'Hi team,\n\nHere is some feedback about the StudyPlanner app:\n\n';
  
    const emailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    Linking.openURL(emailUrl).catch(err =>
      Alert.alert('Error', 'Could not open email client. Please try again.')
    );
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.tint }]}>📚 Welcome to StudyPlanner!</Text>

      <Text style={[styles.paragraph, { color: colors.text }]}>
        StudyPlanner helps you organize your study sessions, tasks, and deadlines in a simple way:
      </Text>

      <View style={[styles.stepCard, { backgroundColor: colors.cardBackground, borderColor: colors.tint }]}>
        <Text style={[styles.stepTitle, { color: colors.tint }]}>1. Create Tasks</Text>
        <Text style={[styles.stepText, { color: colors.text }]}>
          Add subjects or assignments you need to study for, including due dates and estimated time.
        </Text>
      </View>

      <View style={[styles.stepCard, { backgroundColor: colors.cardBackground, borderColor: colors.tint }]}>
        <Text style={[styles.stepTitle, { color: colors.tint }]}>2. Schedule Sessions</Text>
        <Text style={[styles.stepText, { color: colors.text }]}>
          Plan your study blocks across your week using the calendar tab.
        </Text>
      </View>

      <View style={[styles.stepCard, { backgroundColor: colors.cardBackground, borderColor: colors.tint }]}>
        <Text style={[styles.stepTitle, { color: colors.tint }]}>3. Track Progress</Text>
        <Text style={[styles.stepText, { color: colors.text }]}>
          Check off completed tasks and keep track of what’s left.
        </Text>
      </View>

      <Pressable style={({ pressed }) => [
        styles.feedbackButton,
        { backgroundColor: pressed ? colors.tabIconDefault : colors.tint },
      ]} onPress={handleFeedbackPress}>
        <Text style={styles.feedbackText}>Send Feedback 💌</Text>
      </Pressable>

      <Pressable style={styles.backButton}>
        <Text style={{ color: colors.tint }}>← Go Back</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  stepCard: {
    borderWidth: 2,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  stepText: {
    fontSize: 16,
  },
  feedbackButton: {
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  feedbackText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    alignItems: 'center',
    marginTop: 10,
  },
});
