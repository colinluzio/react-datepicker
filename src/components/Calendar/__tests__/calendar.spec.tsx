import 'jsdom-global/register'
import * as React from 'react'
import Main from '../Main'
import Header from '../Header'
import { configure, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('Main Component', () => {
    it('renders the main div', () => {
        let date = new Date()
        const wrapper = mount(<Main date={date} />)
        expect(wrapper.find('.calendar-main').length).toEqual(1)
    })
})

describe('Header Component', () => {
    it('renders the header', () => {
        let date = new Date('08-20-20')
        const wrapper = mount(<Header date={date} />)
        expect(wrapper.find('.title').text()).toBe('AUGUST')
    })
})
