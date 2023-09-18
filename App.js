import React, { useState, useEffect, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

import useTheme from './hooks/UseTheme';
import { ThemeProvider } from './context/ThemeContext';
import { AppStyles } from './styles/AppStyles';
import Colors from './styles/Colors';

import Navigator from './navigation/Navigator';
import LoadingScreen from './screens/LoadingScreen';

import { initFoodTable } from './database/dataFood';
import { initRationTable, initRationFoodTable } from './database/dataRation';


export default function App() {
  const { theme } = useTheme();
  const themeColors = Colors[theme];
  const styles = useMemo(() => AppStyles(themeColors), [themeColors]);

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
