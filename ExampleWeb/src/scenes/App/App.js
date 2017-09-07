/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-primitives';
import Appbar from '../../components/Appbar';
import List from '../../components/List';
import Placeholder from 'rn-placeholder';

export default class App extends Component {
  constructor() {
    super();
    this._handlePress = this._handlePress.bind(this);
  }

  _handlePress() {
    console.log("Can't touched this?");
  }

  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <View style={styles.wrapper}>
          <List />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    width: 800,
    margin: 'auto',
  }
});
