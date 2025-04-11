import React, { createContext, useState, useContext } from 'react';
import { ColorValue } from 'react-native/Libraries/StyleSheet/StyleSheet';

type User = {
  name: string;
  email: string;
};

type SettingsContextType = {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  colors: {
    [x: string]: ColorValue | undefined;
    background: string;
    text: string;
    tint: string;
    cardBackground: string;
    tabBarBackground: string;
  };
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
};

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toLocaleDateString("en-GB"));
  const [user, setUser] = useState<User | null>(null);

  const colors = {
    background: isDarkMode ? '#121212' : '#D4D2D5',
    text: isDarkMode ? '#FFFFFF' : '#58355E',
    tint: isDarkMode ? '#17C3B2' : '#17C3B2',
    cardBackground: isDarkMode ? '#1E1E1E' : '#FFFFFF',
    tabBarBackground: isDarkMode ? '#1E1E1E' : '#FFFFFF',
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <SettingsContext.Provider value={{ 
      isDarkMode, 
      setIsDarkMode,
      colors,
      selectedDate,
      setSelectedDate,
      user,
      setUser,
      logout
    }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};