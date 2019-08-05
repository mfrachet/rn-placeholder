import React from "react";
import Prism from "prismjs";
import { StyleSheet, View } from "react-native";

export const Code = ({ code }) => {
  const html = Prism.highlight(code, Prism.languages.html, "html");

  return (
    <View style={styles.code}>
      <pre className={styles.code}>
        <code dangerouslySetInnerHTML={{ __html: html }}></code>
      </pre>
    </View>
  );
};

const styles = StyleSheet.create({
  code: {
    backgroundColor: "#272727",
    padding: 10,
    borderRadius: 3
  }
});
