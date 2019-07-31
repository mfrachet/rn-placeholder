import React from "react";
import { View, ViewProps } from "react-native";
import { IPlaceholderElement } from "./Placeholder";

export interface IBlock extends IPlaceholderElement, ViewProps {}

export const PlaceholderBlock: React.FC<IBlock> = ({
  children,
  Animation,
  ...props
}) => {
  const arrayOfChildren = React.Children.toArray(children);
  const enhancedChildren = arrayOfChildren.map(
    (child: JSX.Element, index: number) =>
      React.cloneElement(child, {
        Animation,
        hasMargin: index !== arrayOfChildren.length - 1
      })
  );

  return <View {...props}>{enhancedChildren}</View>;
};
