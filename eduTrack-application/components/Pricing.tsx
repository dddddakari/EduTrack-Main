import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from 'expo-router';
import { Colors } from '@/constants/Colors'; // Assuming you're using this for colors

export default function PricingPage() {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: Colors.light.background }]}>
      <Text style={[styles.title, { color: Colors.light.text }]}>Our Ridiculous Pricing</Text>

      <View style={styles.pricingContainer}>
        <Text style={[styles.price, { color: Colors.light.tint }]}>Gold Plan: $1,000,000</Text>
        <Text style={[styles.price, { color: Colors.light.tint }]}>Platinum Plan: $5,000,000</Text>
        <Text style={[styles.price, { color: Colors.light.tint }]}>Diamond Plan: $10,000,000</Text>
        <Text style={[styles.price, { color: Colors.light.tint }]}>Super Ultra Mega Plan: $50,000,000</Text>
      </View>

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
        color={Colors.light.tint}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pricingContainer: {
    marginBottom: 30,
  },
  price: {
    fontSize: 24,
    marginVertical: 10,
    fontWeight: '700',
  },
});
