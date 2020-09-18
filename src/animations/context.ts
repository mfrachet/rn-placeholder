import React, { useContext } from "react";
export const AnimationContext = React.createContext({});

export const useAnimation = () => useContext(AnimationContext);
