import React from 'react';
import { View } from 'react-native';
import computeStyle from './line.style';

/**
 * Create a single Line on screen based on computed styles
 */
export default function (props) {
  return <View style={computeStyle(props)} />;
}
