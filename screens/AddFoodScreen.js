import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import useTheme from '../hooks/useTheme';
import { GlobalStyles } from '../styles/GlobalStyles';
import { AddFoodScreenStyles } from '../styles/AddFoodScreen/AddFoodScreenStyles';

import AddFoodSwitcher from '../components/AddFoodScreen/AddFoodSwitcher';

import { addFood } from '../database/dataFood';

const AddFoodScreen = ({route}) => {
  const { styles } = useTheme(AddFoodScreenStyles);
  const { styles: globalStyles } = useTheme(GlobalStyles);

  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [weight, setWeight] = useState('');

  const navigation = useNavigation();

  const handleAddProduct = () => {
    addFood(name, '100г', parseFloat(calories), () => {
      if (updateMeal) {
        updateMeal();
      }
      navigation.goBack();
    });
  };

  const fromMealScreen = route.params?.fromMealScreen || false;
  const updateMeal = route.params?.updateMeal;

  return (
      <View style={globalStyles.container}>
        {!fromMealScreen && <AddFoodSwitcher navigation={navigation} activeScreen="AddFoodScreen" />}
        <View>
        <Text style={styles.title}>Добавление продукта</Text>
      </View>
      <View>
        <Text style={styles.label}>Название продукта:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Количество калорий на 100 грамм:</Text>
        <TextInput
          style={styles.input}
          value={calories}
          onChangeText={setCalories}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Вес продукта (граммы):</Text>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={setWeight}
          keyboardType="numeric"
        />
      </View>
      <Button title="Добавить" onPress={handleAddProduct} />
    </View>
  );
}

export default AddFoodScreen;
