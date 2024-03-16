import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './testsSlice/testsSlice'
import { breedsSlice } from './breedsSlice/breedsSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            tests: counterSlice.reducer,
            breeds: breedsSlice.reducer,
        },
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
