import React, { useContext } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import AddFoodScreen from '../screens/AddFoodScreen';
import StatisticScreen from '../screens/StatisticScreen';
import RationScreen from '../screens/RationScreen';
import MealScreen from '../screens/MealScreen';
import AboutScreen from '../screens/AboutScreen';
import AddRationScreen from '../screens/AddRationScreen';
import AddNewRationScreen from '../screens/AddNewRationScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

import { ThemeContext } from '../state/ThemeContext';
import Colors from '../styles/Colors';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const RationStack = createNativeStackNavigator();
const AddStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={HomeScreen} />
      <Stack.Screen name="AddFood" component={AddFoodStack} />
    </Stack.Navigator>
  );
}

function AddFoodStack() {
  return (
    <AddStack.Navigator 
      screenOptions={{ 
        headerShown: false,
        animation: 'fade', 
      }}>
      <AddStack.Screen name="AddRationScreen" component={AddRationScreen} />
      <AddStack.Screen name="AddFoodScreen" component={AddFoodScreen} />
    </AddStack.Navigator>
  );
}

function RationMealStack() {
  return (
      <RationStack.Navigator 
        screenOptions={{ 
          headerShown: false,
          animation: 'fade', 
        }}>
        <RationStack.Screen name="Ration" component={RationScreen} />
        <RationStack.Screen name="Meal" component={MealScreen} options={{ gestureEnabled: false }}/>
        <RationStack.Screen name="AddNewRation" component={AddNewRationScreen} />
      </RationStack.Navigator>
  )
}

function getTabBarIcon(name) {
  return ({color}) => (
    <Ionicons name={name} color={color} size={20} />
  );
}

export default function Navigator({ isAuthenticated }) {
  const { theme } = useContext(ThemeContext);
  const themeColors = Colors[theme];

  if (!isAuthenticated) {
    return (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Register" component={RegisterScreen} />
      </AuthStack.Navigator>
    );
  }

  const screenOptions = {
    headerShown: false,
    tabBarStyle: { backgroundColor: themeColors.mainColor },
    tabBarShowIcon: true,
    tabBarShowLabel: false,
    tabBarIndicatorStyle: { backgroundColor: themeColors.secondaryColor },
  };

  return (
        <Tab.Navigator tabBarPosition='bottom' screenOptions={{ ...screenOptions }}>
          <Tab.Screen name="Главная" component={HomeStack} options={{tabBarIcon: getTabBarIcon('md-home')}}/>
          <Tab.Screen name="Статистика" component={StatisticScreen} options={{tabBarIcon: getTabBarIcon('stats-chart')}}/>
          <Tab.Screen name="Рацион" component={RationMealStack} options={{tabBarIcon: getTabBarIcon('fast-food-sharp')}}/>
          <Tab.Screen name="О себе" component={AboutScreen} options={{tabBarIcon: getTabBarIcon('md-settings-sharp')}}/>
        </Tab.Navigator>
  );
}