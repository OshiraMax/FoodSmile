import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import handleLogin from '../services/handleLogin';

import useStyles from '../hooks/useStyles';
import { LoginScreenStyles } from '../styles/LoginScreen/LoginScreenStyles';
import { GlobalStyles } from '../styles/GlobalStyles';

const LoginScreen = () => {
  const navigation = useNavigation();
  const { styles } = useStyles(LoginScreenStyles);
  const { styles: globalStyles } = useStyles(GlobalStyles);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPress = async () => {
    const result = await handleLogin(email, password);
    if (result.success) {
        navigation.jumpTo('Главная');
    } else {
        alert('Authentication failed');
    }
  };  

  const onRegisterPress = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>Foodsmile</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={onLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onRegisterPress}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
