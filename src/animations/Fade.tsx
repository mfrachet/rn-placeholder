import React, { useRef } from "react";
import { Animated, ViewProps } from "react-native";
import { AnimationContext } from "./context";

const START_VALUE = 0.5;
const END_VALUE = 1;
const useNativeDriver = true;
const isInteraction = false;

export interface FadeProps extends ViewProps {
  /* Animation duration, default is 500 */
  duration?: number;
}

export const Fade: React.FC<FadeProps> = ({
  duration = 500,
  children,
  style,
}) => {
  const animation = useRef(new Animated.Value(START_VALUE));

  const start = () => {
    Animated.sequence([
      Animated.timing(animation.current, {
        duration,
        isInteraction,
        toValue: END_VALUE,
        useNativeDriver,
      }),
      Animated.timing(animation.current, {
        duration,
        isInteraction,
        toValue: START_VALUE,
        useNativeDriver,
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

  const animationStyle = {
    backgroundColor: "#dfdfdf",
    height: "100%",
    opacity: animation.current,
  };

  return (
    <AnimationContext.Provider value={[animationStyle, style]}>
      {children}
    </AnimationContext.Provider>
  );
};
