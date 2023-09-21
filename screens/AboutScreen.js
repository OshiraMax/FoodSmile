import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import useTheme from '../hooks/useTheme';
import { AboutscreenStyles } from '../styles/AboutScreen/AboutScreenStyles';
import { GlobalStyles } from '../styles/GlobalStyles';

import ThemeSwitcher from '../components/AboutScreen/ThemeSwitcher';

const activityLevels = ['Сидячий образ жизни', 'Легкая активность', 'Средняя активность'];
const goals = ['Похудеть', 'Набрать вес', 'Поддерживать вес'];

const AboutScreen = () => {
  const { styles } = useTheme(AboutscreenStyles);
  const { styles: globalStyles } = useTheme(GlobalStyles);

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

export default AboutScreen;