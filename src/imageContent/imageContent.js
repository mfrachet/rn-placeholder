import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../paragraph/paragraph';
import { Media } from '../shapes';
import Placeholder from '../placeholder/placeholder';

const ImageContent = ({
  position,
  size,
  hasRadius,
  lineNumber,
  textSize,
  color,
  width,
  lastLineWidth,
  firstLineWidth,
  ...props
}) => {
  const LeftComponent = mediaProps => position === 'left' && <Media hasRadius={hasRadius} {...mediaProps} />;
  const RightComponent = mediaProps => position === 'right' && <Media hasRadius={hasRadius} {...mediaProps} />;

  return (
    <Placeholder {...props} renderLeft={LeftComponent} renderRight={RightComponent}>
      <Paragraph
        lineNumber={lineNumber}
        textSize={textSize}
        color={color}
        width={width}
        lastLineWidth={lastLineWidth}
        firstLineWidth={firstLineWidth}
      />
    </Placeholder>
  );
};

ImageContent.propTypes = {
  position: PropTypes.string,
  size: PropTypes.number,
  hasRadius: PropTypes.bool,
  animate: PropTypes.string,
  lineNumber: PropTypes.number.isRequired,
  textSize: PropTypes.number,
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
  color: '#efefef',
  width: '100%',
  lastLineWidth: '100%',
  firstLineWidth: '100%',
};

export default ImageContent;
