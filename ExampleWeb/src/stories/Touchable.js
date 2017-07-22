import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { Text } from 'react-native';
import { Touchable } from '../components/Touchable';

storiesOf('Touchable', module)
.add('with Text', () => (
  <Touchable onPress={ action("Can't touch this?") }>
    <Text style={{ color: '#FFF' }}>SUBMIT</Text>
  </Touchable>
))
.add('with no children', () => (
  <Touchable />
));
