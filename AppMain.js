import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import useStyles from './hooks/useStyles';
import { AppStyles } from './styles/AppStyles';

import Navigator from './navigation/Navigator';
import LoadingScreen from './screens/LoadingScreen';

import { initFoodTable, initUsageTable } from './database/dataFood';
import { initRationTable, initRationFoodTable } from './database/dataRation';

export default function AppMain() {
  const { styles } = useStyles(AppStyles);

  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function loadApp() {

      await initRationTable();
      await initRationFoodTable();
      await initFoodTable();
      await initUsageTable();

      const token = await SecureStore.getItemAsync('userToken');
        if (token) {
          setIsAuthenticated(true);
        }

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
            <NavigationContainer>
              <Navigator isAuthenticated={isAuthenticated}/> 
            </NavigationContainer>
          </SafeAreaView>
  );
}
