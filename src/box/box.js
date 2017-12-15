import React from 'react';
import { View } from 'react-native';
import computeStyle from './box.style';

/**
 * Create a media placeholder
 */
export default function (props) {
  return <View style={computeStyle(props)} />;
}
