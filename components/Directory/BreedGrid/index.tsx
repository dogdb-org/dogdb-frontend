import BreedCard from '../BreedCard'
import { dummyPropsArray } from './data'

function BreedGrid() {
    return (
        <div className='flex max-w-full flex-wrap justify-center'>
            {dummyPropsArray.map((props, index) => (
                <div
                    key={index}
                    className='sm:w-1/2 lg:w-1/4 w-full p-4 md:w-1/3'
                >
                    <BreedCard {...props} />
                </div>
            ))}
        </div>
    )
}

export default BreedGrid
