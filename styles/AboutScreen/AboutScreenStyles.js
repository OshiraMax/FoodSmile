import { StyleSheet } from 'react-native';

export const AboutscreenStyles = (themeColors) => StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    inputContainer: {
      marginTop: 20,
      marginLeft: '5%',
      marginBottom: 20,
      width: '90%',
      alignItems: 'center',
      // height: '70%',
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 5,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 20,
      alignSelf: 'center',
      color: '#333',
    },
    input: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      padding: 10,
      marginTop: 10,
    },
    picker: {
      width: '100%',
      alighSelf: 'center',
      marginTop: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
    },
    button: {
      backgroundColor: themeColors.mainColor,
      marginTop: 20,
      padding: 10,
      borderRadius: 5,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    caloriesContainer: {
      padding: 20,
      borderRadius: 5,
      backgroundColor: '#007BFF',
      marginBottom: 20,
      width: '100%',
      alignItems: 'center',
    },
    caloriesText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    switcher: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });