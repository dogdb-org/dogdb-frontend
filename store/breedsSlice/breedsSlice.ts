import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import useDogDirectory from '@/hooks/useDogDirectory'
import { DogBreed } from '@/types/Breeds'
import breedsData from '@/lib/utils/data/breeds.json'

interface BreedsState {
    breeds: DogBreed[]
}

const initialState: BreedsState = {
    breeds: breedsData.breeds,
}

export const breedsSlice = createSlice({
    name: 'breeds',
    initialState,
    reducers: {},
})

export const {} = breedsSlice.actions

export const selectBreeds = (state: RootState) => state.breeds.breeds

export default breedsSlice.reducer
