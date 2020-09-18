import React from "react";
import { Animated, StyleSheet, View, ViewProps } from "react-native";
import { useAnimation } from "./animations/context";
import { COLORS, SIZES } from "./tokens";

export interface PlaceholderLineProps extends ViewProps {
  /* The line height, default is 12  */
  height?: number;
  /* The line color, default is #efefef  */
  color?: string;
  /* The line width in percent, default is 100(%)  */
  width?: number;
  /* Defines if a line should have a margin bottom or not, default is false */
  noMargin?: boolean;
  /* Customize the style of the underlying View component */
  style?: ViewProps["style"];
}

export const PlaceholderLine: React.FC<PlaceholderLineProps> = ({
  height = SIZES.normal,
  color = COLORS.primary,
  width = 100,
  noMargin = false,
  style,
}) => {
  const backgroundColor = color;
  const borderRadius = height / 4;
  const marginBottom = noMargin ? 0 : height;

  const computedStyle = {
    backgroundColor,
    borderRadius,
    height,
    marginBottom,
    width: `${width}%`,
  };

  const animationStyle = useAnimation();

  return (
    <View style={[computedStyle, style, styles.line]}>
      <Animated.View style={animationStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    overflow: "hidden",
  },
});
