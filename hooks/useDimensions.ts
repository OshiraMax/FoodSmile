import { useWindowDimensions, ScaledSize } from 'react-native';

const useDimensions = (): { dimensions: ScaledSize } => {
  const dimensions = useWindowDimensions();
  return { dimensions };
};

export default useDimensions;