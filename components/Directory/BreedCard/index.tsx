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
        <div className={styles.breedCard}>
            <Image
                src={breedImages[0].url}
                alt={breedImages[0].alt}
                width={800}
                height={400}
                layout='responsive'
            />
            <h2>{breedName}</h2>
            <p>{breedShortDescription}</p>
        </div>
    )
}

export default BreedCard
