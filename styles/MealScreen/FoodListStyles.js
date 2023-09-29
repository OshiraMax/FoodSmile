import { StyleSheet } from 'react-native';

export const FoodListStyles = (themeColors) => StyleSheet.create({
    list: {
      flex: 1,
      marginTop: 10,
      marginBottom: 10,
    },

    product: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },

    productName: {
      width: '50%',
    },

    productCalories: {
      width: '20%',
    },

    productUnit: {
      width: '20%',
    },
  });