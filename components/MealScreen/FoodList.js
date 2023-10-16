import React, { useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import useStyles from '../../hooks/useStyles';
import SwipeToDelete from './SwipeToDelete';
import { FoodListStyles } from '../../styles/MealScreen/FoodListStyles';

import { deleteFood } from '../../database/dataFood';

const FoodList = ({ setFood, filteredFood }) => {
  const { styles } = useStyles(FoodListStyles);

  const handleDeleteFood = useCallback((id) => {
    deleteFood(id, () => {
        setFood((prevFood) => prevFood.filter((food) => food.id !== id));
    });
  }, [setFood]);

  const renderItem = ({ item }) => (
    <SwipeToDelete onDelete={() => handleDeleteFood(item.id)}>
        <View style={styles.product} >
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productCalories}>{item.calories}</Text>
          <Text style={styles.productUnit}>{item.unit}</Text>
          <TouchableOpacity onPress={() => handleDeleteFood(item.id)}>
            <MaterialIcons name="delete" size={24} color="red" />
          </TouchableOpacity>
        </View>
    </SwipeToDelete>
  );
  
  return (
      <FlatList
        style={styles.list}
        data={filteredFood}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    
  );
};

export default FoodList;
