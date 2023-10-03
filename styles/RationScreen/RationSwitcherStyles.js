import { StyleSheet } from 'react-native';

export const RationSwitcherStyles = (themeColors) => StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: 70,
      backgroundColor: themeColors.backgroundColor,
      justifyContent: 'space-between', 
      padding: 10,
    },
    button: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 10, // Увеличен отступ
      marginLeft: 5, // Добавлен отступ слева
      marginRight: 5, // Добавлен отступ справа
      borderRadius: 25,
    },
    activeButton: {
      flex: 1,
      borderWidth: 2,
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 10, // Увеличен отступ
      backgroundColor: themeColors.secondaryColor,
      marginLeft: 5, // Добавлен отступ слева
      marginRight: 5, // Добавлен отступ справа
      borderRadius: 20,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });  