import React from "react";
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View
} from "react-native";

export const Loader: React.FC<ActivityIndicatorProps> = ({
  children,
  ...props
}) => (
    <View style={styles.loader}>
      {children}
      <ActivityIndicator {...props} style={[styles.indicator, props.style]} />
    </View>
);

const styles = StyleSheet.create({
  indicator: { position: "absolute", height: "100%" },
  loader: {
    alignItems: "center",
    justifyContent: "center"
  }
});
