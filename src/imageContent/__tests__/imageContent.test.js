import React from 'react';
import { shallow } from 'enzyme';
import ImageContent from '../imageContent';

describe('ImageContent', () => {
  let props;

  const getWrapper = () => shallow(<ImageContent {...props} />);

  beforeEach(() => {
    props = {
      position: 'left',
      size: 50,
      hasRadius: true,
      animate: 'fade',
      lineNumber: 8,
      textSize: 13,
      color: '#ff0000',
      width: '99%',
      lastLineWidth: '50%',
      firstLineWidth: '30%',
    };
  });

  it('should match snapshot', () => {
    expect(getWrapper()).toMatchSnapshot();
  });

  it('should match snapshot with right element', () => {
    props.position = 'right';
    expect(getWrapper()).toMatchSnapshot();
  });

  it('should match snapshot with left element', () => {
    props.position = 'left';
    expect(getWrapper()).toMatchSnapshot();
  });
});
