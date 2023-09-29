import { useContext, useMemo } from 'react';

import { ThemeContext } from '../context/ThemeContext';
import useDimensions from './useDimensions';

import Colors from '../styles/Colors';

const useStyles = (getStyleFunction) => {
  const { theme } = useContext(ThemeContext);
  const { dimensions } = useDimensions();

  const themeColors = Colors[theme];
  const styles = useMemo(() => getStyleFunction(themeColors, dimensions), [themeColors, dimensions, getStyleFunction]);

  return { styles };
};

export default useStyles;