import { StyleSheet } from 'react-native';

export const LoadingScreenStyles = (themeColors) => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors.mainColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 400,
      height: 400,
    },
  });