// components/TaskModal.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Alert } from 'react-native';
import { useSettings } from '../context/SettingContext';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const TaskModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const { colors, addTask } = useSettings();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Personal');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleAddTask = () => {
    if (!title.trim()) {
      Alert.alert('Error', 'Please enter a task title');
      return;
    }

    const formattedDate = date.toISOString().split('T')[0];
    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    addTask({
      title,
      description,
      category,
      date: formattedDate,
      time: formattedTime
    });

    // Reset form
    setTitle('');
    setDescription('');
    setCategory('Personal');
    setDate(new Date());
    setTime(new Date());
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={[styles.modalOverlay, { backgroundColor: 'rgba(0,0,0,0.5)' }]}>
        <View style={[styles.modalContainer, { backgroundColor: colors.cardBackground }]}>
          <Text style={[styles.title, { color: colors.text }]}>Add New Task</Text>

          <TextInput
            style={[styles.input, { color: colors.text, borderColor: colors.tint }]}
            placeholder="Title"
            placeholderTextColor="#999"
            value={title}
            onChangeText={setTitle}
          />

          <TextInput
            style={[styles.input, { color: colors.text, borderColor: colors.tint }]}
            placeholder="Description (optional)"
            placeholderTextColor="#999"
            multiline
            value={description}
            onChangeText={setDescription}
          />

          <View style={[styles.input, { borderColor: colors.tint }]}>
            <Text style={[styles.label, { color: colors.text }]}>Category:</Text>
            <View style={styles.categoryContainer}>
              {['Personal', 'Work', 'Study', 'Other'].map(cat => (
                <TouchableOpacity
                  key={cat}
                  style={[
                    styles.categoryButton,
                    { 
                      backgroundColor: category === cat ? colors.tint : colors.cardBackground,
                      borderColor: colors.tint
                    }
                  ]}
                  onPress={() => setCategory(cat)}
                >
                  <Text style={[styles.categoryText, { color: category === cat ? 'white' : colors.text }]}>
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity
            style={[styles.dateButton, { borderColor: colors.tint }]}
            onPress={() => setShowDatePicker(true)}
          >
            <Ionicons name="calendar" size={20} color={colors.tint} />
            <Text style={[styles.dateText, { color: colors.text }]}>
              {date.toLocaleDateString()}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.dateButton, { borderColor: colors.tint }]}
            onPress={() => setShowTimePicker(true)}
          >
            <Ionicons name="time" size={20} color={colors.tint} />
            <Text style={[styles.dateText, { color: colors.text }]}>
              {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) setDate(selectedDate);
              }}
            />
          )}

          {showTimePicker && (
            <DateTimePicker
              value={time}
              mode="time"
              display="default"
              onChange={(event, selectedTime) => {
                setShowTimePicker(false);
                if (selectedTime) setTime(selectedTime);
              }}
            />
          )}

          <TouchableOpacity
            style={[styles.addButton, { backgroundColor: colors.tint }]}
            onPress={handleAddTask}
          >
            <Text style={styles.buttonText}>Add Task</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={[styles.closeText, { color: colors.text }]}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    justifyContent: 'center',
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 10,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    fontSize: 12,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  categoryButton: {
    padding: 8,
    borderRadius: 15,
    borderWidth: 1,
    marginRight: 8,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 14,
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  dateText: {
    marginLeft: 10,
    fontSize: 16,
  },
  addButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  closeButton: {
    alignItems: 'center',
    padding: 10,
  },
  closeText: {
    fontSize: 16,
  },
});

export default TaskModal;