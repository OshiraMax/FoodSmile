import { StyleSheet } from 'react-native';

export const GlobalStyles = (themeColors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.backgroundColor,
    },
});