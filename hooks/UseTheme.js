import { useContext, useMemo } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Colors from '../styles/Colors';

const useTheme = (getStyleFunction) => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  const { theme } = context;
  const themeColors = Colors[theme];
  const styles = useMemo(() => getStyleFunction(themeColors), [themeColors, getStyleFunction]);

  return { styles };
};

export default useTheme;