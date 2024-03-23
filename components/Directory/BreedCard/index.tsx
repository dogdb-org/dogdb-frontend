'use client'

import Image from 'next/image'
import { FC } from 'react'

interface BreedCardProps {
    breedName: string
    breedImages: string[]
    breedShortDescription: string
}

const BreedCard: FC<BreedCardProps> = ({
    breedName,
    breedImages,
    breedShortDescription,
}) => {
    return (
        <article className='mb-4 rounded-lg text-secondary-body'>
            <Image
                src={`/images/breeds/${breedImages[0]}.jpg`}
                alt={breedName}
                width={800}
                height={400}
                className='rounded-btn shadow'
                unoptimized={true}
            />
            <h2 className='text-md mb-2 mt-2 font-semibold'>{breedName}</h2>
            <p className='text-sm'>{breedShortDescription}</p>
        </article>
    )
}

export default BreedCard
