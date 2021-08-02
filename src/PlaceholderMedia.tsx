import React from "react";
import { Animated, StyleSheet, View, ViewProps } from "react-native";
import { useAnimation } from "./animations/context";
import { COLORS, SIZES } from "./tokens";

export interface PlaceholderMediaProps extends ViewProps {
  /* The media size (height / width), default is 40  */
  size?: number;
  /* Defines if the media is rounded or not, default is false */
  isRound?: boolean;
  /* The media color, default is #efefef  */
  color?: string;
  /* Customize the style of the underlying View component */
  style?: ViewProps["style"];
  /* Customize the style of the animation View component (for change animation color) */
  animationStyleProps?: ViewProps["style"];
}

export const PlaceholderMedia: React.FC<PlaceholderMediaProps> = ({
  size = SIZES.xxl,
  isRound = false,
  color = COLORS.primary,
  style,
  animationStyleProps,
}) => {
  const computedStyles = {
    backgroundColor: color,
    borderRadius: isRound ? size / 2 : 3,
    height: size,
    width: size,
  };

  const animationStyle = useAnimation();

  return (
    <View style={[computedStyles, style, styles.media]}>
      <Animated.View style={[animationStyle, animationStyleProps]} />
    </View>
  );
};

const styles = StyleSheet.create({
  media: {
    overflow: "hidden",
  },
});
