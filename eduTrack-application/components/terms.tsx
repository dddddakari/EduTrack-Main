import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSettings } from '../app/context/SettingContext';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TermsOfService = () => {
  const { colors } = useSettings();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.tint} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>Terms of Service</Text>
        <View style={{ width: 24 }} /> {/* Spacer for alignment */}
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.effectiveDate, { color: colors.text }]}>Effective: November 1, 2023</Text>
        
        <Text style={[styles.sectionTitle, { color: colors.text }]}>1. Acceptance of Terms</Text>
        <Text style={[styles.bodyText, { color: colors.text }]}>
          By accessing or using our application, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>2. User Responsibilities</Text>
        <Text style={[styles.bodyText, { color: colors.text }]}>
          You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>3. Prohibited Uses</Text>
        <Text style={[styles.bodyText, { color: colors.text }]}>
          You may not use our service for any illegal or unauthorized purpose. You must not transmit any worms, viruses or any code of a destructive nature.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>4. Intellectual Property</Text>
        <Text style={[styles.bodyText, { color: colors.text }]}>
          The Service and its original content, features, and functionality are and will remain the exclusive property of [Your Company] and its licensors.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>5. Termination</Text>
        <Text style={[styles.bodyText, { color: colors.text }]}>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>6. Changes to Terms</Text>
        <Text style={[styles.bodyText, { color: colors.text }]}>
          We reserve the right to modify these terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page.
        </Text>

        <Text style={[styles.contactText, { color: colors.text }]}>
          For any questions about these Terms, please contact us at legal@yourcompany.com
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  content: {
    padding: 20,
  },
  effectiveDate: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  contactText: {
    fontSize: 16,
    marginTop: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default TermsOfService;