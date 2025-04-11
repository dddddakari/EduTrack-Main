// components/AuthModal.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Alert } from 'react-native';
import { useSettings } from '../context/SettingContext';
import { Ionicons } from '@expo/vector-icons';

const AuthModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const { colors, setUser } = useSettings();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = () => {
    // Basic validation
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (!isLogin && !name) {
      Alert.alert('Error', 'Please enter your name');
      return;
    }


    setUser({
      name: name || email.split('@')[0], // Use name or first part of email
      email: email
    });
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={[styles.modalOverlay, { backgroundColor: 'rgba(0,0,0,0.5)' }]}>
        <View style={[styles.modalContainer, { backgroundColor: colors.cardBackground }]}>
          <Text style={[styles.title, { color: colors.text }]}>
            {isLogin ? 'Sign In' : 'Sign Up'}
          </Text>

          {!isLogin && (
            <TextInput
              style={[styles.input, { color: colors.text, borderColor: colors.tint }]}
              placeholder="Name"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
            />
          )}

          <TextInput
            style={[styles.input, { color: colors.text, borderColor: colors.tint }]}
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={[styles.input, { color: colors.text, borderColor: colors.tint }]}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={[styles.authButton, { backgroundColor: colors.tint }]}
            onPress={handleAuth}
          >
            <Text style={styles.buttonText}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={[styles.toggleText, { color: colors.tint }]}>
              {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={[styles.closeText, { color: colors.text }]}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  authButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  toggleText: {
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 14,
  },
  closeButton: {
    alignItems: 'center',
    padding: 10,
  },
  closeText: {
    fontSize: 16,
    color: '#666',
  },
});

export default AuthModal;