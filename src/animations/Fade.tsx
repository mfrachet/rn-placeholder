import React from "react";
import { Animated, ViewProps } from "react-native";
import { Provider } from "./context";

const START_VALUE = 0.5;
const END_VALUE = 1;
const useNativeDriver = true;
const isInteraction = false;

export interface IFade extends ViewProps {
  /* Animation duration, default is 500 */
  duration?: number;
}

export class Fade extends React.Component<IFade> {
  public static defaultProps = {
    duration: 500
  };

  private animation: Animated.Value;

  constructor(props: IFade) {
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
    const { duration } = this.props;
    Animated.sequence([
      Animated.timing(this.animation, {
        duration,
        isInteraction,
        toValue: END_VALUE,
        useNativeDriver
      }),
      Animated.timing(this.animation, {
        duration,
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
