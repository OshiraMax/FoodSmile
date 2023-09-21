import { StyleSheet } from 'react-native';

export const PeriodChoiceStyles = (themeColors) => StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 20
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20
    }
  });