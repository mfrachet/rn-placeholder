import { Animated } from 'react-native';

/**
 * Create a repetitive fadein / fadeout animation
 */
export default () => {
  const START_VALUE = 0.5;
  const animation = new Animated.Value(START_VALUE);

  function start() {
    return Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
      }),
      Animated.timing(animation, {
        toValue: START_VALUE,
        duration: 500,
      }),
    ]).start((e) => {
      if (e.finished) {
        start();
      }
    });
  }

  /**
   * The two mandatory properties to return
   */
  return {
    style: { opacity: animation },
    start,
  };
};
