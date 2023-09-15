import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { globalStyles } from '../styles/GlobalStyles';
import RationSwitcher from '../components/RationScreen/RationSwitcher';
import { fetchAllFood, deleteFood } from '../database/dataFood';

const MealScreen = ({ navigation }) => {
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

const styles = StyleSheet.create({
    searchContainer: {
      width: '100%',
      paddingHorizontal: 10,
      marginBottom: 10,
    },

    searchInput: {
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      height: 40,
    },

    list: {
      maxHeight: '70%',
    },

    product: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },

    addButton: {
      backgroundColor: '#4dbb63',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      marginTop: 10,
    },

    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
  

export default MealScreen;