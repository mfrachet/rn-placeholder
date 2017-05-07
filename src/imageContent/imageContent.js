import React, { PropTypes } from 'react';
import { View } from 'react-native';
import Media from './../media/media';
import Paragraph from './../paragraph/paragraph';

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
}) {
  return (
    <View style={{ flexDirection: 'row' }}>
      { position === 'left' &&
        <View style={{ marginRight: textSize, flexDirection: 'column', justifyContent: 'center' }}>
          <Media
            color={color}
            size={size}
            hasRadius={hasRadius}
          />
        </View>
      }
      <View style={{ flex: 1 }}>
        <Paragraph
          animate={animate}
          lineNumber={lineNumber}
          textSize={textSize}
          color={color}
          width={width}
          lastLineWidth={lastLineWidth}
          firstLineWidth={firstLineWidth}
          lineSpacing={lineSpacing}
        />
      </View>

      { position === 'right' &&
      <View style={{ marginLeft: textSize, flexDirection: 'column', justifyContent: 'center' }}>
        <Media
          color={color}
          size={size}
          hasRadius={hasRadius}
        />
      </View>
      }
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
};

export default ImageContent;
