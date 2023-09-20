import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

import useTheme from './hooks/useTheme';
import { ThemeProvider } from './context/ThemeContext';
import { AppStyles } from './styles/AppStyles';

import Navigator from './navigation/Navigator';
import LoadingScreen from './screens/LoadingScreen';

import { initFoodTable } from './database/dataFood';
import { initRationTable, initRationFoodTable } from './database/dataRation';


export default function App() {
  const { styles } = useTheme(AppStyles);

  const [isLoading, setIsLoading] = useState(true);

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
     <ThemeProvider>
          <SafeAreaView style={styles.savearea}>
            <NavigationContainer>
              <Navigator />
            </NavigationContainer>
          </SafeAreaView>
      </ThemeProvider>
  );
}
