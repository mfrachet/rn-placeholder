import React from "react";
import { Animated, StyleSheet, View } from "react-native";

const START_VALUE = 0;
const END_VALUE = 100;
const isInteraction = false;

export interface IShine {
  /* Animation duration, default is 750 */
  duration?: number;
}

export class ShineOverlay extends React.Component<IShine, { width: number }> {
  private animation: Animated.Value;
  constructor(props: IShine) {
    super(props);

    this.state = {
      width: 0
    };

    this.animation = new Animated.Value(0);
  }

  public componentDidMount() {
    this.start();
  }

  public render() {
    const { children } = this.props;

    const translateX = this.animation.interpolate({
      inputRange: [START_VALUE, END_VALUE],
      outputRange: [0, this.state.width]
    });

    return (
      <View
        onLayout={e => this.setState({ width: e.nativeEvent.layout.width })}
      >
        {children}
        <Animated.View
          style={[styles.shine, { transform: [{ translateX }] }]}
        />
      </View>
    );
  }

  private start() {
    this.animation.setValue(START_VALUE);

    Animated.timing(this.animation, {
      duration: this.props.duration || 750,
      isInteraction,
      toValue: END_VALUE,
      useNativeDriver: true
    }).start(e => {
      if (e.finished) {
        this.start();
      }
    });
  }
}

const styles = StyleSheet.create({
  shine: {
    backgroundColor: "#ffffff",
    height: "100%",
    opacity: 0.4,
    position: "absolute",
    width: 30
  }
});
