/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Placeholder from 'rn-placeholder';
import CustomPlacehoder from './customPlaceholder';

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginLeft: 20,
    marginRight: 20,
  },
  block: {
    marginTop: 50,
  },
});

export default class Example extends Component {
  componentWillMount() {
    this.setState({
      isReadyImageContent: false,
      isReadyParagraph: false,
      isReadyLine: false,
      isReadyMedia: false,
      isCustomReady: false,
    });
    setTimeout(() => {
      this.setState({ isReadyImageContent: true });
    }, 2000); // Display ImageContent after 2s
    setTimeout(() => this.setState({ isReadyParagraph: true }), 3000); // Display Paragraph after 3s
    setTimeout(() => this.setState({ isReadyLine: true }), 4000); // Display Line after 4s
    setTimeout(() => this.setState({ isReadyMedia: true }), 5000); // Display ImageContent after 5s
    setTimeout(() => this.setState({ isCustomReady: true }), 6000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Placeholder.ImageContent
          lineNumber={3}
          onReady={this.state.isReadyImageContent}
          animate="fade"
        >
          <Text>Image content loaded</Text>
        </Placeholder.ImageContent>

        <View style={styles.block}>
          <Placeholder.Paragraph
            lineNumber={3}
            onReady={this.state.isReadyParagraph}
            color="#ff0000"
          >
            <Text>Paragraph loaded</Text>
          </Placeholder.Paragraph>
        </View>

        <View style={styles.block}>
          <Placeholder.Line color="#ffff00" onReady={this.state.isReadyLine}>
            <Text>Line loaded</Text>
          </Placeholder.Line>
        </View>

        <View style={styles.block}>
          <Placeholder.Media onReady={this.state.isReadyMedia} animate="fade">
            <Text>Media loaded</Text>
          </Placeholder.Media>
        </View>

        <View style={styles.block}>
          <CustomPlacehoder onReady={this.state.isCustomReady} animate="fade" bgColor="#00ff00">
            <Text>Custom component loaded</Text>
          </CustomPlacehoder>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('Example', () => Example);
