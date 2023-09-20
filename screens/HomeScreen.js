import React from 'react';
import { View } from 'react-native';

import DateSwitcher from '../components/HomeScreen/DateSwitcher';
import CaloriesButton from '../components/HomeScreen/CaloriesButton';
import LogFood from '../components/HomeScreen/LogFood';

import useTheme from '../hooks/useTheme';
import { GlobalStyles } from '../styles/GlobalStyles';
import { HomeScreenStyles } from '../styles/HomeScreen/HomeScreenStyles';

const HomeScreen = () => {
    const { styles } = useTheme(HomeScreenStyles);
    const globalStyles = useTheme(GlobalStyles);

return (
        <View style={globalStyles.container}>
            <View style={styles.dateAndCalories}>
                <DateSwitcher />
                <CaloriesButton />
            </View>

            <LogFood />
        </View>
    );
};

export default HomeScreen;