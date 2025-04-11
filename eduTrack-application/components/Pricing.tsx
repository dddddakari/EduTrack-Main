import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useSettings } from "../context/SettingContext";

export default function PricingPage() {
  const { colors } = useSettings();

  const plans = [
    {
      title: "🥇 Gold Plan",
      price: "$1,000,000",
      description: "Basic access to our golden nonsense.",
    },
    {
      title: "💎 Diamond Plan",
      price: "$10,000,000",
      description: "You shine bright with this bling-tier access.",
    },
    {
      title: "🛸 Alien Ultra Plan",
      price: "$100,000,000",
      description: "Includes abduction insurance and intergalactic support.",
    },
    {
      title: "🚀 NASA+ Plan",
      price: "$999,999,999",
      description: "Comes with a Mars ticket. Maybe.",
    },
  ];

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.scrollContainer}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>
          Our Modest Pricing
        </Text>
      </View>

      <View style={styles.plansContainer}>
        {plans.map((plan, index) => (
          <View
            key={index}
            style={[
              styles.card,
              {
                backgroundColor: colors.cardBackground,
                borderColor: colors.tint,
              },
            ]}
          >
            <Text style={[styles.planTitle, { color: colors.tint }]}>
              {plan.title}
            </Text>
            <Text style={[styles.price, { color: colors.text }]}>
              {plan.price}
            </Text>
            <Text style={[styles.description, { color: colors.text }]}>
              {plan.description}
            </Text>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                {
                  backgroundColor: pressed
                    ? colors.tabIconDefault
                    : colors.tint,
                },
              ]}
              onPress={() => alert(`Subscribed to ${plan.title}`)}
            >
              <Text style={styles.buttonText}>Subscribe</Text>
            </Pressable>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: colors.text }]}>
          * All plans come with our satisfaction guarantee (not really)
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  plansContainer: {
    paddingHorizontal: 15,
  },
  card: {
    borderWidth: 2,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  planTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  footerText: {
    fontSize: 14,
    textAlign: "center",
    fontStyle: "italic",
  },
});
