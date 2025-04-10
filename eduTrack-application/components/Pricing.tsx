import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useNavigation } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function PricingPage() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  const plans = [
    {
      title: '🥇 Gold Plan',
      price: '$1,000,000',
      description: 'Basic access to our golden nonsense.',
    },
    {
      title: '💎 Diamond Plan',
      price: '$10,000,000',
      description: 'You shine bright with this bling-tier access.',
    },
    {
      title: '🛸 Alien Ultra Plan',
      price: '$100,000,000',
      description: 'Includes abduction insurance and intergalactic support.',
    },
    {
      title: '🚀 NASA+ Plan',
      price: '$999,999,999',
      description: 'Comes with a Mars ticket. Maybe.',
    },
  ];

  return (
    <ScrollView style={{ backgroundColor: theme.background }}>
      <Text style={[styles.title, { color: theme.text }]}>Our Ridiculous Pricing</Text>

      {plans.map((plan, index) => (
        <View
          key={index}
          style={[styles.card, { backgroundColor: colorScheme === 'dark' ? '#222' : '#fff', borderColor: theme.tint }]}
        >
          <Text style={[styles.planTitle, { color: theme.tint }]}>{plan.title}</Text>
          <Text style={[styles.price, { color: theme.text }]}>{plan.price}</Text>
          <Text style={[styles.description, { color: theme.text }]}>{plan.description}</Text>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed ? theme.tabIconDefault : theme.tint,
              },
            ]}
            onPress={() => alert(`Subscribed to ${plan.title}`)}
          >
            <Text style={styles.buttonText}>Subscribe</Text>
          </Pressable>
        </View>
      ))}

      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={{ color: theme.tint }}>← Go Back</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    borderWidth: 2,
    borderRadius: 16,
    marginHorizontal: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  planTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButton: {
    alignItems: 'center',
    marginBottom: 40,
  },
});
