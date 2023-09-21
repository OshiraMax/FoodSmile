import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import useTheme from '../hooks/useTheme';
import { AddRationScreenStyles } from '../styles/AddRationScreen/AddRationScreenStyles';
import { GlobalStyles } from '../styles/GlobalStyles';

import AddFoodSwitcher from '../components/AddFoodScreen/AddFoodSwitcher';

const AddRationScreen = () => {
  const { styles } = useTheme(AddRationScreenStyles);
  const { styles: globalStyles } = useTheme(GlobalStyles);


  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [weight, setWeight] = useState('');

  const navigation = useNavigation();

  const handleAddProduct = () => {
    // добавление продукта в рацион на текущий день
    navigation.goBack();
  }

  return (
      <View style={globalStyles.container}>
        <AddFoodSwitcher navigation={navigation} activeScreen="AddRationScreen" />
        <View>
          <Text>Добавление продукта</Text>
          {/* <Button title="Отмена" onPress={() => navigation.goBack()} /> */}
        </View>
        <View>
          <Text>Название продукта:</Text>
          <TextInput value={name} onChangeText={setName} />
          <Text>Количество калорий на 100 грамм:</Text>
          <TextInput value={calories} onChangeText={setCalories} keyboardType="numeric" />
          <Text>Вес продукта (граммы):</Text>
          <TextInput value={weight} onChangeText={setWeight} keyboardType="numeric" />
        </View>
        <Button title="Добавить" onPress={handleAddProduct} />
      </View>
  );
}

export default AddRationScreen;
