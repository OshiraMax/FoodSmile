import { useWindowDimensions } from 'react-native';

const useDimensions = () => {
  const dimensions = useWindowDimensions();
  return { dimensions };
};

export default useDimensions;