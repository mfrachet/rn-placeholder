import React, { useRef } from "react";
import { Animated, StyleSheet, ViewProps } from "react-native";
import { AnimationContext } from "./context";

const START_VALUE = 0;
const END_VALUE = 100;
const DURATION = 750;
const isInteraction = false;

export interface ProgressiveProps extends ViewProps {
  color?: string;
}

export const Progressive: React.FC<ProgressiveProps> = ({
  style,
  color = "rgba(0,0,0,0.1)",
  children,
}) => {
  const animation = useRef(new Animated.Value(START_VALUE));

  const start = () => {
    Animated.sequence([
      Animated.timing(animation.current, {
        duration: DURATION,
        isInteraction,
        toValue: END_VALUE,
        useNativeDriver: false,
      }),
      Animated.timing(animation.current, {
        duration: DURATION,
        isInteraction,
        toValue: START_VALUE,
        useNativeDriver: false,
      }),
    ]).start((e) => {
      if (e.finished) {
        start();
      }
    });
  };

  React.useEffect(() => {
    start();
  }, []);

  const right = animation.current.interpolate({
    inputRange: [START_VALUE, END_VALUE],
    outputRange: ["0%", "100%"],
  });

  return (
    <AnimationContext.Provider
      value={[styles.animationStyle, style, { right, backgroundColor: color }]}
    >
      {children}
    </AnimationContext.Provider>
  );
};

const styles = StyleSheet.create({
  animationStyle: {
    height: "100%",
    position: "absolute",
    width: "100%",
  },
});
