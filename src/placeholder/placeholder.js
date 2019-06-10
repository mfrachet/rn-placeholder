import React from "react";
import { View, StyleSheet } from "react-native";
import Animations from "../animation/animations";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1
  },
  centerElement: {
    flex: 1
  },
  leftSide: {
    marginRight: 12
  },
  rightSide: {
    marginLeft: 12
  }
});

const makeRoot = animation => {
  if (animation) {
    const Animation = Animations[animation];

    if (!Animation) {
      throw new Error(`Animation "${animation}" doesn't exist in the library`);
    }

    return Animation;
  }

  return View;
};

const withView = (fn, props) => <View {...props}>{fn()}</View>;

export const Placeholder = ({
  isReady,
  animation,
  customAnimation,
  children,
  whenReadyRender: WhenReadyRender,
  renderLeft,
  renderRight,
  useDefaultWidth = true,
  ...props
}) => {
  const Root = customAnimation || makeRoot(animation);

  if (isReady) {
    return WhenReadyRender ? <WhenReadyRender /> : null;
  }

  const childrenArray = React.Children.toArray(children);
  const sizeOfChildren = childrenArray.length;
  const containerWidth = useDefaultWidth ? { width: "100%" } : {};
  const userStyle = props.style;
  return (
    <Root {...props} style={[styles.container, userStyle, containerWidth]}>
      {renderLeft && withView(renderLeft, { style: styles.leftSide })}
      <View style={styles.centerElement}>
        {childrenArray.map((element, index) =>
          React.cloneElement(element, {
            noMargin: index === sizeOfChildren - 1
          })
        )}
      </View>
      {renderRight && withView(renderRight, { style: styles.rightSide })}
    </Root>
  );
};
