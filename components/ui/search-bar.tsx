import { IoSearchOutline } from 'react-icons/io5'
import { Button } from '../ui/button'

function SearchBar() {
    return (
        <div className='flex w-full items-center rounded-input bg-input px-2 py-2'>
            <IoSearchOutline className='mx-2 h-8 w-8 text-secondary-article' />
            <input
                type='text'
                placeholder='Search 198 dog breeds'
                className='w-full bg-input text-sm text-secondary-article placeholder-secondary-article outline-0'
            />
            <Button
                variant='secondary'
                className='rounded-full bg-primary py-2.5 text-secondary-body md:ml-auto'
            >
                Search
            </Button>
        </div>
    )
}

export default SearchBar
