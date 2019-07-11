// tslint:disable-next-line:no-implicit-dependencies
import { storiesOf } from "@storybook/react-native";
import animations from "./stories/animations";
import customizeAnimation from "./stories/customizeAnimation";
import customizeElements from "./stories/customizeElements";
import elements from "./stories/elements";

storiesOf("rn-placeholder", module)
  .add("Line and Media", elements)
  .add("Animations", animations)
  .add("Custom Line and Media", customizeElements)
  .add("Custom animations", customizeAnimation);
