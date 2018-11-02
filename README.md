[![Build Status](https://travis-ci.org/mfrachet/rn-placeholder.svg?branch=master)](https://travis-ci.org/mfrachet/rn-placeholder)
[![Coverage Status](https://coveralls.io/repos/github/mfrachet/rn-placeholder/badge.svg?branch=master)](https://coveralls.io/github/mfrachet/rn-placeholder?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Display some placeholder stuff before rendering your text or media content in React Native.

\_Fully compatible with [Expo](https://expo.io/) and [react-native-web](https://github.com/necolas/react-native-web).

_New documentation available [mfrachet.github.io/rn-placeholder](https://mfrachet.github.io/rn-placeholder/)_

---

<p align="center">
<img height="270" src="./book/placeholder.gif" />
</p>

---

# Content

- <a href="#usage">How to use it ?</a>
- [Components available](./API.md)
- [Creating a custom component](./API.md#custom)
- [Using default animations](./ANIMATIONS.md#default)
- [Using a custom animation](./ANIMATIONS.md#custom)

<h1 name="#usage">Usage</h1>

### Installation

```javascript
$ npm install rn-placeholder --save
```

### In your code

```javascript
import Placeholder from 'rn-placeholder';

/*...*/
render() {
    return (
      <View>
        <Placeholder.ImageContent
          size={60}
          animate="fade"
          lineNumber={4}
          lineSpacing={5}
          lastLineWidth="30%"
          onReady={this.state.isReady}
        >
          <Text>Placeholder has finished :D</Text>
        </Placeholder.ImageContent>
      </View>
    );
  }
/*...*/
```

When the value of `this.state.isReady` changes to something _existing_, the `<Text>` component will be rendered
