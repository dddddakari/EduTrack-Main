// components/TaskItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSettings } from '../context/SettingContext';

const TaskItem = ({ task, onToggle, onDelete }: { 
  task: any; 
  onToggle: (id: string) => void; 
  onDelete: (id: string) => void;
}) => {
  const { colors } = useSettings();

  const getCategoryColor = () => {
    switch(task.category) {
      case 'Work': return '#FF6B6B';
      case 'Study': return '#4ECDC4';
      case 'Personal': return '#FFD166';
      default: return '#A5A5A5';
    }
  };

  return (
    <View style={[styles.taskContainer, { backgroundColor: colors.cardBackground }]}>
      <TouchableOpacity onPress={() => onToggle(task.id)}>
        <Ionicons 
          name={task.completed ? "checkbox-outline" : "square-outline"} 
          size={24} 
          color={task.completed ? colors.tint : colors.text} 
        />
      </TouchableOpacity>

      <View style={styles.taskContent}>
        <Text 
          style={[
            styles.taskTitle, 
            { 
              color: colors.text,
              textDecorationLine: task.completed ? 'line-through' : 'none',
              opacity: task.completed ? 0.6 : 1
            }
          ]}
        >
          {task.title}
        </Text>
        {task.description && (
          <Text style={[styles.taskDescription, { color: colors.text }]}>
            {task.description}
          </Text>
        )}
        <View style={styles.taskMeta}>
          <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor() }]}>
            <Text style={styles.categoryText}>{task.category}</Text>
          </View>
          <Text style={[styles.taskTime, { color: colors.text }]}>
            {task.date} • {task.time}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Ionicons name="trash-outline" size={20} color="#FF6B6B" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  taskContent: {
    flex: 1,
    marginLeft: 15,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  taskDescription: {
    fontSize: 14,
    marginTop: 4,
    opacity: 0.8,
  },
  taskMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  categoryBadge: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 12,
    marginRight: 10,
  },
  categoryText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  taskTime: {
    fontSize: 12,
    opacity: 0.7,
  },
});

export default TaskItem;