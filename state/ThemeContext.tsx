import { useState, useEffect, createContext, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {}
});

type ThemeProviderType = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderType> = ({ children }) => {
  const systemTheme = useColorScheme() || 'light';
  const [theme, setTheme] = useState<string>(systemTheme); // значение по умолчанию

  useEffect(() => {
    const fetchTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('appTheme');
      if (storedTheme) {
        setTheme(storedTheme);
      } else {
        setTheme(systemTheme);
        await AsyncStorage.setItem('appTheme', systemTheme);
      }
    };

    fetchTheme();
  }, [systemTheme]);

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    await AsyncStorage.setItem('appTheme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

