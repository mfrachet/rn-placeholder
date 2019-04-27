import React from "react";
import { View, StyleSheet } from "react-native";
import Animations from "../animation/animations";

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
      throw new Error(`Animation "${animation}" doesn\'t exist in the library`);
    }

    return Animation;
  }

  return View;
};

export const Placeholder = ({
  isReady,
  animation,
  customAnimation,
  children,
  whenReadyRender: WhenReadyRender,
  renderLeft,
  renderRight,
  ...props
}) => {
  const Root = customAnimation || makeRoot(animation);

  if (isReady) {
    return WhenReadyRender ? <WhenReadyRender /> : null;
  }

  const childrenArray = React.Children.toArray(children);
  const sizeOfChildren = childrenArray.length;

  return (
    <Root style={styles.container} {...props}>
      {renderLeft && renderLeft({ style: styles.leftSide })}
      <View style={styles.centerElement}>
        {childrenArray.map((element, index) =>
          React.cloneElement(element, {
            noMargin: index === sizeOfChildren - 1
          })
        )}
      </View>
      {renderRight && renderRight({ style: styles.rightSide })}
    </Root>
  );
};
