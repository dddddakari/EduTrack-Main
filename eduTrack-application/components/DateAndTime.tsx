import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const General = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>General Settings</Text>
      <Text style={styles.text}>Modify general preferences here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#58355E',
  },
  text: {
    fontSize: 16,
    color: '#58355E',
    marginTop: 10,
  },
});

export default General;
