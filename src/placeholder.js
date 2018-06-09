import { View } from 'react-native';
import connect from './placeholderContainer';
import Paragraph from './paragraph/paragraph';
import ImageContent from './imageContent/imageContent';
import MultiWords from './multiWords/multiWords';

import stylify from './placeholderStylify';
import computeStyleLine from './line/line.style';
import computeStyleMedia from './media/media.style';
import computeStyleBox from './box/box.style';

const compose = (f, g) => x => f(g(x));

/**
 * Export the placeholder
 */
export default {
  ImageContent: connect(ImageContent),
  Paragraph: connect(Paragraph),
  Media: compose(
    connect,
    stylify(computeStyleMedia),
  )(View),
  Line: compose(
    connect,
    stylify(computeStyleLine),
  )(View),
  MultiWords: connect(MultiWords),
  Box: compose(
    connect,
    stylify(computeStyleBox),
  )(View),
  connect,
};
