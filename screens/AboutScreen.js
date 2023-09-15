import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { globalStyles } from '../styles/GlobalStyles';
import Colors from '../styles/Colors';
import ThemeSwitcher from '../components/AboutScreen/ThemeSwitcher';

const activityLevels = ['Сидячий образ жизни', 'Легкая активность', 'Средняя активность'];
const goals = ['Похудеть', 'Набрать вес', 'Поддерживать вес'];


const AboutScreen = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState(activityLevels[0]);
  const [goal, setGoal] = useState(goals[0]);
  const [calories, setCalories] = useState(0);
  const [isEditable, setIsEditable] = useState(false);

  const handleSave = () => {
    const calculatedCalories = calculateCalories(height, weight, activityLevel, goal);
    setCalories(calculatedCalories);
    setIsEditable(!isEditable);
    // Сохранить данные в AsyncStorage или Redux
  };

  return (
      <View style={globalStyles.container}>
        <ThemeSwitcher />
        <View style={[styles.inputContainer, {backgroundColor: isEditable ? '#fff' : '#8A8A8A'}]}>
          <Text style={styles.label}>Рост (см)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
            editable={isEditable}
          />
          <Text style={styles.label}>Вес (кг)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
            editable={isEditable}
          />
          <Text style={styles.label}>Дневная активность</Text>
          <Picker
            style={styles.picker}
            selectedValue={activityLevel}
            onValueChange={setActivityLevel}
            enabled={isEditable}
          >
            {activityLevels.map(level => (
              <Picker.Item key={level} label={level} value={level} />
            ))}
          </Picker>
          <Text style={styles.label}>Цель</Text>
          <Picker
            style={styles.picker}
            selectedValue={goal}
            onValueChange={setGoal}
            enabled={isEditable}
          >
            {goals.map(goal => (
              <Picker.Item key={goal} label={goal} value={goal} />
            ))}
          </Picker>
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>{isEditable ? 'Сохранить' : 'Изменить'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.caloriesContainer}>
          <Text style={styles.caloriesText}>ВАША ЦЕЛЬ {calories} КАЛОРИЙ В СУТКИ</Text>
        </View>
      </View>
  );
};

const calculateCalories = (height, weight, activityLevel, goal) => {
  // Выполнить расчет калорий
  // ...
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
    marginTop: 20,
    marginLeft: '5%',
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
    // height: '70%',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center',
    color: '#333',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  picker: {
    width: '100%',
    alighSelf: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  button: {
    backgroundColor: Colors.mainColor,
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  caloriesContainer: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#007BFF',
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  caloriesText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  switcher: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default AboutScreen;