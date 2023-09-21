import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import useTheme from '../../hooks/useTheme';
import { AddFoodScreenStyles } from '../../styles/AddFoodScreen/AddFoodScreenStyles';

const AddFoodSwitcher = ({ navigation, activeScreen }) => {
  const { styles } = useTheme(AddFoodScreenStyles);
  
  const getButtonStyle = (screen) => {
    return screen === activeScreen ? styles.activeButton : styles.button;
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={getButtonStyle('AddRationScreen')}
        onPress={() => navigation.navigate('AddRationScreen')}
      >
        <Text style={styles.buttonText}>Из рациона</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={getButtonStyle('AddFoodScreen')}
        onPress={() => navigation.navigate('AddFoodScreen')}
      >
        <Text style={styles.buttonText}>Новый продукт</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddFoodSwitcher;