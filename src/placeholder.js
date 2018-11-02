import connect from './placeholderContainer';
import Paragraph from './paragraph/paragraph';
import ImageContent from './imageContent/imageContent';
import MultiWords from './multiWords/multiWords';
import { Media, Line, Box } from './components';

/**
 * Export the placeholder
 */
export default {
  ImageContent: connect(ImageContent),
  Paragraph: connect(Paragraph),
  MultiWords: connect(MultiWords),
  Media,
  Line,
  Box,
  connect,
};
