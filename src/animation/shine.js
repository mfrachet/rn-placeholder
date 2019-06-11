import React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const START_VALUE = 0;
const END_VALUE = 100;
const DURATION = 750;
const isInteraction = false;

const styles = StyleSheet.create({
  shine: {
    width: 30,
    position: 'absolute',
    height: '100%',
    backgroundColor: '#ffffff',
    opacity: 0.4,
  },
});
/**
 * Create a repetitive Shine animation
 */
const Shine = ({ children, ...props }) => {
  const animation = new Animated.Value(0);

  function start() {
    animation.setValue(START_VALUE);
    Animated.sequence([
      Animated.timing(animation, {
        toValue: END_VALUE,
        duration: DURATION,
        isInteraction,
      }),
    ]).start(e => e.finished && start());
  }

  start();

  const marginLeft = animation.interpolate({
    inputRange: [START_VALUE, END_VALUE],
    outputRange: ['0%', '100%'],
  });

  return (
    <View {...props}>
      {children}
      <Animated.View style={[styles.shine, { marginLeft }]} />
    </View>
  );
};

Shine.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

Shine.defaultProps = {
  children: null,
};

export default Shine;
