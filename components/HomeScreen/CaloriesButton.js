import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import useStyles from '../../hooks/useStyles';
import { CaloriesButtonStyles } from '../../styles/HomeScreen/CaloriesButtonStyles';

const CaloriesButton = () => {
    const { styles } = useStyles(CaloriesButtonStyles);

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [calories, setCalories] = useState(0);
    const [foodLog, setFoodLog] = useState([]);

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
    };

    const handleFoodAddition = (foodName, calories) => {
    const newFoodLogEntry = { name: foodName, calories: calories, time: new Date() };
        setFoodLog([...foodLog, newFoodLogEntry]);
    };

    const [isPressed, setIsPressed] = useState(false);

    const navigation = useNavigation();

    const handlePress = () => {
        setIsPressed(true);
        setTimeout(() => {
            setIsPressed(false);
        }, 200);
        navigation.navigate('AddFood');
        
    };

return (
    <TouchableOpacity
      style={[
        styles.button,
        isPressed && styles.buttonPressed,
      ]}
      onPress={handlePress}
    >
        <View style={styles.caloriesCircle}>
            <Text style={styles.caloriesText}>{calories}</Text>
            <Text style={styles.caloriesText}>Калорий</Text>
            <Text style={styles.waterText}>{calories} л воды</Text>
        </View>
    </TouchableOpacity>
  );
};

export default CaloriesButton;