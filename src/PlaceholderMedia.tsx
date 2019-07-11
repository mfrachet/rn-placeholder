import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { IPlaceholderElement } from "./Placeholder";
import { COLORS, SIZES } from "./tokens";

export interface IMedia extends IPlaceholderElement, ViewProps {
  Animation?: React.ComponentType;
  /* The media size (height / width), default is 40  */
  size?: number;
  /* Defines if the media is rounded or not, default is false */
  isRound?: boolean;
  /* The media color, default is #efefef  */
  color?: string;
  /* Customize the style of the underlying View component */
  style?: ViewProps["style"];
}

export const PlaceholderMedia: React.FC<IMedia> = ({
  Animation = React.Fragment,
  size = SIZES.xxl,
  isRound = false,
  color = COLORS.primary,
  style
}) => {
  const computedStyles = {
    backgroundColor: color,
    borderRadius: isRound ? size / 2 : 3,
    height: size,
    width: size
  };

  return (
    <View style={[computedStyles, style, styles.media]}>
      <Animation />
    </View>
  );
};

const styles = StyleSheet.create({
  media: {
    overflow: "hidden"
  }
});
