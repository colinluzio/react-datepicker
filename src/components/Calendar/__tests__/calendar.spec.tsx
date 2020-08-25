import 'jsdom-global/register'
import * as React from 'react'
import Main from '../Main'
//import Header from '../Header'
import { createContainer } from './domManipulators'

describe('Main Component', () => {
    let render: any, container: any

    beforeEach(() => {
        ;({ render, container } = createContainer())
    })
    it('renders the main div', () => {
        let date = new Date()
        render(<Main date={date} selected={date} />)

        expect(container.querySelector('.calendar-main')).not.toBeNull()
    })
})

// describe('Header Component', () => {
//     it('renders the header', () => {
//         let date = new Date('08-20-20')
//         const wrapper = mount(<Header date={date} />)
//         expect(wrapper.find('.title').text()).toBe('AUGUST')
//     })
// })
