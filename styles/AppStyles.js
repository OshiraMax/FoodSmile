import { StyleSheet, StatusBar } from 'react-native';

export const AppStyles = (themeColors) => StyleSheet.create({
  savearea: {
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: themeColors.mainColor,
  },
});