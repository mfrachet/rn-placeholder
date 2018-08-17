# Installation

The module is [available on npm](https://www.npmjs.com/package/rn-placeholder).

To install it in your project, let's run:

```shell
$ npm install rn-placeholder --save
```

or

```shell
$ yarn add rn-placeholder
```

### In your code

Import the module and display a placeholder inside your component:

```jsx
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

The `onReady` props is available on every component. It manages the React element to display.

In this example, when the value of `this.state.isReady` will change to something _existing_, the `<Text>` component will be rendered instead of the `Placeholder.ImageContent`.
