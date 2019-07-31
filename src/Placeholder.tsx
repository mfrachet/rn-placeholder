import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { AnimationConsumer } from "./animations/AnimationConsumer";
import { SIZES } from "./tokens";
import { PlaceholderBlock } from "./PlaceholderBlock";

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
  const ChildAnimation = Animation ? AnimationConsumer : View;

  return (
    <AnimationProvider>
      <View style={[style, styles.row]} {...props}>
        {Left && <Left style={styles.left} Animation={ChildAnimation} />}
        <PlaceholderBlock style={styles.full} Animation={ChildAnimation}>
          {children}
        </PlaceholderBlock>
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
  row: { flexDirection: "row", width: "100%" }
});
