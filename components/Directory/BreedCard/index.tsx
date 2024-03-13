import * as React from 'react'
import Image from 'next/image'
import styles from './BreedCard.module.css'

interface BreedCardProps {
    breedName: string
    breedImages: { url: string; alt: string }[]
    breedShortDescription: string
}

const dummyProps: BreedCardProps = {
    breedName: "Golden Retriever",
    breedImages: [
      { url: "https://example.com/image1.jpg", alt: "Golden Retriever puppy" },
      { url: "https://example.com/image2.jpg", alt: "Golden Retriever playing fetch" },
    ],
    breedShortDescription: "Golden Retrievers are known for their friendly and intelligent nature. They are popular family dogs and are often used as service animals.",
  };

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
