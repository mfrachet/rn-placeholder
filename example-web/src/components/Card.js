import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  card: {
    borderRadius: 3,
    marginTop: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#dddddd",
    marginBottom: 12
  }
});

export const Card = props => <View style={styles.card} {...props}></View>;
