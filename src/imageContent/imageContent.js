import React from "react";
import PropTypes from "prop-types";
import Paragraph from "../paragraph/paragraph";
import { Media } from "../components";
import Placeholder from "../placeholder/placeholder";

/**
 * Create a new Image content
 * @param position Set the image position
 * @param size Media size
 * @param hasRadius Does the media contains radius ?
 * @param animate Animation to do
 * @param lineNumber The number of line to display
 * @param textSize The line text size
 * @param color The media / line color
 * @param width The global lines width
 * @param lastLineWidth The last line width
 * @param firstLineWidth the first line width
 */
function ImageContent({
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
}) {
  return (
    <Placeholder
      {...props}
      renderLeft={mediaProps =>
        position === "left" && <Media hasRadius={hasRadius} {...mediaProps} />
      }
      renderRight={mediaProps =>
        position === "right" && <Media hasRadius={hasRadius} {...mediaProps} />
      }
    >
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
}

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
  firstLineWidth: PropTypes.string
};

ImageContent.defaultProps = {
  position: "left",
  size: 40,
  hasRadius: false,
  animate: null,
  textSize: 12,
  color: "#efefef",
  width: "100%",
  lastLineWidth: "100%",
  firstLineWidth: "100%"
};

export default ImageContent;
