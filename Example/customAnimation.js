import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';


const Colors = ({ children }) => {
  const animation = new Animated.Value(0);

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

  start();
  const backgroundColor = animation.interpolate({
    inputRange: [0, 50, 100],
    outputRange: ['yellow', 'orange', 'blue'],
  });
  const style = { backgroundColor };
  return (
    <Animated.View style={style}>
      {children}
    </Animated.View>
  );
};

Colors.propTypes = {
  children: PropTypes.shape({}),
};

Colors.defaultProps = {
  children: null,
};

export default Colors;
