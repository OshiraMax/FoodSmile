import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import useStyles from '../../hooks/useStyles';
import { BottomButtonsStyles } from '../../styles/MealScreen/BottomButtonsStyles';

const BottomButtons = ({ navigation }) => {
  const { styles } = useStyles(BottomButtonsStyles);

  const toAddFoodScreen = () => {
    navigation.navigate('Главная', { screen: 'AddFood', params: { screen: 'AddFoodScreen', params: { fromMealScreen: true } } });
  };

  return (
    <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={styles.addButton}
            onPress={toAddFoodScreen}>
            <Text style={styles.buttonText}>Добавить еду</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.inactiveButton}
            disabled={true}>
            <Text style={styles.buttonText}>Неактивная</Text>
        </TouchableOpacity>
    </View>
  );
};

export default BottomButtons;
