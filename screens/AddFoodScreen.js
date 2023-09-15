import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { globalStyles } from '../styles/GlobalStyles';
import AddFoodSwitcher from '../components/AddFoodScreen/AddFoodSwitcher';
import { addFood } from '../database/dataFood';

const AddFoodScreen = ({route}) => {
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

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
  },
});

export default AddFoodScreen;
