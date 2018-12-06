import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Paragraph from '../paragraph/paragraph';
import { Media } from '../components';

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  container: { flex: 1 },
});

const positionElement = (position, textSize, color, size, hasRadius) => (
  <View style={{ [position]: textSize, flexDirection: 'column', justifyContent: 'center' }}>
    <Media color={color} size={size} hasRadius={hasRadius} />
  </View>
);

/**
 * Create a new Image content
 * @param position Set the image position
 * @param size Media size
 * @param hasRadius Does the media contains radius ?
 * @param animate Animation to do
 * @param lineNumber The number of line to display
 * @param textSize The line text size
 * @param lineSpacing The line spacing distance
 * @param color The media / line color
 * @param width The global lines width
 * @param lastLineWidth The last line width
 * @param firstLineWidth the first line width
 */
function ImageContent({
  position,
  size,
  hasRadius,
  animate,
  lineNumber,
  textSize,
  lineSpacing,
  color,
  width,
  lastLineWidth,
  firstLineWidth,
  backgroundColor,
}) {
  return (
    <View style={(styles.row, { backgroundColor })}>
      {position === 'left' && positionElement('marginRight', textSize, color, size, hasRadius)}
      <Paragraph
        animate={animate}
        lineNumber={lineNumber}
        textSize={textSize}
        color={color}
        width={width}
        lastLineWidth={lastLineWidth}
        firstLineWidth={firstLineWidth}
        lineSpacing={lineSpacing}
        backgroundColor={backgroundColor}
        style={styles.container}
      />
      {position === 'right' && positionElement('marginLeft', textSize, color, size, hasRadius)}
    </View>
  );
}

ImageContent.propTypes = {
  position: PropTypes.string,
  size: PropTypes.number,
  hasRadius: PropTypes.bool,
  animate: PropTypes.string,
  lineNumber: PropTypes.number.isRequired,
  textSize: PropTypes.number,
  lineSpacing: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
  lastLineWidth: PropTypes.string,
  firstLineWidth: PropTypes.string,
  backgroundColor: PropTypes.string,
};

ImageContent.defaultProps = {
  position: 'left',
  size: 40,
  hasRadius: false,
  animate: null,
  textSize: 12,
  lineSpacing: 12,
  color: '#efefef',
  width: '100%',
  lastLineWidth: '100%',
  firstLineWidth: '100%',
  backgroundColor: '#FFFFFF',
};

export default ImageContent;
