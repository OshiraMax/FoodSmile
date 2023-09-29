import { StyleSheet } from 'react-native';

export const SearchBarStyles = (themeColors) => StyleSheet.create({
    searchContainer: {
      width: '100%',
      paddingHorizontal: 10,
      marginBottom: 10,
      marginTop: 10,
    },

    searchInput: {
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 15,
      height: 40,
      backgroundColor: '#f2f2f2',
    },
  });