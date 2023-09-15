import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { globalStyles } from '../styles/GlobalStyles';
import StatisticChart from '../components/StatisticScreen/StatisticChart';

const StatisticScreen = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [activePicker, setActivePicker] = useState('');
  const [calories, setCalories] = useState(0);

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

    const data = {
        labels: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь'],
        datasets: [
            {
                data: [2500, 3000, 2000, 3500, 4000, 3200],
            },
        ],
    };

return (
    <View style={globalStyles.container}>
        <View style={styles.selectPeriodTitle}>
            <Text style={styles.selectPeriodText}>Выбрать период</Text>
        </View>

        <View style={styles.dateButtonsContainer}>
            <TouchableOpacity onPress={handleSelectStartDate}>
                <View style={styles.dateButton}>
                    <Text style={styles.dateButtonText}>Начальная дата</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSelectEndDate}>
                <View style={styles.dateButton}>
                    <Text style={styles.dateButtonText}>Конечная дата</Text>
                </View>
            </TouchableOpacity>
        </View>

        <View style={styles.selectedPeriodContainer}>
            <Text style={styles.selectedPeriodText}>{startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</Text>
        </View>

        <DateTimePickerModal
            isVisible={modalVisible}
            mode="date"
            onConfirm={handleApplyDates}
            onCancel={handleModalClose}
        />

        <View style={styles.statisticsChart}>
            <StatisticChart data={data} startDate={startDate} endDate={endDate} />
        </View>

        <View style={styles.statisticsContainer}>
            <Text style={styles.statisticText}>Минимальное значение калорий в день:</Text>
            <Text style={styles.statisticText}>{calories} калорий</Text>
            <Text style={styles.statisticText}>Максимальное значение калорий в день:</Text>
            <Text style={styles.statisticText}>{calories} калорий</Text>
            <Text style={styles.statisticText}>Среднее значение калорий в день за период:</Text>
            <Text style={styles.statisticText}>{calories} калорий</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    selectPeriodTitle: {
        height: 50,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginHorizontal: '20%',
      },

      selectPeriodText: {
        fontSize: 20,
      },

      dateButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
      },

      dateButton: {
        width: 170,
        height: 50,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
      },

      dateButtonText: {
        fontSize: 18,
      },

      selectedPeriodContainer: {
        marginTop: 20,
        alignItems: 'center',
      },

      selectedPeriodText: {
        fontSize: 20,
      },

      statisticsChart: {
        marginTop: 50,
        alignItems: 'center',
      },

      statisticsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20,
      },

      statisticText: {
      },
});  

export default StatisticScreen;