[![Build Status](https://travis-ci.org/mfrachet/rn-placeholder.svg?branch=master)](https://travis-ci.org/Skahrz/rn-placeholder)
[![Coverage Status](https://coveralls.io/repos/github/Skahrz/rn-placeholder/badge.svg?branch=master)](https://coveralls.io/github/Skahrz/rn-placeholder?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



Display some placeholder stuff before rendering your text or media content in React Native.

------
<p align="center">
<img height="290" src="https://img4.hostingpics.net/pics/221859android.gif" />
<img height="290" src="https://img4.hostingpics.net/pics/677705ios.gif" />
<img height="290" src="https://img4.hostingpics.net/pics/482281tabletRecord.gif" />
</p>

------

## Content

- <a href="#usage">How to use it ?</a>
- [Components available](./API.md)
- [Creating a custom component](./API.md#custom)
- [Animation API](./ANIMATIONS.md)
- [Using default animations](./ANIMATIONS.md#default)
- [Using a custom animation](./ANIMATIONS.md#custom)

<h2 name="#usage">Usage</h2>

### Installation
```
npm install rn-placeholder
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

When the value of `this.state.isReady` changes to something *existing*, the `<Text>` component will be rendered
