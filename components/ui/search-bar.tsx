import { IoSearchOutline } from 'react-icons/io5'
import { Button } from '../ui/button'
function SearchBar() {
    return (
        <div className='mx-4 mt-4 flex h-12 w-min items-center rounded-btn bg-input px-2 md:mx-0 md:h-14'>
            <IoSearchOutline className='mx-2 h-4 w-4 text-orange-800' />
            <input
                type='text'
                placeholder='Search 198 dog breeds'
                className='mx-2 bg-input text-lg text-orange-800 placeholder-orange-800 outline-0'
            ></input>
            <Button
                variant='outline'
                className='h-10 rounded-full bg-primary text-black'
            >
              Search
            </Button>
        </div>
    )
}

export default SearchBar
