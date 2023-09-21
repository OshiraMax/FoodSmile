import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import useTheme from '../../hooks/useTheme';
import { RationSwitcherStyles } from '../../styles/RationScreen/RationSwitcherStyles';

const RationSwitcher = ({ navigation, activeScreen }) => {
  const { styles } = useTheme(RationSwitcherStyles);

  const getButtonStyle = (screen) => {
    return screen === activeScreen ? styles.activeButton : styles.button;
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={getButtonStyle('Ration')}
        onPress={() => navigation.navigate('Ration')}
      >
        <Text style={styles.buttonText}>Рационы</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={getButtonStyle('Meal')}
        onPress={() => navigation.navigate('Meal')}
      >
        <Text style={styles.buttonText}>Еда</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RationSwitcher;