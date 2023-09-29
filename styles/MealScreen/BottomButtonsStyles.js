import { StyleSheet } from 'react-native';

export const BottomButtonsStyles = (themeColors) => StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 50,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
    },
  
    addButton: {
      width: '45%',
      backgroundColor: '#4dbb63',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
  
    inactiveButton: {
      width: '45%',
      backgroundColor: '#ccc',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },

    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });