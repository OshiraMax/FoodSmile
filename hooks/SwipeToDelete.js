import React, { useRef } from 'react';
import { Animated, PanResponder, Dimensions, View } from 'react-native';

const { width } = Dimensions.get('window');

const SwipeToDelete = ({ children, onDelete }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (e, gesture) => {
      // Двигаем только если движение идет влево
      return Math.abs(gesture.dx) > Math.abs(gesture.dy * 3);
    },
    onPanResponderMove: Animated.event(
      [null, { dx: pan.x }],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: (e, gesture) => {
      if (Math.abs(gesture.dx) > width / 3) {
        onDelete();
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          friction: 5,
          useNativeDriver: false
        }).start();
      }
    }
  });

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={pan.getLayout()}
    >
      {children}
    </Animated.View>
  );
};

export default SwipeToDelete;
