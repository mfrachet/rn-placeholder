import connect from './placeholderContainer';
import Paragraph from './paragraph/paragraph';
import Media from './media/media';
import Line from './line/line';
import ImageContent from './imageContent/imageContent';
import MultiWords from './multiWords/multiWords';
import Box from './box/box';

import stylify from './placeholderStylify';
import computeStyleLine from './line/line.style';
import computeStyleMedia from './media/media.style';

const StyledLine = stylify(Line, computeStyleLine);
const StyledMedia = stylify(Media, computeStyleMedia);

/**
 * Export the placeholder
 */
export default {
  ImageContent: connect(ImageContent),
  Paragraph: connect(Paragraph),
  Media: connect(StyledMedia),
  Line: connect(StyledLine),
  MultiWords: connect(MultiWords),
  Box: connect(Box),
  connect,
};
