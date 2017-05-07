import connect from './placeholderContainer';
import Paragraph from './paragraph/paragraph';
import Media from './media/media';
import Line from './line/line';
import ImageContent from './imageContent/imageContent';

/**
 * Export the placeholder
 */
export default {
  ImageContent: connect(ImageContent),
  Paragraph: connect(Paragraph),
  Media: connect(Media),
  Line: connect(Line),
  connect,
};


import { CustomPlaceholder } from '../somewhere';
import Placeholder from 'rn-placeholder';

const CustomPlaceholderContainer = Placeholder.connect(CustomPlaceholder);

/* ... */
return (
  <CustomPlaceholderContainer onReady={this.state.isReady} animate="fade">
    <Text>Hey guys !</Text>
  </CustomPlaceholderContainer>
)

/* ... */