import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import useStyles from '../hooks/useStyles';
//import { MealScreenStyles } from '../styles/MealScreen/MealScreenStyles';
import { GlobalStyles } from '../styles/GlobalStyles';

import RationSwitcher from '../components/RationScreen/RationSwitcher';
import SearchBar from '../components/MealScreen/SearchBar';
import FoodList from '../components/MealScreen/FoodList';
import BottomButtons from '../components/MealScreen/BottomButtons';

import { fetchAllFood } from '../database/dataFood';

const MealScreen = ({ navigation }) => {
 // const { styles } = useStyles(MealScreenStyles);
  const { styles: globalStyles } = useStyles(GlobalStyles);

  const [food, setFood] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchAllFood(setFood); 
  }, []);

  const filteredFood = food.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
      <View style={globalStyles.container}>
          <RationSwitcher navigation={navigation} activeScreen="Meal" />
          <SearchBar setSearch={setSearch} search={search} />
          <FoodList setFood={setFood} filteredFood={filteredFood} />
          <BottomButtons navigation={navigation} />
      </View>
  );
};  

export default MealScreen;