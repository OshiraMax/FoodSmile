import React, {useContext} from 'react';
import { View, StyleSheet, Switch } from 'react-native';

import { ThemeContext } from '../../styles/ThemeContext';
import Colors from '../../styles/Colors';

const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Switch
            value={isDark}
            onValueChange={toggleTheme}
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