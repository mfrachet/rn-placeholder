import React from 'react'
import renderer from 'react-test-renderer'

import { Paragraph } from '../paragraph'

describe('Paragraph', () => {
  let props

  const getWrapper = () => renderer.create(<Paragraph {...props} />)

  beforeEach(() => {
    props = {
      lineNumber: 10,
      textSize: 14,
      color: 'green',
      width: '80%',
      lastLineWidth: '40%',
      firstLineWidth: '30%',
    }
  })

  it('should match snapshot', () => {
    expect(getWrapper()).toMatchSnapshot()
  })

  it('should have returned the children', () => {
    props.children = 'Children string'
    const instance = getWrapper().getInstance()

    expect(instance.handleReadyRender()).toBe('Children string')
  })
})
