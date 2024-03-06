import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Home from '@/app/page'
import StoreProvider from '@/components/StoreProvider/StoreProvider'

describe('Home', () => {
    it('renders without crashing', () => {
        render(
            <StoreProvider>
                <Home />
            </StoreProvider>
        )
    })
})
