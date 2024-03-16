'use client'

import BreedCard from '../BreedCard'
import useDogDirectory from '../../../hooks/useDogDirectory'
import { nanoid } from '@reduxjs/toolkit'

function BreedGrid() {
    const { dogBreeds } = useDogDirectory()
    return (
        <div className='grid w-full grid-cols-2 gap-4 md:grid-cols-4'>
            {dogBreeds.map(
                ({ breedName, breedImages, breedShortDescription }) => (
                    <div key={nanoid()} className='w-full'>
                        <BreedCard
                            breedName={breedName}
                            breedImages={breedImages}
                            breedShortDescription={breedShortDescription}
                        />
                    </div>
                )
            )}
        </div>
    )
}

export default BreedGrid
