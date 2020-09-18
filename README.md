[![Build Status](https://travis-ci.org/mfrachet/rn-placeholder.svg?branch=master)](https://travis-ci.org/mfrachet/rn-placeholder)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Display some placeholder stuff before rendering your text or media content in React Native. Compatible with [Expo](https://expo.io/) and [react-native-web](https://github.com/necolas/react-native-web).

- [Snack application **with copy to clipboard!**](https://snack.expo.io/@mfrachet/84bb31)
- [Usage with react-native-web](https://mfrachet.github.io/rn-placeholder)
- [The N Props syndrome (post)](https://mfrachet.github.io/the-n-props-syndrome): explaining the transition between v2 and v3

---

![Image of the placeholder in action](./assets/placeholder.gif)

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

## Run the example apps

_You can modify any call of `yarn` by `npm install`_

### To start the mobile app:

```sh
$ git clone https://github.com/mfrachet/rn-placeholder
$ cd rn-placeholder
$ yarn
$ cd ./example && yarn && yarn start
```

### To start the web app:

```sh
$ git clone https://github.com/mfrachet/rn-placeholder
$ cd rn-placeholder
$ yarn
$ cd ./example-web && yarn && yarn start
```

The web app is also available in this github pages: https://mfrachet.github.com/rn-placeholder.

## V3 features

- Rewritten in [Typescript](https://www.typescriptlang.org/)
- Less code, more fun 😎
- API [Suspense](https://reactjs.org/docs/code-splitting.html#suspense) oriented
- [New animations](./src/animations)
