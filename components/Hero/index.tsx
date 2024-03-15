import { Card, CardContent, CardHeader } from '@/components/ui/card'

import Image from 'next/image'
import HeroImg from '@/assets/image/hero.jpg'
import SearchBar from '../ui/search-bar'

function Hero() {
    return (
        <section className='mx-auto my-8 w-9/12 text-black dark:text-white md:m-auto md:my-16'>
            <Card className='mx-auto flex flex-col justify-around border-none shadow-none md:flex-row'>
                <Image
                    src={HeroImg}
                    alt='an image of dog running with joy.'
                    className='h-80 w-full rounded-img md:w-3/5'
                ></Image>
                <CardContent className='lg:w-5/12 flex flex-col items-center px-8 py-4 md:items-start md:p-8'>
                    <h1 className='font-main text-3xl font-bold leading-10 md:text-5xl md:leading-tight'>
                        Find your perfect dog breedd.
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
