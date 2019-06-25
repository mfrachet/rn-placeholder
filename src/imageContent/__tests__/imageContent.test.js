import React from 'react'
import renderer from 'react-test-renderer'

import { ImageContent } from '../imageContent'
import { Media } from '../../shapes'

describe('ImageContent', () => {
  let props

  const getWrapper = () => renderer.create(<ImageContent {...props} />)

  beforeEach(() => {
    props = {
      position: 'left',
      size: 50,
      hasRadius: true,
      animation: 'fade',
      lineNumber: 8,
      textSize: 13,
      color: '#ff0000',
      width: '99%',
      lastLineWidth: '50%',
      firstLineWidth: '30%',
    }
  })

  describe('render', () => {
    it('should match snapshot', () => {
      expect(getWrapper()).toMatchSnapshot()
    })
  })

  describe('logic', () => {
    it('should render a null component on the left side', () => {
      props.position = null
      const instance = getWrapper().getInstance()

      expect(instance.renderLeft()).toBe(null)
    })

    it('should render a Media component on the left side', () => {
      const instance = getWrapper().getInstance()

      expect(instance.renderLeft()).toEqual(<Media hasRadius />)
    })

    it('should render a null component on the right side', () => {
      const instance = getWrapper().getInstance()

      expect(instance.renderRight()).toBe(null)
    })

    it('should render a Media component on the right side', () => {
      props.position = 'right'
      const instance = getWrapper().getInstance()

      expect(instance.renderRight()).toEqual(<Media hasRadius />)
    })
  })
})
