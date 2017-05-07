import React, { PropTypes } from 'react';
import { Animated } from 'react-native';
import Animations from './animation/animations';

/**
 * Higher order component that factors animation and state ready
 * @param PlaceholderComponent
 */
const connect = (PlaceholderComponent) => {
  function placeHolder(props) {
    const { onReady, animate, children } = props;

    if (onReady) {
      return children;
    }

    if (animate) {
      const animation = Animations[animate]();
      animation.start();
      return (
        <Animated.View style={animation.style}>
          <PlaceholderComponent {...props} />
        </Animated.View>
      );
    }
    return <PlaceholderComponent {...props} />;
  }

  placeHolder.propTypes = {
    onReady: PropTypes.bool,
    children: PropTypes.element,
    animate: PropTypes.string,
  };

  placeHolder.defaultProps = {
    onReady: false,
    animate: null,
    children: null,
  };

  return placeHolder;
};

export default connect;
