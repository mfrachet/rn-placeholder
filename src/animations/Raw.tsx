import React from "react";
import { ViewProps } from "react-native";
import { Provider } from "./context";

export const Raw: React.FC<ViewProps> = ({ children, ...props }) => (
  <Provider value={null}>{children}</Provider>
);
