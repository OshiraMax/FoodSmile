import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../styles/Colors';

const CaloriesButton = () => {
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

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    width: 200,
    height: 200,
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: Colors.mainColor,
    borderWidth: 0,
    shadowColor: Colors.mainColor,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 15,
    elevation: 30,
    marginVertical: 10,
  },

  buttonPressed: {
    shadowOpacity: 0.4,
    shadowRadius: 20,
    transform: [{ translateY: -3 }],
  },


  caloriesCircle: {
    justifyContent: 'center',
    alignItems: 'center',
},

  caloriesText: {
    fontSize: 30,
    fontWeight: 'bold',
},

waterText: {
    marginTop: 20,
},
});

export default CaloriesButton;