import { StyleSheet } from 'react-native';

export const ThemeSwitcherStyles = (themeColors) => StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: themeColors.secondaryColor,
      borderRadius: 10,
    },
  });
  