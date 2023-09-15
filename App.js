import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, StatusBar, useColorScheme } from 'react-native';

import { ThemeContext } from './styles/ThemeContext';
import Colors from './styles/Colors';
import Navigator from './navigation/Navigator';
import LoadingScreen from './screens/LoadingScreen';
import { initFoodTable } from './database/dataFood';
import { initRationTable, initRationFoodTable } from './database/dataRation';


export default function App() {
  const systemTheme = useColorScheme(); //Определение системной темы
  const [isDark, setIsDark] = useState(systemTheme === 'dark');
  const [isLoading, setIsLoading] = useState(true);
  
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => { 
    if (systemTheme) {
      setIsDark(systemTheme === 'dark');
    }
  }, [systemTheme]); // Если системная тема поменялась

  useEffect(() => {
    async function loadApp() {

      await initRationTable();
      await initRationFoodTable();
      await initFoodTable();

      await new Promise((resolve) => setTimeout(resolve, 3000));

      setIsLoading(false);
    }

    loadApp();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
      <SafeAreaView style={styles.savearea}>
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            <NavigationContainer>
              <Navigator />
            </NavigationContainer>
        </ThemeContext.Provider>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  savearea: {
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: Colors.mainColor,
  },

});
