import * as SecureStore from 'expo-secure-store';

const handleRegister = async (email, password, confirmPassword) => {
  // Проверка пароля и подтверждения пароля
  if (password !== confirmPassword) {
    return { success: false, message: 'Passwords do not match' };
  }

  try {
    const response = await fetch('http://192.168.0.12:8080/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        passwordHash: password,
      }),
    });

    const data = await response.json();

    if (response.status === 201) { // Предполагая, что сервер возвращает 201 при успешной регистрации
      await SecureStore.setItemAsync('userToken', data.token);
      return { success: true, data: data };
    } else {
      return { success: false, message: data.message || 'Registration failed' };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export default handleRegister;
