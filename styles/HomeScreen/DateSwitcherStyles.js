import { StyleSheet } from 'react-native';

export const DateSwitcherStyles = (themeColors) => StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: themeColors.secondaryColor,
      borderRadius: 10,
    },
    dateText: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    icon: {
      color: themeColors.mainColor,
    }
  });