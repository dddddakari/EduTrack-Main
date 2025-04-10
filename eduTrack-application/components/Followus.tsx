import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSettings } from '../app/context/SettingContext';

const FollowUs = () => {
  const { colors } = useSettings();

  const socialLinks = [
    {
      name: 'Twitter',
      icon: 'logo-twitter',
      url: 'https://twitter.com',
    },
    {
      name: 'Instagram',
      icon: 'logo-instagram',
      url: 'https://instagram.com',
    },
    {
      name: 'Facebook',
      icon: 'logo-facebook',
      url: 'https://facebook.com',
    },
    {
      name: 'YouTube',
      icon: 'logo-youtube',
      url: 'https://youtube.com',
    },
  ];

  const handlePress = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Follow Us</Text>
      <Text style={[styles.subtitle, { color: colors.text }]}>
        Stay connected with us on social media
      </Text>

      <View style={styles.socialContainer}>
        {socialLinks.map((social, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.socialButton, { backgroundColor: colors.cardBackground }]}
            onPress={() => handlePress(social.url)}
          >
            <Ionicons name={social.icon as keyof typeof Ionicons.glyphMap} size={30} color={colors.tint} />
            <Text style={[styles.socialText, { color: colors.text }]}>{social.name}</Text>
          </TouchableOpacity>
        ))}
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
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
  },
  socialContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  socialButton: {
    width: '48%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  socialText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default FollowUs;