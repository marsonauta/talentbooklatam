import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactElement from './ContactElement'

describe('ContactElement component', () => {

    test('contain hiperlink', () => {
        const expectedHref = "http://some.reference"

        const { container } = render(<ContactElement href={expectedHref} />)
        expect(container).toMatchSnapshot(`<a href="${expectedHref}"`)
    })

    describe('when the type is cv', () => {
        const type = 'cv'
        let container = undefined

        beforeEach(() => {
            container = render(<ContactElement type={type} />).container
        })

        test('the LI class contain contact-cv as value', () => {
            expect(container).toMatchSnapshot(`<li class="contact-cv">`)
        })

        test('the Image class contain fas fa-passport as value', () => {
            expect(container).toMatchSnapshot(`<i className="fas fa-passport"`)
        })
        test('the message is Curriculum', () => {
            expect(container).toMatchSnapshot(`/>Currículum</a>`)
        })
    })

})
