import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animations from '../animation/animations';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

const makeRoot = (animation) => {
  if (animation) {
    const Animation = Animations[animation];

    if (!Animation) {
      throw new Error(`Animation "${animation}" doesn\'t exist in the library`);
    }

    return Animation;
  }

  return View;
};

const Placeholder = ({
  isReady,
  animation,
  customAnimation,
  children,
  whenReadyRender: WhenReadyRender,
  renderLeft: Left,
  renderRight: Right,
  ...props
}) => {
  const Root = customAnimation || makeRoot(animation);

  if (isReady) {
    return WhenReadyRender ? <WhenReadyRender /> : null;
  }

  return (
    <Root style={styles.container} {...props}>
      {Left && <Left />}
      <View>{React.Children.toArray(children).map(element => React.cloneElement(element))}</View>
      {Right && <Right />}
    </Root>
  );
};

export default Placeholder;
