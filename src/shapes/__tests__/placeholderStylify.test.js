import React from 'react'
import { View } from 'react-native'
import renderer from 'react-test-renderer'

import { stylify } from '../stylify'

describe('stylify', () => {
  let computeStyle
  let Component

  beforeEach(() => {
    computeStyle = () => ({ backgroundColor: 'red' })
    Component = props => <View {...props} />
  })

  it('should inject the passed style merged with the computed ones', () => {
    const StyledComponent = stylify(computeStyle)(Component)
    const wrapper = renderer.create(<StyledComponent style={{ marginLeft: 100 }} />)

    expect(wrapper.root.findByType(Component).props.style).toEqual({
      marginLeft: 100,
      backgroundColor: 'red',
    })
  })
})
