import React from 'react'
import renderer from 'react-test-renderer'

import FocusTimer from './FocusTimer'

describe('FocusTimer component', () => {
    let wrapper

    describe('rendering', () => {
        beforeEach(() => {
            wrapper = renderer.create(<FocusTimer />).toJSON()
        })

        it('should render properly', () => {
            expect(wrapper.children.length).toBe(2)
        })
    })
})
