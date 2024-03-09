'use client'
import Image from 'next/image'
import HeroImg from '@/assets/image/hero.jpg'
import { IoSearchOutline } from "react-icons/io5";
import { Button } from '../ui/button'
function Hero() {
    return (
        <section className='bg-gray-300 mx-48 my-12'>
            <div className='flex justify-around'>
            <Image src={HeroImg} alt='an image of dog running with joy.' className='rounded-img w-3/6 h-72'></Image>
            <div className='px-8'>
                <h1 className='font-main text-black text-5xl'>Find your perfect dog breed.</h1>
                <p className='font-sans text-black'>Discover the ideal companion for your lifestyle.</p>
                <div className='flex bg-input w-fit rounded-btn'>
                    <IoSearchOutline className=''/>
                    <input type='text' placeholder='Search 198 dog breeds' className='bg-input'></input>
                    <Button  variant='outline' className=' rounded-full bg-primary'>Search</Button>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Hero
