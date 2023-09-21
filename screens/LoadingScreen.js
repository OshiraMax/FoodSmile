import React from 'react';
import { Image, View } from 'react-native';

import useTheme from '../hooks/useTheme';
import { LoadingScreenStyles } from '../styles/LoadingScreen/LoadingScreenStyles';

import logo from '../assets/logo.png';

const LoadingScreen = () => {
  const { styles } = useTheme(LoadingScreenStyles);
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

export default LoadingScreen;