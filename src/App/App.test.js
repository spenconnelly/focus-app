import React from 'react'
import renderer from 'react-test-renderer'

import { App } from './App'

jest.useFakeTimers();

describe('App component', () => {
    let wrapper

    describe('rendering', () => {
        beforeEach(() => {
            wrapper = renderer.create(<App />).toJSON()
        })

        it('should render properly', () => {
            expect(wrapper.children.length).toBe(1);
        })
    })
})
