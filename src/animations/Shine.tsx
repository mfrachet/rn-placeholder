import React from "react";
import { Animated, StyleSheet, ViewProps } from "react-native";
import { Provider } from "./context";

const START_VALUE = 0;
const END_VALUE = 100;
const isInteraction = false;

export interface IShine extends ViewProps {
  /* Animation duration, default is 750 */
  duration?: number;
}

export class Shine extends React.Component<IShine> {
  private animation: Animated.Value;
  constructor(props: IShine) {
    super(props);

    this.animation = new Animated.Value(0);
  }

  public componentDidMount() {
    this.start();
  }

  public render() {
    const { children, style } = this.props;

    const left = this.animation.interpolate({
      inputRange: [START_VALUE, END_VALUE],
      outputRange: ["0%", "100%"],
    });

    return (
      <Provider value={[styles.shine, { left }, style]}>{children}</Provider>
    );
  }

  private start() {
    this.animation.setValue(START_VALUE);

    Animated.timing(this.animation, {
      duration: this.props.duration || 750,
      isInteraction,
      toValue: END_VALUE,
      useNativeDriver: false,
    }).start((e) => {
      if (e.finished) {
        this.start();
      }
    });
  }
}

const styles = StyleSheet.create({
  shine: {
    backgroundColor: "white",
    height: "100%",
    opacity: 0.5,
    width: "40%",
  },
});
