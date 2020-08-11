import 'jsdom-global/register'
import * as React from 'react'
import Main from '../Main'
import { configure, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('Component', () => {
    it('renders the inner Counter', () => {
        let date = new Date()
        const wrapper = mount(<Main date={date} />)
        expect(wrapper.find('.calendar-main').length).toEqual(1)
    })
})
