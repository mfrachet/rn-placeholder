<<<<<<< HEAD
import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Line from "./../line/line";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  }
=======
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Line from './../line/line';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
>>>>>>> 494d5612e08562a56d57704413e0b5c252265397
});

function MultiWords({ words, textSize }) {
  const borderStyle = {
    borderRightWidth: textSize,
<<<<<<< HEAD
    borderRightColor: "transparent"
=======
    borderRightColor: 'transparent',
>>>>>>> 494d5612e08562a56d57704413e0b5c252265397
  };

  const lastIndex = words.length - 1;

  return (
    <View style={styles.container}>
      {words.map((word, index) => (
<<<<<<< HEAD
        <View
          key={index}
          style={[lastIndex !== index && borderStyle, { width: word.width }]}
        >
=======
        <View key={index} style={[lastIndex !== index && borderStyle, { width: word.width }]}>
>>>>>>> 494d5612e08562a56d57704413e0b5c252265397
          <Line textSize={textSize} color={word.color} />
        </View>
      ))}
    </View>
  );
}

MultiWords.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
<<<<<<< HEAD
      width: PropTypes.string.isRequired
    })
  ),
  textSize: PropTypes.number
=======
      width: PropTypes.string.isRequired,
    }),
  ),
  textSize: PropTypes.number,
>>>>>>> 494d5612e08562a56d57704413e0b5c252265397
};

MultiWords.defaultProps = {
  words: [],
<<<<<<< HEAD
  textSize: 12
=======
  textSize: 12,
>>>>>>> 494d5612e08562a56d57704413e0b5c252265397
};

export default MultiWords;
