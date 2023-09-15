import React from 'react';
import { View, StyleSheet, SafeAreaView} from 'react-native';

import DateSwitcher from '../components/HomeScreen/DateSwitcher';
import CaloriesButton from '../components/HomeScreen/CaloriesButton';
import LogFood from '../components/HomeScreen/LogFood';

import { globalStyles } from '../styles/GlobalStyles';

const HomeScreen = () => {

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

const styles = StyleSheet.create({
    dateAndCalories: {
        marginTop: 20,
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;