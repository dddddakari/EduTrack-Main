import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import Ionicons from "@expo/vector-icons/Ionicons";
import { IconSymbol } from "@/components/ui/IconSymbol";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { useSettings } from "../../context/SettingContext";

export default function TabLayout() {
  const { colors } = useSettings();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {
            backgroundColor: colors.tabBarBackground,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-clear" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settingsscreen"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="gear" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
