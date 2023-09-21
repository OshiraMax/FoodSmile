import { StyleSheet } from 'react-native';

export const MealScreenStyles = (themeColors) => StyleSheet.create({
    searchContainer: {
      width: '100%',
      paddingHorizontal: 10,
      marginBottom: 10,
    },

    searchInput: {
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      height: 40,
    },

    list: {
      maxHeight: '70%',
    },

    product: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },

    addButton: {
      backgroundColor: '#4dbb63',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      marginTop: 10,
    },

    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });