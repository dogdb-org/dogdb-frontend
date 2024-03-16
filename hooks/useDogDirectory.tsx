import breedData from '@/lib/utils/data/breeds.json'
import { DogBreed } from '@/types/Breeds'
import { useState } from 'react'
import { selectBreeds } from '@/store/breedsSlice/breedsSlice'
import { useAppSelector } from '@/store/hooks'

const useDogDirectory = () => {
    const breedData = useAppSelector((state) => state.breeds.breeds)

    const [dogBreeds, setDogBreeds] = useState<DogBreed[]>(breedData)

    const setNewDogBreeds = (dogBreeds: DogBreed[]) => {
        setDogBreeds(dogBreeds)
    }

    return {
        dogBreeds,
        setNewDogBreeds,
    }
}

export default useDogDirectory
