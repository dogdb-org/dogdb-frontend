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
        <div className='bg-orange-400 rounded-lg shadow-md p-4 mb-4'>
            <Image
                src={breedImages[0].url}
                alt={breedImages[0].alt}
                width={800}
                height={400}
                layout='responsive'
            />
            <h2 className='text-xl font-bold mb-2 mt-2'>{breedName}</h2>
            <p className='text-base'>{breedShortDescription}</p>
        </div>
    )
}

export default BreedCard
