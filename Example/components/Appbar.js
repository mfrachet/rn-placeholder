import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: '#3F51B5',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
  },
});

export default function Appbar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rn Placeholder</Text>
    </View>
  );
}
