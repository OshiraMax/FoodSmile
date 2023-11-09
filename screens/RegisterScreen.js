import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import handleRegister from '../services/handleRegister';

import useStyles from '../hooks/useStyles';
import { RegisterScreenStyles } from '../styles/RegisterScreen/RegisterScreenStyles';
import { GlobalStyles } from '../styles/GlobalStyles';

const RegisterScreen = ({ navigation }) => {
  const { styles } = useStyles(RegisterScreenStyles);
  const { styles: globalStyles } = useStyles(GlobalStyles);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const handlePress = async () => {
    const result = await handleRegister(email, password, confirmPassword);
    if (result.success) {
      navigation.navigate('Login');
    } else {
      console.log('Ошибка регистрации:', result.message);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>Register</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
