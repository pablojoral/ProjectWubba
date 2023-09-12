import {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';

const useSpin = () => {
  // Initialize an Animated.Value with 0
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start an infinite animation loop
    Animated.loop(
      // Animate spinValue from 0 to 1 over the course of 3000ms
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true, // Using native driver for smoother animations
      }),
    ).start();
  }, []);

  // Interpolate spinValue to spin from 0deg to 360deg
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return {spin};
};

export default useSpin;
