import { StyleSheet } from 'react-native';

export const LoginScreenStyles = (themeColors) => StyleSheet.create({
      title: {
        fontSize: 36,
        marginBottom: 20,
      },
      input: {
        width: 300,
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
      },
      button: {
        backgroundColor: '#007BFF',
        width: 300,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
      },
  });