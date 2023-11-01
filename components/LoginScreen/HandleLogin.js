import * as SecureStore from 'expo-secure-store';

const handleLogin = async (email, password) => {
    try {
      const response = await fetch('http://192.168.0.12:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          passwordHash: password,
        }),
      });
  
      if (response.ok) {
        const { token } = await response.json();
        await SecureStore.setItemAsync('userToken', token);
        console.log ('Токен получен!');
        return { success: true };
      }
      const { message } = await response.json();
      return { success: false, message };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };
  
  export default handleLogin;
  