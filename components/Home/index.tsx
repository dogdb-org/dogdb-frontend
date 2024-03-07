'use client'
import React from 'react'
import { decrement, increment } from '@/store/testsSlice/testsSlice'
import { Button } from '@/components/ui/button'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useTheme } from 'next-themes'

const HomePage = () => {
    const { setTheme } = useTheme()
    const state = useAppSelector((state) => state.tests)
    const dispatch = useAppDispatch()
    return (
        <>
            <div className='flex justify-center gap-8'>
                <h1 className='text-black dark:text-white'>DogDB Frontend</h1>
                <Button onClick={() => setTheme('light')}>Light Mode</Button>
                <Button onClick={() => setTheme('dark')}>Dark Mode</Button>
            </div>
            <div className='mt-4 flex justify-center gap-8'>
                <p className='text-black dark:text-white'>
                    Counter: {state.value}
                </p>
                <Button onClick={() => dispatch(increment())}>Increment</Button>
                <Button onClick={() => dispatch(decrement())}>Decrement</Button>
            </div>
        </>
    )
}

export default HomePage
