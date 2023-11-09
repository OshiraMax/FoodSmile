import { useContext, useMemo, CSSProperties } from 'react';
import { ScaledSize } from 'react-native';

import { ThemeContext } from '../state/ThemeContext';
import useDimensions from './useDimensions';

import Colors from '../styles/Colors';

type GetStyleFunctionType = (themeColors: typeof Colors['light'], dimensions: ScaledSize) => CSSProperties;

const useStyles = (getStyleFunction: GetStyleFunctionType) => {
  const { theme } = useContext(ThemeContext);
  const { dimensions } = useDimensions();

  const themeColors = Colors[theme as 'light' | 'dark'];
  const styles = useMemo(() => getStyleFunction(themeColors, dimensions), [themeColors, dimensions, getStyleFunction]);

  return { styles };
};

export default useStyles;