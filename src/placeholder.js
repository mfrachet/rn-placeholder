import connect from './placeholderContainer';
import Paragraph from './paragraph/paragraph';
import Media from './media/media';
import Line from './line/line';
import ImageContent from './imageContent/imageContent';
import MultiWords from './multiWords/multiWords';
import Box from './box/box';

/**
 * Export the placeholder
 */
export default {
  ImageContent: connect(ImageContent),
  Paragraph: connect(Paragraph),
  Media: connect(Media),
  Line: connect(Line),
  MultiWords: connect(MultiWords),
  Box: connect(Box),
  connect,
};
