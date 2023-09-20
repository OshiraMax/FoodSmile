import { StyleSheet } from 'react-native';

export const LogFoodStyles = (themeColors) => StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      marginTop: 20,
      marginBottom: 20,
    },
  
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      marginVertical: 8,
      backgroundColor: themeColors.secondaryColor,
      borderRadius: 10,
    },
    
    itemText: {
      flex: 1,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  