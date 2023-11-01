import * as SecureStore from 'expo-secure-store';

const handleRegister = async (email, password, confirmPassword) => {
  if (password !== confirmPassword) {
    return { success: false, message: 'Passwords do not match' };
  }

  
  console.log('Отправка запроса на регистрацию');
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

  const responseBody = await response.text();

  if (response.status === 201) {
    if (responseBody === "User registered successfully") {
      console.log('Успешная регистрация');
      return { success: true };
    }
  } else {
      return { success: false, message: 'Registration failed' };
  }
};

export default handleRegister;
