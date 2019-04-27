import React from 'react';
import PropTypes from 'prop-types';

export const stylify = computeStyles => (Component) => {
  const StyledComponent = ({ style, ...otherProps }) => {
    const styles = { ...computeStyles(otherProps), ...style };
    return <Component {...otherProps} style={styles} />;
  };

  StyledComponent.propTypes = {
    style: PropTypes.shape({}),
  };

  StyledComponent.defaultProps = {
    style: {},
  };

  return StyledComponent;
};
