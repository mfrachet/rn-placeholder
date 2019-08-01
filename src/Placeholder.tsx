import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { Raw } from "./animations/Raw";
import { SIZES } from "./tokens";

export interface IPlaceholder extends ViewProps {
  /* An optional component that animates the placeholder */
  Animation?: React.ComponentType;
  /* An optional component to display on the left */
  Left?: React.ComponentType<ViewProps>;
  /* An optional component to display on the right */
  Right?: React.ComponentType<ViewProps>;
}

export const Placeholder: React.FC<IPlaceholder> = ({
  children,
  style,
  Left,
  Right,
  Animation,
  ...props
}) => {
  const AnimationProvider = Animation || Raw;

  return (
    <AnimationProvider>
      <View style={[style, styles.row]} {...props}>
        {Left && <Left style={styles.left} />}
        <View style={styles.full}>{children}</View>
        {Right && <Right style={styles.right} />}
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
