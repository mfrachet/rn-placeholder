import connect from './placeholderContainer';
import Paragraph from './paragraph/paragraph';
import ImageContent from './imageContent/imageContent';
import Line from './line/line';
import MultiWords from './multiWords/multiWords';
import Placeholder from './placeholder/placeholder';
import { Media, Box } from './components';

/**
 * Export the placeholder
 */
export default {
  Placeholder,
  ImageContent: connect(ImageContent),
  Paragraph: connect(Paragraph),
  MultiWords: connect(MultiWords),
  Media,
  Line,
  Box,
  connect,
};
