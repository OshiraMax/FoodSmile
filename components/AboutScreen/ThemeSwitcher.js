import React, {useContext} from 'react';
import { View, Switch, Text } from 'react-native';

import useTheme from '../../hooks/useTheme';
import { ThemeSwitcherStyles } from '../../styles/AboutScreen/ThemeSwitcherStyles';

import { ThemeContext } from '../../context/ThemeContext';

const ThemeSwitcher = () => {
  const { styles } = useTheme(ThemeSwitcherStyles);

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

export default ThemeSwitcher;