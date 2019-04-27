[![Build Status](https://travis-ci.org/mfrachet/rn-placeholder.svg?branch=master)](https://travis-ci.org/mfrachet/rn-placeholder)
[![Coverage Status](https://coveralls.io/repos/github/mfrachet/rn-placeholder/badge.svg?branch=master)](https://coveralls.io/github/mfrachet/rn-placeholder?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Display some placeholder stuff before rendering your text or media content in React Native.

Fully compatible with [Expo](https://expo.io/) and [react-native-web](https://github.com/necolas/react-native-web).

<p align="center">
<img src="./docs/demo.gif" />
</p>

# Content

- <a href="#usage">How to use it ?</a>
- [Components available](./docs/COMPONENTS.md)
- [Using default animations](./docs/ANIMATIONS.md#default)
- [Using a custom animation](./docs/ANIMATIONS.md#custom-animations)

<h1 name="#usage">Usage</h1>

### Installation

```javascript
$ yarn add rn-placeholder
```

### In your code

_This is a new API coming from v2. However, the v1 APIs are still available in [components available](./docs/COMPONENTS.md)_

```jsx
import Placeholder, { Line, Media } from "rn-placeholder";

const ComponentLoaded = () => <Text>I'm loaded!</Text>;

const MyComponent = () => {
  const [isReady, setReady] = useState(false);

  // your logic

  return (
    <Placeholder
      isReady={isReady}
      animation="fade"
      whenReadyRender={() => <Component />}
      renderLeft={() => <Media hasRadius />}
      renderRight={() => <Media />}
    >
      <Line width="70%" />
      <Line />
      <Line />
      <Line width="30%" />
    </Placeholder>
  );
};
```

When the value of `isReady` changes to something _truthy_, the `ComponentLoaded` will be rendered.
