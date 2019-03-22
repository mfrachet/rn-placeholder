import React from 'react';
import { View } from 'react-native';

const Line = ({
  textSize = 12,
  color = '#efefef',
  width = '100%',
  style,
  noMargin = false,
  ...props
}) => {
  const height = textSize;
  const alignSelf = 'stretch';
  const backgroundColor = color;
  const borderRadius = textSize / 4;
  const marginBottom = noMargin ? 0 : textSize;

  const computedStyle = {
    height,
    alignSelf,
    backgroundColor,
    borderRadius,
    width,
    marginBottom,
  };

  return <View style={[computedStyle, style]} {...props} />;
};

export default Line;
