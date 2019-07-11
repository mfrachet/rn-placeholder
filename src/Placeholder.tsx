import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { AnimationConsumer } from "./animations/AnimationConsumer";
import { SIZES } from "./tokens";

export interface IPlaceholderElement {
  Animation?: React.ComponentType;
}

export interface IPlaceholder extends ViewProps {
  /* An optional component that animates the placeholder */
  Animation?: React.ComponentType;
  /* An optional component to display on the left */
  Left?: React.ComponentType<ViewProps & IPlaceholderElement>;
  /* An optional component to display on the right */
  Right?: React.ComponentType<ViewProps & IPlaceholderElement>;
}

export const Placeholder: React.FC<IPlaceholder> = ({
  children,
  style,
  Left,
  Right,
  Animation,
  ...props
}) => {
  const AnimationProvider = Animation ? Animation : View;
  const ChildAnimation = Animation ? AnimationConsumer : React.Fragment;

  const arrayOfChildren = React.Children.toArray(children);
  const enhancedChildren = arrayOfChildren.map(
    (child: JSX.Element, index: number) =>
      React.cloneElement(child, {
        Animation: ChildAnimation,
        hasMargin: index !== arrayOfChildren.length - 1
      })
  );

  return (
    <AnimationProvider>
      <View style={[style, styles.row]} {...props}>
        {Left && <Left style={styles.left} Animation={ChildAnimation} />}
        <View style={styles.full}>{enhancedChildren}</View>
        {Right && <Right style={styles.right} Animation={ChildAnimation} />}
      </View>
    </AnimationProvider>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1
  },
  left: {
    marginRight: SIZES.normal
  },
  right: {
    marginLeft: SIZES.normal
  },
  row: { flexDirection: "row" }
});
