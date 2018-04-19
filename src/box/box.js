import React from 'react';
import { View } from 'react-primitives';
import computeStyle from './box.style';

/**
 * Create a box placeholder
 */
export default function (props) {
  return <View style={computeStyle(props)} />;
}
