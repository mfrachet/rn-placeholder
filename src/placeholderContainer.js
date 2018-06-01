import React from 'react';
import PropTypes from 'prop-types';
import Animations from './animation/animations';

const renderAnimation = (Animation, Component, { children, ...otherProps }) => {
  if (!Animation) {
    throw new Error(`${Animation.name} doesnt exist in the current project`);
  }
  return (
    <Animation>
      <Component {...otherProps} />
    </Animation>
  );
};

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
      return renderAnimation(customAnimate, PlaceholderComponent, props);
    }

    if (animate) {
      return renderAnimation(Animations[animate], PlaceholderComponent, props);
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
