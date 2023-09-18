import React, {useContext} from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';

import { ThemeContext } from '../../context/ThemeContext';
import Colors from '../../styles/Colors';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text>{theme === 'light' ? 'Светлая тема' : 'Темная тема'}</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={theme === 'light' ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleTheme}
        value={theme === 'dark'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: Colors.secondaryColor,
    borderRadius: 10,
  },
});

export default ThemeSwitcher;