import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useSettings } from '../context/SettingContext';

const DateAndTime = () => {
  const { colors } = useSettings();
  
  const [dateInput, setDateInput] = useState('');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateChange = (text: string) => {
    // Remove all non-numeric characters
    let formattedDate = text.replace(/[^0-9]/g, '');
    
    // Add slashes at correct positions
    if (formattedDate.length > 2) {
      formattedDate = `${formattedDate.slice(0, 2)}/${formattedDate.slice(2)}`;
    }
    if (formattedDate.length > 5) {
      formattedDate = `${formattedDate.slice(0, 5)}/${formattedDate.slice(5, 9)}`; // Limit year to 4 digits
    }
  
    // Ensure the date doesn't go beyond 10 characters (DD/MM/YYYY)
    if (formattedDate.length > 10) {
      formattedDate = formattedDate.slice(0, 10);
    }
  
    setDateInput(formattedDate);
  };

  const handleSaveDate = () => {
    const dateParts = dateInput.split('/');
    if (dateParts.length === 3) {
      const [day, month, year] = dateParts;
      if (
        day.length === 2 &&
        month.length === 2 &&
        year.length === 4 &&
        !isNaN(Number(day)) &&
        !isNaN(Number(month)) &&
        !isNaN(Number(year))
      ) {
        // Convert to YYYY-MM-DD format (ISO format for date storage)
        const formattedDate = `${year}-${month}-${day}`;
        setSelectedDate(formattedDate);
        alert('Date updated successfully!');
      } else {
        alert('Invalid date format.');
      }
    } else {
      alert('Please enter a valid date in DD/MM/YYYY format.');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Update Date</Text>
      <TextInput
        style={[styles.input, { backgroundColor: colors.cardBackground, color: colors.text }]}
        value={dateInput}
        onChangeText={handleDateChange}
        maxLength={10} // Limit to DD/MM/YYYY format
        placeholder="DD/MM/YYYY"
        placeholderTextColor={colors.text}
        keyboardType="numeric"
      />
      <Button
        title="Save Date"
        onPress={handleSaveDate}
        color={colors.tint}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 20,
  },
});

export default DateAndTime;
