import BreedCard from '../BreedCard'

const data = Array.from({ length: 20 }, (_, index) => <BreedCard key={index} />)

function BreedGrid() {
    return (
        <div className='flex max-w-full flex-wrap justify-center'>
            {data.map((item, index) => (
                <div
                    key={index}
                    className='w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/4'
                >
                    {item}
                </div>
            ))}
        </div>
    )
}

export default BreedGrid
