import { StyleSheet } from 'react-native';

export const RationScreenStyles = (themeColors) => StyleSheet.create({
    searchContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '10%',
    },
  
    searchInput: {
        width: '80%',
    },
  
    filterButton: {
        width: '20%',
    },
  
    rationList: {
        height: '75%',
    },
  
    rationItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
  
    rationHeader: {
        width: '50%',
    },
  
    rationContent: {
        width: '75%',
        paddingLeft: '5%',
    },
    rationActions: {
        width: '15%',
        paddingRight: '5%',
    },
  
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '10%',
    },
  
    button: {
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ccc',
        borderRadius: 5,
    },
  });