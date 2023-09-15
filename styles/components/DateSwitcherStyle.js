import { StyleSheet } from 'react-native';

import Colors from './Colors';

export const getStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: Colors.secondaryColor,
      borderRadius: 10,
    },
    dateText: {
      fontWeight: 'bold',
      fontSize: 20,
    },
  });