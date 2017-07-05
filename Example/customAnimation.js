import { Animated } from 'react-native';

export default () => {
  const START_VALUE = 0;
  const animation = new Animated.Value(START_VALUE);

  function start() {
    return Animated.timing(animation, {
      toValue: 100,
      duration: 1500,
    }).start((e) => {
      if (e.finished) {
        start();
      }
    });
  }

  const backgroundColor = animation.interpolate({
    inputRange: [0, 50, 100],
    outputRange: ['yellow', 'orange', 'blue'],
  });

  return {
    style: { backgroundColor },
    start,
  };
};
