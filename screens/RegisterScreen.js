import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import useStyles from '../hooks/useStyles';
import { RegisterScreenStyles } from '../styles/RegisterScreen/RegisterScreenStyles';
import { GlobalStyles } from '../styles/GlobalStyles';

const RegisterScreen = () => {
  const { styles } = useStyles(RegisterScreenStyles);
  const { styles: globalStyles } = useStyles(GlobalStyles);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
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
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
