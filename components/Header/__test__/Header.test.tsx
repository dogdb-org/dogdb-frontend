import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Header from '../Header'
import { useRouter } from 'next/navigation'

const { expect, describe, it } = require('@jest/globals')

describe('Header Component', () => {
    it('renders logo and title correctly', () => {
        const { getByAltText, getByText } = render(<Header />)
        expect(
            getByAltText('an image of a dog in an orange color')
        ).toBeInTheDocument()
        expect(getByText('dogdb')).toBeInTheDocument()
    })

    it('renders navigation links correctly', () => {
        const { getByText } = render(<Header />)
        expect(getByText('Home')).toBeInTheDocument()
        expect(getByText('Breeds')).toBeInTheDocument()
        expect(getByText('About')).toBeInTheDocument()
        expect(getByText('My Dogs')).toBeInTheDocument()
        expect(getByText('Donate')).toBeInTheDocument()
    })
})
