import React from "react";
import { View } from "react-native";

export const Line = ({
  textSize = 12,
  color = "#efefef",
  width,
  style,
  noMargin = false,
  ...props
}) => {
  const height = textSize;
  const alignSelf = "stretch";
  const backgroundColor = color;
  const borderRadius = textSize / 4;
  const marginBottom = noMargin ? 0 : textSize;
  const widthProp = width && { width };
  const computedStyle = {
    height,
    alignSelf,
    backgroundColor,
    borderRadius,
    marginBottom,
    ...widthProp
  };

  return <View style={[computedStyle, style]} {...props} />;
};
