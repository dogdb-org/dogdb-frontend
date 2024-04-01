import SearchBar from '@/components/ui/search-bar'
import Link from 'next/link'
import errorImage from '@/assets/image/error_image.png'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className='mt-6 flex flex-col items-center justify-center gap-3 text-secondary-body dark:text-white'>
            <h2 className='text-xl font-bold'>WOOPSIE!,Page not Found</h2>
            <p className=' text-lg'>
                Return to
                <span className=' underline'>
                    <Link href='/'> Homepage</Link>
                </span>
            </p>
            <div className=''>
                <SearchBar />
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
