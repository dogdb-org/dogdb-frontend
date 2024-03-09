'use client'
import Image from 'next/image'
import HeroImg from '@/assets/image/hero.jpg'
import SearchBar from '../ui/search-bar'

function Hero() {
    return (
        <section className='mx-4 my-8 w-10/12 text-black dark:text-white md:m-auto md:my-16'>
            <div className='flex flex-col justify-around pl-20 md:flex-row'>
                <Image
                    src={HeroImg}
                    alt='an image of dog running with joy.'
                    className='h-80 w-full rounded-img md:w-3/5'
                ></Image>
                <div className='flex flex-col items-center p-4 md:items-start md:p-8 lg:w-5/12'>
                    <h1 className='font-logo text-3xl  font-bold leading-10 md:text-5xl md:leading-tight'>
                        Find your perfect dog breed.
                    </h1>
                    <p className='font-sans text-lg font-medium leading-8 md:leading-10'>
                        Discover the ideal companion for your lifestyle.
                    </p>
                    <SearchBar />
                </div>
            </div>
        </section>
    )
}

export default Hero
