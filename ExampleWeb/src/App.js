import React from "react";
import { View, StyleSheet } from "react-primitives";
import Appbar from "./components/Appbar";
import List from "./components/List";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    width: 800,
    margin: "auto"
  }
});

export default () => (
  <View style={styles.container}>
    <Appbar />
    <View style={styles.wrapper}>
      <List />
    </View>
  </View>
);
