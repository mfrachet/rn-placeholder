import React from "react";
import { Text } from "react-native";

export const Title = ({ children, color = "black" }) => (
  <Text
    style={{
      color,
      fontSize: 20,
      fontWeight: "500",
      marginBottom: 24,
      textAlign: "center"
    }}
  >
    {children}
  </Text>
);
