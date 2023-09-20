import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import useTheme from '../../hooks/useTheme';
import { DateSwitcherStyles } from '../../styles/HomeScreen/DateSwitcherStyles';

const DateSwitcher = () => {
  const { styles } = useTheme(DateSwitcherStyles);

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
      <TouchableOpacity onPress={handlePrevDay} disabled={isPrevDisabled}>
        <MaterialCommunityIcons display={isPrevDisabled ? 'none' : 'flex'}
          name="chevron-left"
          size={40}
          color={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.dateText}>{selectedDate.toLocaleDateString('ru-RU')}</Text>
      <TouchableOpacity onPress={handleNextDay} disabled={isNextDisabled}>
        <MaterialCommunityIcons display={isNextDisabled ? 'none' : 'flex'}
          name="chevron-right"
          size={40}
          color={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DateSwitcher;