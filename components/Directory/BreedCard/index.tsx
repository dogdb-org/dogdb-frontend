import * as React from 'react'
import Image from 'next/image'
import styles from './BreedCard.module.css'

interface BreedCardProps {
    breedName: string
    breedImages: { url: string; alt: string }[]
    breedShortDescription: string
}

const BreedCard: React.FC<BreedCardProps> = ({
    breedName,
    breedImages,
    breedShortDescription,
}) => {
    return (
        <div className='mb-4 rounded-lg bg-orange-400 p-4 shadow-md'>
            <Image
                src={breedImages[0].url}
                alt={breedImages[0].alt}
                width={800}
                height={400}
                layout='responsive'
            />
            <h2 className='mb-2 mt-2 text-xl font-bold'>{breedName}</h2>
            <p className='text-base'>{breedShortDescription}</p>
        </div>
    )
}

export default BreedCard
