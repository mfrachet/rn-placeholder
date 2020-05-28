import {
  addDecorator,
  configure,
  getStorybookUI,
} from "@storybook/react-native";
import React from "react";
import { AppRegistry, View, ViewProps } from "react-native";

const style = {
  backgroundColor: "#f4f4f4",
  flex: 1,
  paddingHorizontal: 12,
  paddingVertical: 50,
};

const Wrapper: React.FC<ViewProps> = ({ children }) => (
  <View style={style}>{children}</View>
);

addDecorator((fn) => <Wrapper>{fn()}</Wrapper>);

// import stories
configure(() => {
  require("./stories");
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

// If you are using React Native vanilla write your app name here.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent("%APP_NAME%", () => StorybookUIRoot);

export default StorybookUIRoot;
