import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Colors from '../../styles/Colors';

const DateSwitcher = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePrevDay = () => {
    const newDate = new Date(selectedDate.getTime() - (24 * 60 * 60 * 1000));
    setSelectedDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate.getTime() + (24 * 60 * 60 * 1000));
    setSelectedDate(newDate);
  };

  const isPrevDisabled = false;
  const isNextDisabled = selectedDate.toDateString() === new Date().toDateString(); 

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePrevDay}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={40}
          color={isPrevDisabled ? '#ccc' : '#000'}
        />
      </TouchableOpacity>
      <Text style={styles.dateText}>{selectedDate.toLocaleDateString('ru-RU')}</Text>
      <TouchableOpacity onPress={handleNextDay} disabled={isNextDisabled}>
        <MaterialCommunityIcons display={isNextDisabled ? 'none' : 'flex'}
          name="chevron-right"
          size={40}
          color={'#000'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: Colors.secondaryColor,
    borderRadius: 10,
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default DateSwitcher;