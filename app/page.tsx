'use client'

import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

export default function Home() {
    const { setTheme } = useTheme()

    return (
        <main className='bg-primar flex min-h-screen justify-around p-24'>
            <h1>DogDB Frontend</h1>
            <Button onClick={() => setTheme('light')}>Light Mode</Button>
            <Button onClick={() => setTheme('dark')}>Dark Mode</Button>
        </main>
    )
}
