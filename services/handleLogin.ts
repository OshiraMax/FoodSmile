import * as SecureStore from 'expo-secure-store';

type LoginResponse = {
  success: boolean;
  message?: string;
};

const handleLogin = async (
  email: string, 
  password: string
): Promise<LoginResponse> => {
    try {
      const response = await fetch('http://192.168.0.13:8080/users/login', {
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
      if (error instanceof Error) {
        return { success: false, message: error.message };
      } else {
        return { success: false, message: 'An unknown error occurred' };
      }
    }
  };
  
  export default handleLogin;
  