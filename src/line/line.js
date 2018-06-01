import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import computeStyle from './line.style';

/**
 * Create a single Line on screen based on computed styles
 */
export default function Line({ style, ...otherProps }) {
  const lineStyle = { ...style, ...computeStyle(otherProps) };
  return <View style={lineStyle} />;
}

Line.propTypes = {
  style: PropTypes.shape({}),
};

Line.defaultProps = {
  style: {},
};
