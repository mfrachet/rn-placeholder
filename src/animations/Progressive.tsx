import React from "react";
import { Animated, StyleSheet, ViewProps } from "react-native";
import { Provider } from "./context";

const START_VALUE = 0;
const END_VALUE = 100;
const DURATION = 750;
const isInteraction = false;

export interface IProgressive extends ViewProps {
  color?: string;
}

export class Progressive extends React.Component<IProgressive> {
  private animation: Animated.Value;

  constructor(props: IProgressive) {
    super(props);

    this.animation = new Animated.Value(START_VALUE);
  }

  public componentDidMount() {
    this.start();
  }

  public render() {
    const { children, style, color = "rgba(0,0,0,0.1)" } = this.props;

    const right = this.animation.interpolate({
      inputRange: [START_VALUE, END_VALUE],
      outputRange: ["0%", "100%"]
    });

    return (
      <Provider
        value={[
          styles.animationStyle,
          style,
          { right, backgroundColor: color }
        ]}
      >
        {children}
      </Provider>
    );
  }

  private start() {
    Animated.sequence([
      Animated.timing(this.animation, {
        duration: DURATION,
        isInteraction,
        toValue: END_VALUE
      }),
      Animated.timing(this.animation, {
        duration: DURATION,
        isInteraction,
        toValue: START_VALUE
      })
    ]).start(e => {
      if (e.finished) {
        this.start();
      }
    });
  }
}

const styles = StyleSheet.create({
  animationStyle: {
    height: "100%",
    position: "absolute",
    width: "100%"
  }
});
