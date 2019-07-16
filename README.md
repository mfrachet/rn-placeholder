[![Build Status](https://travis-ci.org/mfrachet/rn-placeholder.svg?branch=master)](https://travis-ci.org/mfrachet/rn-placeholder)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Display some placeholder stuff before rendering your text or media content in React Native. Compatible with [Expo](https://expo.io/) and [react-native-web](https://github.com/necolas/react-native-web).

[Here's a Snack application using the module and the different animations **with copy to clipboard!**](https://snack.expo.io/@mfrachet/84bb31)

---

![Image of the placeholder in action](./docs/placeholder.gif)

# Usage

## Installation

```javascript
$ yarn add rn-placeholder
```

## In your code

```jsx
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-placeholder";

const App = () => (
  <Placeholder
    Animation={Fade}
    Left={PlaceholderMedia}
    Right={PlaceholderMedia}
  >
    <PlaceholderLine width={80} />
    <PlaceholderLine />
    <PlaceholderLine width={30} />
  </Placeholder>
);
```

The v3 comes with an example app that provides different stories and example of the library:

- [Stories for elements](./example/storybook/stories/elements.tsx)
- [Stories for animations](./example/storybook/stories/animations.tsx)
- [Stories for customizing elements](./example/storybook/stories/customizeElements.tsx)
- [Stories for customizing animations](./example/storybook/stories/customizeAnimation.tsx)

## Run the example app

To start the app:

```sh
$ git clone https://github.com/mfrachet/rn-placeholder
$ cd rn-placeholder
$ yarn
$ yarn start
```

## V3 features

- Rewritten in [Typescript](https://www.typescriptlang.org/)
- Less code, more fun 😎
- API [Suspense](https://reactjs.org/docs/code-splitting.html#suspense) oriented
- [New animations](./src/animations)
