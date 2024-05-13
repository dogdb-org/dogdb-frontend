import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Hero from '../index'

const { expect, describe, it } = require('@jest/globals')

describe('Hero Component', () => {
    it('renders the hero image correctly', () => {
        const { getByAltText, getByText, getAllByText } = render(<Hero />)
        expect(
            getByAltText('an image of dog running with joy')
        ).toBeInTheDocument()
        expect(
            getByText('Discover the ideal companion for your lifestyle')
        ).toBeInTheDocument()
        // Find your perfect dog breed heading is wriiten 2 times. 1 for mobile screen the other one for desktop screen
        const breedHeading = getAllByText('Find your perfect dog breed')
        expect(breedHeading.length).toBe(2)
    })
})
