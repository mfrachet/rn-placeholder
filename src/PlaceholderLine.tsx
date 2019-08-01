import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { AnimationConsumer } from "./animations/AnimationConsumer";
import { COLORS, SIZES } from "./tokens";

export interface ILine extends ViewProps {
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

export const PlaceholderLine: React.FC<ILine> = ({
  height = SIZES.normal,
  color = COLORS.primary,
  width = 100,
  noMargin = false,
  style
}) => {
  const backgroundColor = color;
  const borderRadius = height / 4;
  const marginBottom = noMargin ? 0 : height;

  const computedStyle = {
    backgroundColor,
    borderRadius,
    height,
    marginBottom,
    width: `${width}%`
  };

  return (
    <View style={[computedStyle, style, styles.line]}>
      <AnimationConsumer />
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    overflow: "hidden"
  }
});
