import React from 'react';
import { shallow } from 'enzyme';
import Paragraph from '../paragraph';

describe('', () => {
  let props;

  const getWrapper = () => shallow(<Paragraph {...props} />);

  beforeEach(() => {
    props = {
      lineNumber: 10,
      textSize: 14,
      color: 'green',
      width: '80%',
      lastLineWidth: '40%',
      firstLineWidth: '30%',
    };
  });

  it('should match snapshot', () => {
    expect(getWrapper()).toMatchSnapshot();
  });
});
