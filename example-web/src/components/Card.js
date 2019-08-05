import React from "react";
import { StyleSheet, View } from "react-native";

export const Card = ({ children, style, dark, ...props }) => (
  <View style={[styles.card, style, dark && styles.dark]} {...props}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 3,
    elevation: 3,
    marginBottom: 12,
    padding: 12
  },
  dark: {
    backgroundColor: "#111111"
  }
});
