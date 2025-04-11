import React, { createContext, useState, useContext } from 'react';
import { ColorValue } from 'react-native/Libraries/StyleSheet/StyleSheet';

export type Task = {
  id: string;
  title: string;
  description?: string;
  date: string;
  time: string;
  category: string;
  completed: boolean;
};

export type TaskInput = Omit<Task, 'id' | 'completed'>;

export type User = {
  name: string;
  email: string;
  profileImage?: any;
};

type SettingsContextType = {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  colors: {
    background: string;
    text: string;
    tint: string;
    cardBackground: string;
    tabBarBackground: string;
    [x: string]: ColorValue | undefined;
  };
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
  tasks: Task[];
  addTask: (task: TaskInput) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  getTasksByDate: (date: string) => Task[];
};

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toLocaleDateString("en-GB"));
  const [user, setUser] = useState<User | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  const colors = {
    background: isDarkMode ? '#121212' : '#D4D2D5',
    text: isDarkMode ? '#FFFFFF' : '#58355E',
    tint: '#17C3B2',
    cardBackground: isDarkMode ? '#1E1E1E' : '#FFFFFF',
    tabBarBackground: isDarkMode ? '#1E1E1E' : '#FFFFFF',
  };

  const logout = () => setUser(null);

  const addTask = (task: TaskInput) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      completed: false,
    };
    setTasks(prev => [...prev, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const getTasksByDate = (date: string): Task[] => {
    return tasks.filter(task => task.date === date);
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
      logout,
      tasks,
      addTask,
      toggleTask,
      deleteTask,
      getTasksByDate
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