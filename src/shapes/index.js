import { View } from "react-native";
import { stylify } from "./stylify";
import computeStyleMedia from "./media/media.style";
import computeStyleBox from "./box/box.style";

export const Media = stylify(computeStyleMedia)(View);
export const Box = stylify(computeStyleBox)(View);
