import BreedCard from '../BreedCard'
import { dummyPropsArray } from './data'


function BreedGrid() {
    return (
        <div className='flex max-w-full flex-wrap justify-center'>
      {dummyPropsArray.map((props, index) => (
        <div key={index} className='w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/4'>
          <BreedCard {...props} /> 
        </div>
      ))}
    </div>
    )
}

export default BreedGrid
