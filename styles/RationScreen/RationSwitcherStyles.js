import { StyleSheet } from 'react-native';

export const RationSwitcherStyles = (themeColors) => StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: 50,
      backgroundColor: themeColors.buttonColor,
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
      backgroundColor: themeColors.secondaryColor,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });  