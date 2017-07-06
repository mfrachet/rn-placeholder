import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import Animations from './animation/animations';

const computeStyleForAnimation = (animation) => {
  if (!animation.start) {
    throw new Error('No method `start` found in the animation');
  }

  if (!animation.style) {
    throw new Error('No property `style` found in the animation');
  }
  animation.start();
  return animation.style;
};

const renderAnimation = (Component, style, props) => (
  <Animated.View style={style}>
    <Component {...props} />
  </Animated.View>
);

/**
 * Higher order component that factors animation and state ready
 * @param PlaceholderComponent
 */
const connect = (PlaceholderComponent) => {
  function placeHolder(props) {
    const { onReady, animate, children, customAnimate } = props;

    if (onReady) {
      return children;
    }

    if (customAnimate) {
      const style = computeStyleForAnimation(customAnimate());
      return renderAnimation(PlaceholderComponent, style, props);
    }

    if (animate) {
      const style = computeStyleForAnimation(Animations[animate]());
      return renderAnimation(PlaceholderComponent, style, props);
    }
    return <PlaceholderComponent {...props} />;
  }

  placeHolder.propTypes = {
    onReady: PropTypes.bool,
    children: PropTypes.element,
    animate: PropTypes.string,
    customAnimate: PropTypes.func,
  };

  placeHolder.defaultProps = {
    onReady: false,
    animate: null,
    children: null,
    customAnimate: null,
  };

  return placeHolder;
};

export default connect;
