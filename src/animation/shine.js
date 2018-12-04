import React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const START_VALUE = 0;
const END_VALUE = 100;
const DURATION = 750;

const styles = StyleSheet.create({
  shine: {
    width: 30,
    position: 'absolute',
    height: '100%',
    opacity: 0.4,
  },
});
/**
 * Create a repetitive Shine animation
 */
const Shine = ({ animationColor, children }) => {
  const animation = new Animated.Value(0);

  function start() {
    animation.setValue(START_VALUE);
    Animated.sequence([
      Animated.timing(animation, {
        toValue: END_VALUE,
        duration: DURATION,
      }),
    ]).start(e => e.finished && start());
  }

  start();

  const marginLeft = animation.interpolate({
    inputRange: [START_VALUE, END_VALUE],
    outputRange: ['0%', '100%'],
  });

  return (
    <View>
      {children}
      <Animated.View style={[styles.shine, { marginLeft, backgroundColor: animationColor }]} />
    </View>
  );
};

Shine.propTypes = {
  children: PropTypes.shape({}),
  backgroundColor: PropTypes.string,
};

Shine.defaultProps = {
  children: null,
  animationColor: '#FFFFFF',
};

export default Shine;
