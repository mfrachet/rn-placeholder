import React, { PropTypes } from 'react';
import Placeholder from 'rn-placeholder';
import { View, Text, Image, StyleSheet } from 'react-primitives';

const DEFAULT_SIZE = 12;
const IMAGE_SIZE = 40;
const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 2,
    marginBottom: DEFAULT_SIZE,
    marginRight: DEFAULT_SIZE,
    marginLeft: DEFAULT_SIZE,
    borderColor: '#efefef',
    borderWidth: 1,
  },
  media: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    marginRight: DEFAULT_SIZE,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  username: {
    flex: 1,
    color: '#3F51B5',
    fontSize: 16,
  },
  date: {
    color: '#aaaaaa',
    fontSize: 12,
  },
  content: {
    marginTop: DEFAULT_SIZE,
    lineHeight: DEFAULT_SIZE * 2,
    color: '#444444',
  },
});

export default function Card({ image, username, content, isLoaded, date }) {
  const heightStyle = { height: 150 };
  return (
    <View style={[styles.card, !isLoaded && heightStyle]}>
      <Placeholder.ImageContent
        onReady={isLoaded}
        lineNumber={2}
        animate="shine"
        lastLineWidth="40%"
      >
        <View>
          <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.media} />
            <View>
              <Text style={styles.username}>{username}</Text>
              <Text style={styles.date}>{date}</Text>
            </View>
          </View>
          <Text style={styles.content}>{content}</Text>
        </View>
      </Placeholder.ImageContent>
    </View>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};
