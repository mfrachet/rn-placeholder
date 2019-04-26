import { View } from "react-native";
import connect from "./placeholderContainer";
import stylify from "./placeholderStylify";
import computeStyleMedia from "./media/media.style";
import computeStyleBox from "./box/box.style";

const compose = (f, g) => x => f(g(x));

/**
 * Export shared elements
 */
export const Media = compose(
  connect,
  stylify(computeStyleMedia)
)(View);

export const Box = compose(
  connect,
  stylify(computeStyleBox)
)(View);
