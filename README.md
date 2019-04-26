[![Build Status](https://travis-ci.org/mfrachet/rn-placeholder.svg?branch=master)](https://travis-ci.org/mfrachet/rn-placeholder)
[![Coverage Status](https://coveralls.io/repos/github/mfrachet/rn-placeholder/badge.svg?branch=master)](https://coveralls.io/github/mfrachet/rn-placeholder?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Display some placeholder stuff before rendering your text or media content in React Native.

Fully compatible with [Expo](https://expo.io/) and [react-native-web](https://github.com/necolas/react-native-web).

---

<p align="center">
<img height="270" src="./book/placeholder.gif" />
</p>

---

# Content

- <a href="#usage">How to use it ?</a>
- [Components available](./docs/COMPONENTS.md)
- [Creating a custom component](./docs/CUSTOM_COMPONENT.md)
- [Using default animations](./docs/ANIMATIONS.md#default)
- [Using a custom animation](./ANIMATIONS.md#custom)

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
      whenReadyRender={ComponentLoaded}
      renderLeft={mediaProps => <Media hasRadius {...mediaProps} />}
      renderLeft={mediaProps => <Media {...mediaProps} />}
    >
      <Line width="70%" />
      <Line />
      <Line />
      <Line width="30%" />
    </Placeholder>
  );
};
```

When the value of `this.state.isReady` changes to something _existing_, the `ComponentLoaded` component will be rendered
