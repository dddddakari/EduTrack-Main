import React from 'react';
import { View, StatusBar } from 'react-native';
import { SettingsProvider, useSettings } from '../context/SettingContext';
import { Slot } from 'expo-router';

const LayoutContent = () => {
  const { isDarkMode } = useSettings();

  return (
    <>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={{ flex: 1 }}>
        <Slot />
      </View>
    </>
  );
};

const Layout = () => {
  return (
    <SettingsProvider>
      <LayoutContent />
    </SettingsProvider>
  );
};

export default Layout;