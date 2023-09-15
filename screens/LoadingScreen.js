import React from 'react';
import { StyleSheet, Image, View } from 'react-native';


import Colors from '../styles/Colors';
import logo from '../assets/logo.png';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 400,
  },
});

export default LoadingScreen;