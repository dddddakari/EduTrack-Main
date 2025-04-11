import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSettings } from '../context/SettingContext';

const About = () => {
  const { colors } = useSettings();

  const appInfo = {
    version: '1.0.0',
    developer: 'NaNNinjas',
    website: 'https://mondrianandme.com/',
    privacyPolicy: '/privacy-policy',
    termsOfService: '/terms',
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>About the App</Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={[styles.infoLabel, { color: colors.text }]}>Version</Text>
          <Text style={[styles.infoValue, { color: colors.text }]}>{appInfo.version}</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={[styles.infoLabel, { color: colors.text }]}>Developer</Text>
          <Text style={[styles.infoValue, { color: colors.text }]}>{appInfo.developer}</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.linkItem}
        onPress={() => Linking.openURL(appInfo.website)}
      >
        <Ionicons name="globe-outline" size={24} color={colors.tint} />
        <Text style={[styles.linkText, { color: colors.text }]}>Visit our website</Text>
        <Ionicons name="chevron-forward" size={20} color={colors.tint} />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.linkItem}
        onPress={() => Linking.openURL(appInfo.privacyPolicy)}
      >
        <Ionicons name="lock-closed-outline" size={24} color={colors.tint} />
        <Text style={[styles.linkText, { color: colors.text }]}>Privacy Policy</Text>
        <Ionicons name="chevron-forward" size={20} color={colors.tint} />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.linkItem}
        onPress={() => Linking.openURL(appInfo.termsOfService)}
      >
        <Ionicons name="document-text-outline" size={24} color={colors.tint} />
        <Text style={[styles.linkText, { color: colors.text }]}>Terms of Service</Text>
        <Ionicons name="chevron-forward" size={20} color={colors.tint} />
      </TouchableOpacity>
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
    fontWeight: 'bold',
    marginBottom: 30,
  },
  infoContainer: {
    marginBottom: 30,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  infoLabel: {
    fontSize: 16,
  },
  infoValue: {
    fontSize: 16,
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  linkText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
  },
});

export default About;