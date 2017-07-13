import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

/**
 * Create a repetitive fadein / fadeout animation
 */
const Fade = ({ children }) => {
  const START_VALUE = 0.5;
  const animation = new Animated.Value(START_VALUE);

  function start() {
    Animated.sequence([
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

  start();
  const style = { opacity: animation };
  return (
    <Animated.View style={style}>
      {children}
    </Animated.View>
  );
};

Fade.propTypes = {
  children: PropTypes.shape({}),
};

Fade.defaultProps = {
  children: null,
};

export default Fade;
