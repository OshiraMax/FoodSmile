import { StyleSheet } from 'react-native';

export const AddNewRationScreenStyles = (themeColors) => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors.backgroundColor,
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    input: {
      backgroundColor: '#fff',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 5,
      marginBottom: 20,
    },
    foodItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    selectedFoods: {
      marginBottom: 20,
    },
    selectedFoodItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 10,
    },
    addButton: {
      backgroundColor: themeColors.mainColor,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    addButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
    },
    addButtonPlus: {
        backgroundColor: themeColors.mainColor,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    quantityInput: {
        width: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 5,
    },
  });