import React from "react";
import { ViewProps } from "react-native";
import { AnimationContext } from "./context";

export const Raw: React.FC<ViewProps> = ({ children, ...props }) => (
  <AnimationContext.Provider value={null}>{children}</AnimationContext.Provider>
);
