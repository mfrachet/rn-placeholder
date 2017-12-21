import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Animations from './animation/animations';

const renderAnimation = (Animation, Component, props) => {
  if (!Animation) {
    throw new Error(`${Animation.name} doesnt exist in the current project`);
  }
  return (
    <Animation>
      <Component {...props} />
    </Animation>
  );
};

/**
 * Higher order component that factors animation and state ready
 * @param PlaceholderComponent
 */
const connect = (PlaceholderComponent) => {
  class PlaceHolder extends PureComponent {
    render() {
      const { onReady, animate, children, customAnimate } = this.props;

      if (onReady) {
        return children;
      }

      if (customAnimate) {
        return renderAnimation(customAnimate, PlaceholderComponent, this.props);
      }

      if (animate) {
        return renderAnimation(Animations[animate], PlaceholderComponent, this.props);
      }
      return <PlaceholderComponent {...this.props} />;
    }
  }

  PlaceHolder.propTypes = {
    onReady: PropTypes.bool,
    children: PropTypes.element,
    animate: PropTypes.string,
    customAnimate: PropTypes.func,
  };

  PlaceHolder.defaultProps = {
    onReady: false,
    animate: null,
    children: null,
    customAnimate: null,
  };

  return PlaceHolder;
};

export default connect;
