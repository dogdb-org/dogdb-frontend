'use client'

import Image from 'next/image'
import Logo from '@/assets/image/logo.png'
import NavLink from './NavLinks'
import { Button } from '../ui/button'
import { BellIcon, ChatBubbleIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { navLinks } from '@/lib/utils/constant'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { MenuIcon } from 'lucide-react'
import { FaArrowRightLong } from 'react-icons/fa6'

function Header() {
    return (
        <header className='sticky inset-0 inset-y-0 right-0 my-2 w-full border-b bg-background px-4 text-black dark:text-white md:px-12'>
            <nav className='flex items-center justify-between'>
                <div className='flex items-center justify-between gap-2 p-1.5'>
                    <Image
                        src={Logo}
                        alt='an image of a dog in an orange color'
                        width={48}
                        height={48}
                    />
                    <h1 className='font-logo text-2xl font-bold'>dogdb</h1>
                </div>
                <div className=' flex flex-row gap-8'>
                    <div className='hidden md:flex'>
                        <ul className='flex gap-[1.2rem] font-main'>
                            {navLinks.map((navLink, index) => (
                                <li key={index}>
                                    <NavLink href={navLink}>
                                        {navLink === '/'
                                            ? 'Home'
                                            : navLink
                                                  .split('/')[1]
                                                  .charAt(0)
                                                  .toUpperCase() +
                                              navLink.split('/')[1].slice(1)}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='hidden md:flex md:md:flex-row md:gap-8'>
                        <div className='flex flex-row gap-2'>
                            <Button
                                variant='outline'
                                className=' rounded-full bg-primary'
                            >
                                Login
                            </Button>
                            <Button
                                variant='outline'
                                className=' rounded-full bg-primary-foreground'
                            >
                                Sign up
                            </Button>
                        </div>
                        <div className=' flex flex-row gap-2'>
                            <Button
                                size='icon'
                                variant='outline'
                                className=' rounded-full bg-primary-foreground'
                            >
                                <BellIcon />
                            </Button>
                            <Button
                                size='icon'
                                variant='outline'
                                className=' rounded-full bg-primary-foreground'
                            >
                                <ChatBubbleIcon />
                            </Button>
                        </div>
                        <div>
                            <Avatar>
                                <AvatarImage
                                    className=' h-10 w-10 rounded-full'
                                    src='https://pbs.twimg.com/profile_images/1754602039311478784/EmA-O4v4_400x400.jpg'
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>

                {/* Mobile navigation */}
                <div className='text-black dark:text-white md:hidden'>
                    <Sheet>
                        <SheetTrigger asChild>
                            <MenuIcon />
                        </SheetTrigger>
                        <SheetContent
                            side='right'
                            className='text-black dark:text-white'
                        >
                            <div className='top-2'>
                                <Avatar>
                                    <AvatarImage
                                        className=' h-10 w-10 rounded-full'
                                        src='https://pbs.twimg.com/profile_images/1754602039311478784/EmA-O4v4_400x400.jpg'
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>

                            <hr className=' mt-6 w-full flex-grow' />

                            <div className=' mt-8 flex flex-col gap-6'>
                                <div className='flex'>
                                    <ul className='-mx-2 flex flex-col gap-[1.2rem] font-main'>
                                        {navLinks.map((navLink, index) => (
                                            <li key={index}>
                                                <NavLink href={navLink}>
                                                    {navLink === '/'
                                                        ? 'Home'
                                                        : navLink
                                                              .split('/')[1]
                                                              .charAt(0)
                                                              .toUpperCase() +
                                                          navLink
                                                              .split('/')[1]
                                                              .slice(1)}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <hr className=' w-full flex-grow' />

                                <div className='mt-[10px] flex justify-between gap-[8px]'>
                                    <div className='flex flex-row gap-[5px]'>
                                        <Button
                                            variant='link'
                                            className=' flex flex-row gap-2 text-lg'
                                        >
                                            Login
                                            <span>
                                                <FaArrowRightLong />
                                            </span>
                                        </Button>
                                    </div>

                                    <div className=' flex flex-row gap-4'>
                                        <Button
                                            size='icon'
                                            variant='outline'
                                            className=' rounded-full bg-primary-foreground'
                                        >
                                            <BellIcon />
                                        </Button>
                                        <Button
                                            size='icon'
                                            variant='outline'
                                            className=' rounded-full bg-primary-foreground'
                                        >
                                            <ChatBubbleIcon />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    )
}

export default Header
