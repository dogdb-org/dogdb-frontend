'use client'
import Image from 'next/image'
import HeroImg from '@/assets/image/hero.jpg'
import SearchBar from '../ui/search-bar'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

function Hero() {
    return (
        <section className='mx-4 my-8 w-10/12 text-black dark:text-white md:m-auto md:my-16'>
            <Card className='mx-auto flex flex-col justify-around border-none shadow-none md:flex-row'>
                {/* <CardHeader > */}
                <Image
                    src={HeroImg}
                    alt='an image of dog running with joy.'
                    className='h-80 w-full rounded-img md:w-3/5'
                ></Image>
                {/* </CardHeader> */}
                <CardContent className='lg:w-5/12 flex flex-col items-center p-4 md:items-start md:p-8'>
                    <h1 className='font-main text-3xl font-bold leading-10 md:text-5xl md:leading-tight'>
                        Find your perfect dog breed.
                    </h1>
                    <p className='font-sans text-lg leading-8 md:leading-10'>
                        Discover the ideal companion for your lifestyle.
                    </p>
                    <SearchBar />
                </CardContent>
            </Card>
        </section>
    )
}

export default Hero
