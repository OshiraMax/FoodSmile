import * as Keychain from 'react-native-keychain';

const handleLogin = async (email, password) => {
    try {
      const response = await fetch('http://192.168.0.12:8080/users/login', {
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
  
      if (response.status === 200) {
        await Keychain.setGenericPassword(email, data.token);
        return { success: true, data: data };
      } else {
        return { success: false, message: 'Authentication failed' };
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  };
  
  export default handleLogin;
  