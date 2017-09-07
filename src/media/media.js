import React from 'react';
import { View } from 'react-native';
import computeStyle from './media.style';

/**
 * Create a media placeholder
 */
export default function (props) {
  return <View style={computeStyle(props)} />;
}
