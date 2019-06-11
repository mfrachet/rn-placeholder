import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

const START_VALUE = 0.5;
const END_VALUE = 1;
const DURATION = 500;
const useNativeDriver = true;
const isInteraction = false;

/**
 * Create a repetitive fadein / fadeout animation
 */
const Fade = ({ children, style = {}, ...props }) => {
  const animation = new Animated.Value(START_VALUE);

  function start() {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: END_VALUE,
        duration: DURATION,
        isInteraction,
        useNativeDriver,
      }),
      Animated.timing(animation, {
        toValue: START_VALUE,
        duration: DURATION,
        isInteraction,
        useNativeDriver,
      }),
    ]).start((e) => {
      if (e.finished) {
        start();
      }
    });
  }

  start();

  const customStyle = { opacity: animation };

  return (
    <Animated.View style={[style, customStyle]} {...props}>
      {children}
    </Animated.View>
  );
};

Fade.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

Fade.defaultProps = {
  children: null,
};

export default Fade;
