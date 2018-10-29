import { View } from 'react-native';
import connect from './placeholderContainer';
import stylify from './placeholderStylify';
import computeStyleLine from './line/line.style';
import computeStyleMedia from './media/media.style';
import computeStyleBox from './box/box.style';

const compose = (f, g) => x => f(g(x));

/**
 * Export shared elements
 */
const Media = compose(
  connect,
  stylify(computeStyleMedia),
)(View);

const Line = compose(
  connect,
  stylify(computeStyleLine),
)(View);

const Box = compose(
  connect,
  stylify(computeStyleBox),
)(View);

export { Media, Line, Box };
