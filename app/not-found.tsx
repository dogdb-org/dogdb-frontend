import SearchBar from '@/components/ui/search-bar'
import Link from 'next/link'
import errorImage from '@/assets/image/error_image.png'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className='mt-6 flex items-center justify-center gap-3 text-secondary-body dark:text-white max-md:flex-col'>
            <div className='flex flex-col items-center justify-center gap-5'>
                <h1 className='text-3xl font-bold'>WOOPSIE!</h1>
                <h3 className='text-lg font-semibold'>
                    Page you are looking for cannot be Found
                </h3>
                <p className=' text-lg'>
                    Go back to
                    <span className='ml-3 rounded-md bg-primary px-3 py-2 '>
                        <Link href='/'> Homepage</Link>
                    </span>
                </p>
                <div className=''>
                    <SearchBar />
                </div>
            </div>
            <Image
                src={errorImage}
                alt='error-image'
                unoptimized={true}
                className='h-80'
            />
        </div>
    )
}
