import * as React from 'react'
import { Placeholder } from './placeholder/placeholder'

interface Props {
  isReady: boolean
  animation: string
  customAnimation: Object
  children: React.ReactChildren
  whenReadyRender: () => React.ReactType
  renderLeft: () => React.ReactType
  renderRight: () => React.ReactType
}

export const connect = (Component: React.ReactType) => ({
  isReady,
  animation,
  customAnimation,
  children,
  whenReadyRender,
  renderLeft,
  renderRight,
  ...props
}: Props) => (
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
)
