import React from "react";
import { Animated, ViewProps } from "react-native";
import { Provider } from "./context";

const START_VALUE = 0.5;
const END_VALUE = 1;
const DURATION = 500;
const useNativeDriver = true;
const isInteraction = false;

export class Fade extends React.Component<ViewProps> {
  private animation: Animated.Value;

  constructor(props: ViewProps) {
    super(props);

    this.animation = new Animated.Value(START_VALUE);
  }

  public componentDidMount() {
    this.start();
  }

  public render() {
    const { children, style } = this.props;
    const animationStyle = {
      backgroundColor: "#dfdfdf",
      height: "100%",
      opacity: this.animation
    };

    return <Provider value={[animationStyle, style]}>{children}</Provider>;
  }

  private start() {
    Animated.sequence([
      Animated.timing(this.animation, {
        duration: DURATION,
        isInteraction,
        toValue: END_VALUE,
        useNativeDriver
      }),
      Animated.timing(this.animation, {
        duration: DURATION,
        isInteraction,
        toValue: START_VALUE,
        useNativeDriver
      })
    ]).start(e => {
      if (e.finished) {
        this.start();
      }
    });
  }
}
