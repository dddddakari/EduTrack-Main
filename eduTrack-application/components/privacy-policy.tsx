import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSettings } from '../context/SettingContext';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PrivacyPolicy = () => {
  const { colors } = useSettings();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.tint} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>Privacy Policy</Text>
        <View style={{ width: 24 }} /> {/* Spacer for alignment */}
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.effectiveDate, { color: colors.text }]}>Effective: November 1, 2023</Text>
        
        <Text style={[styles.sectionTitle, { color: colors.text }]}>1. Information We Collect</Text>
        <Text style={[styles.bodyText, { color: colors.text }]}>
          We collect personal information you provide directly to us, such as when you create an account, including your name, email address, and any other information you choose to provide.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>2. How We Use Your Information</Text>
        <Text style={[styles.bodyText, { color: colors.text }]}>
          We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>3. Sharing of Information</Text>
        <Text style={[styles.bodyText, { color: colors.text }]}>
          We do not share your personal information with third parties except as described in this policy or with your consent. We may share information with service providers who assist us in operating our services.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>4. Data Security</Text>
        <Text style={[styles.bodyText, { color: colors.text }]}>
          We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>5. Your Choices</Text>
        <Text style={[styles.bodyText, { color: colors.text }]}>
          You may update or delete your account information at any time by accessing your account settings. You may also opt out of receiving promotional communications from us.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>6. Children's Privacy</Text>
        <Text style={[styles.bodyText, { color: colors.text }]}>
          Our service does not address anyone under the age of 13. We do not knowingly collect personal information from children under 13.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>7. Changes to This Policy</Text>
        <Text style={[styles.bodyText, { color: colors.text }]}>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
        </Text>

        <Text style={[styles.contactText, { color: colors.text }]}>
          For any questions about this Privacy Policy, please contact us at privacy@yourcompany.com
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

export default PrivacyPolicy;