import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Card from './Card'

describe('Card component', () => {
    test('render with specific class', () => {
        const expectedClass = "latamer uxd senior"

        const { container } = render(<Card rolClass={expectedClass}/>)
        expect(container.firstChild).toMatchSnapshot(`<article class="${expectedClass}"`)
    }) 

    test('render the name', () => {
        const expectedName = "Andrea Escudero"

        const { container, getByText } = render(<Card name={expectedName}/>)
        expect(getByText(expectedName)).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot(`<h3>${expectedName}</h3>`)
    })

    test('render the role', () => {
        const expectedRol = "UX Designer Senior"

        const { container, getByText } = render(<Card rol={expectedRol} />)
        expect(getByText(expectedRol)).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot(`<h4>${expectedRol}</h4>`)
    })

    test('render the summary', () => {
        const expectedSummary = "My summary"

        const { container, getByText } = render(<Card summary={expectedSummary} />)
        expect(getByText(expectedSummary)).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot(`<p>${expectedSummary}</p>`)
    })
})


