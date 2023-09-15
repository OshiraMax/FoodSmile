import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const PeriodChoice = () => {
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

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 20
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20
    }
  });

export default PeriodChoice;