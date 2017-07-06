import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import Appbar from './components/Appbar';
import List from './components/List';

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    backgroundColor: '#efefef',
  },
});

export default function Example() {
  return (
    <View style={{ flex: 1 }}>
      <Appbar />
      <View style={styles.container}>
        <List />
      </View>
    </View>
  );
}

AppRegistry.registerComponent('Example', () => Example);
