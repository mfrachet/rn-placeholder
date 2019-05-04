import React from 'react';
import { Placeholder } from './placeholder/placeholder';

export const connect = Component => ({
  isReady,
  animation,
  customAnimation,
  children,
  whenReadyRender,
  renderLeft,
  renderRight,
  ...props
}) => (
  <Placeholder
    isReady={isReady}
    animation={animation}
    customAnimation={customAnimation}
    whenReadyRender={whenReadyRender}
    renderLeft={renderLeft}
    renderRight={renderRight}
  >
    <Component {...props} />
  </Placeholder>
);
