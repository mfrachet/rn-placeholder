import React from 'react';
import { View } from 'react-native';
import Animations from '../animation/animations';

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

export const Placeholder = ({
  isReady, animation, customAnimation, ...props
}) => {
  const Root = customAnimation || makeRoot(animation, customAnimation);

  return isReady && <Root {...props} />;
};
