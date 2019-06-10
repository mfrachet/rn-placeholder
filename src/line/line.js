import React from "react";
import { View } from "react-native";

export const Line = ({
  textSize = 12,
  color = "#efefef",
  useDefaultWidth,
  style,
  noMargin = false,
  ...props
}) => {
  const height = textSize;
  const alignSelf = "stretch";
  const backgroundColor = color;
  const borderRadius = textSize / 4;
  const marginBottom = noMargin ? 0 : textSize;
  const lineWidth = useDefaultWidth ? { width: "100%" } : {};
  const computedStyle = {
    height,
    alignSelf,
    backgroundColor,
    borderRadius,
    marginBottom,
    ...lineWidth
  };

  return <View style={[computedStyle, style]} {...props} />;
};
