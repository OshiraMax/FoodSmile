import React from 'react';
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

import Colors from '../styles/Colors';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const RationStack = createNativeStackNavigator();
const AddStack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  tabBarStyle: { backgroundColor: Colors.mainColor },
  tabBarShowIcon: true,
  tabBarShowLabel: false,
  tabBarIndicatorStyle: { backgroundColor: Colors.secondaryColor },
};

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
        <RationStack.Screen name="Meal" component={MealScreen} />
        <RationStack.Screen name="AddNewRation" component={AddNewRationScreen} />
      </RationStack.Navigator>
  )
}

function getTabBarIcon(name) {
  return ({color}) => (
    <Ionicons name={name} color={color} size={20} />
  );
}

export default function Navigator() {
  return (
        <Tab.Navigator tabBarPosition='bottom' screenOptions={{ ...screenOptions }}>
          <Tab.Screen name="Главная" component={HomeStack} options={{tabBarIcon: getTabBarIcon('md-home')}}/>
          <Tab.Screen name="Статистика" component={StatisticScreen} options={{tabBarIcon: getTabBarIcon('stats-chart')}}/>
          <Tab.Screen name="Рацион" component={RationMealStack} options={{tabBarIcon: getTabBarIcon('fast-food-sharp')}}/>
          <Tab.Screen name="О себе" component={AboutScreen} options={{tabBarIcon: getTabBarIcon('md-settings-sharp')}}/>
        </Tab.Navigator>
  );
}