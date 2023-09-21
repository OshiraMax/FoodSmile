import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import useTheme from '../hooks/useTheme';
import { MealScreenStyles } from '../styles/MealScreen/MealScreenStyles';
import { GlobalStyles } from '../styles/GlobalStyles';

import RationSwitcher from '../components/RationScreen/RationSwitcher';

import { fetchAllFood, deleteFood } from '../database/dataFood';

const MealScreen = ({ navigation }) => {
  const { styles } = useTheme(MealScreenStyles);
  const { styles: globalStyles } = useTheme(GlobalStyles);

  const [food, setFood] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchAllFood(setFood); 
  }, []);

  const handleDeleteFood = (id) => {
    deleteFood(id, () => {
      setFood((prevFood) => prevFood.filter((food) => food.id !== id));
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.product}>
      <Text style={{ width: '50%' }}>{item.name}</Text>
      <Text style={{ width: '20%' }}>{item.calories}</Text>
      <Text style={{ width: '20%' }}>{item.unit}</Text>
      <TouchableOpacity onPress={() => handleDeleteFood(item.id)}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
      <View style={globalStyles.container}>
        <RationSwitcher navigation={navigation} activeScreen="Meal" />

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            onChangeText={setSearch}
            value={search}
            placeholder="Поиск продукта..."
          />
        </View>

        <FlatList
          style={styles.list}
          data={food}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

        <TouchableOpacity
          style={styles.addButton} 
          onPress={() => navigation.navigate('Главная', { screen: 'AddFood', params: { screen: 'AddFoodScreen', params: { fromMealScreen: true } } })}>
          <Text style={styles.buttonText}>Добавить еду</Text>
        </TouchableOpacity>

      </View>
  );
};  

export default MealScreen;