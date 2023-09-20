import { StyleSheet } from 'react-native';

export const CaloriesButtonStyles = (themeColors) => StyleSheet.create({
    button: {
      marginTop: 50,
      width: 200,
      height: 200,
      justifyContent: 'center',
      borderRadius: 100,
      backgroundColor: themeColors.mainColor,
      borderWidth: 0,
      shadowColor: themeColors.mainColor,
      shadowOpacity: 0.1,
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowRadius: 15,
      elevation: 30,
      marginVertical: 10,
    },
  
    buttonPressed: {
      shadowOpacity: 0.4,
      shadowRadius: 20,
      transform: [{ translateY: -3 }],
    },
  
  
    caloriesCircle: {
      justifyContent: 'center',
      alignItems: 'center',
  },
  
    caloriesText: {
      fontSize: 30,
      fontWeight: 'bold',
  },
  
  waterText: {
      marginTop: 20,
  },
  });