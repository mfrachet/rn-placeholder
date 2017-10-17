
<h1 name="#see-examples">Examples</h1>


## Using the Expo projects tool

If you're familliar with Expo, you can take a look at the [rn-placeholder-demo](https://expo.io/@mfrachet/rn-placeholder-demo) app.

You can also scan the following QR using [Expo app](https://expo.io/) :

<img src="https://img4.hostingpics.net/pics/589414Capturedecran20170716a122129.png" width="200"/>


## create-react-native-app


*Using Example folder while running React Native is quite difficult due to [react-native#637](https://github.com/facebook/react-native/issues/637) and [metro-bundler#1](https://github.com/facebook/metro-bundler/issues/1). Apologize for this weird step of moving the example folder...*

If you're currently using [`create-react-native-app`](https://facebook.github.io/react-native/docs/getting-started.html#getting-started) :

```
$ git clone https://github.com/mfrachet/rn-placeholder
$ cd rn-placeholder
$ mv ./Example ../ExampleRnPlaceholder
$ cd ../ExampleRnPlaceholder
$ npm install
$ npm start
```

And then scan the QR inside of the [Expo app](https://expo.io/) or run the following command :

```
$ npm run ios
```
