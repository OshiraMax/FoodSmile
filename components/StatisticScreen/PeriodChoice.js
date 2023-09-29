import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import useStyles from '../../hooks/useStyles';
import { PeriodChoiceStyles } from '../../styles/StatisticScreen/PeriodChoiceStyles';

const PeriodChoice = () => {
  const { styles } = useStyles(PeriodChoiceStyles);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [activePicker, setActivePicker] = useState('');


  const handleSelectStartDate = () => {
    setActivePicker('start');
    setModalVisible(true);
  };

  const handleSelectEndDate = () => {
    setActivePicker('end');
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleApplyDates = (date) => {
    activePicker === 'start'
      ? (date > endDate ? setEndDate(date) : null, setStartDate(date))
      : (date < startDate ? setStartDate(date) : null, setEndDate(date));
    handleModalClose();
  };

  return (
    <View>
      <TouchableOpacity onPress={handleSelectStartDate}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Выбрать начальную дату</Text>
        </View>
      </TouchableOpacity>
        <View>
          <Text>Начальная дата: {startDate.toLocaleDateString()}</Text>
        </View>
      <TouchableOpacity onPress={handleSelectEndDate}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Выбрать конечную дату</Text>
        </View>
      </TouchableOpacity>
        <View>
          <Text>Конечная дата: {endDate.toLocaleDateString()}</Text>
        </View>
        <DateTimePickerModal
            isVisible={modalVisible}
            mode="date"
            onConfirm={handleApplyDates}
            onCancel={handleModalClose}
        />
    </View>
  )
}

export default PeriodChoice;