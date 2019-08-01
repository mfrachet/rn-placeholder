import React from "react";
import { Animated, ViewProps } from "react-native";
import { Consumer } from "./context";

export const AnimationConsumer: React.FC<ViewProps> = ({ children }) => (
  <Consumer>
    {animationStyle => (
      <Animated.View style={animationStyle}>{children}</Animated.View>
    )}
  </Consumer>
);
