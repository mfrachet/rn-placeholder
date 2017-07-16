[![Build Status](https://travis-ci.org/mfrachet/rn-placeholder.svg?branch=master)](https://travis-ci.org/mfrachet/rn-placeholder)
[![Coverage Status](https://coveralls.io/repos/github/mfrachet/rn-placeholder/badge.svg?branch=master)](https://coveralls.io/github/mfrachet/rn-placeholder?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



Display some placeholder stuff before rendering your text or media content in React Native.

------
<p align="center">
<img height="290" src="https://img4.hostingpics.net/pics/221859android.gif" />
<img height="290" src="https://img4.hostingpics.net/pics/197702shineanimation.gif" />
<img height="290" src="https://img4.hostingpics.net/pics/482281tabletRecord.gif" />
</p>

------

# Content

- <a href="#usage">How to use it ?</a>
- [Components available](./API.md)
- [Creating a custom component](./API.md#custom)
- [Using default animations](./ANIMATIONS.md#default)
- [Using a custom animation](./ANIMATIONS.md#custom)
- [Animation API](./ANIMATIONS.md) <span style="color:red">(deprecated in >=v1.0.0)</span>
- [Examples from React Native and Expo](#examples)

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

When the value of `this.state.isReady` changes to something *existing*, the `<Text>` component will be rendered

<h1 name="#examples">See examples</h1>

Get `rn-placeholder` on your computer by cloning this repo :

```
$ git clone https://github.com/mfrachet/rn-placeholder
$ cd rn-placeholder
```

## Usage with Expo

#### Using the Expo projects tool

If you're familliar with Expo, you can take a look at the [rn-placeholder-demo](https://expo.io/@mfrachet/rn-placeholder-demo) app.

You can also scan the following QR using [Expo app](https://expo.io/) :

<img src="https://img4.hostingpics.net/pics/589414Capturedecran20170716a122129.png" width="200"/>

#### Expo XDE

If you're currently using [Expo XDE](https://github.com/expo/xde), simply open `./ExampleExpo` inside of it, and share your project as usual.

#### create-react-native-app

If you're currently using [`create-react-native-app`](https://facebook.github.io/react-native/docs/getting-started.html#getting-started)

```
$ cd ExampleExpo
$ npm start
```

And then scan the QR inside of the [Expo app](https://expo.io/)

## Usage with react-native-cli

If you're currently using [`react-native-cli`](https://facebook.github.io/react-native/docs/getting-started.html#the-react-native-cli), inside of `rn-placeholder` root folder :

```
$ cd Example
$ react-native run-ios
$ react-native run-android
```
