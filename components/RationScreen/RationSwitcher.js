import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../../styles/Colors';

const RationSwitcher = ({ navigation, activeScreen }) => {
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

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: Colors.buttonColor,
  },
  button: {
    flex: 1,
    
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  activeButton: {
    flex: 1,
    borderWidth: 2,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: Colors.secondaryColor,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RationSwitcher;