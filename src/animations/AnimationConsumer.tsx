import React from "react";
import { Animated } from "react-native";
import { Consumer } from "./context";

export const AnimationConsumer: React.FC = () => (
  <Consumer>
    {animationStyle => <Animated.View style={animationStyle} />}
  </Consumer>
);
