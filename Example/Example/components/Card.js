import React, { PropTypes } from 'react';
import Placeholder from 'rn-placeholder';
import { View, Text, Image, StyleSheet } from 'react-native';

const DEFAULT_SIZE = 12;
const IMAGE_SIZE = 40;
const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3,
    },
    marginBottom: DEFAULT_SIZE,
    marginRight: DEFAULT_SIZE,
    marginLeft: DEFAULT_SIZE,
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

const words = [
  {
    width: '20%',
  },
  {
    width: '40%',
  },
  {
    width: '40%',
  },
];

export default function Card({ image, username, content, isLoaded, date }) {
  const heightStyle = { height: 150 };
  return (
    <View style={[styles.card, !isLoaded && heightStyle]}>
      <Placeholder.MultiWords onReady={isLoaded} words={words} animate="fade">
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
      </Placeholder.MultiWords>
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
