import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, useColorScheme } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import Ionicons from '@expo/vector-icons/Ionicons';
import { IconSymbol } from '@/components/ui/IconSymbol';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme(); // Get the current color scheme (light/dark)

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint, // Set active tint color based on theme
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {
            backgroundColor: Colors[colorScheme ?? 'light'].background, // Set background color based on theme
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color }) => <Ionicons name="calendar-clear" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settingsscreen"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome name="gear" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
