'use client'

import Image from 'next/image'
import Logo from '@/assets/image/logo-light.svg'
import NavLink from './NavLinks'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { navLinks } from '@/lib/utils/constant'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { ModeToggle } from '../ui/modeToggle'
import { MenuIcon, UserIcon } from 'lucide-react'
import { FaArrowRightLong } from 'react-icons/fa6'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import React from 'react'

function Header() {
    const isLoggedIn = false

    return (
        <header className='sticky inset-0 inset-y-0 right-0 z-10 w-full border-b bg-background px-4 py-3 text-secondary-body dark:text-white md:px-12'>
            <nav className='flex items-center justify-between'>
                <Link href='/'>
                    <div className='flex items-center justify-between space-x-3'>
                        <Image
                            src={Logo}
                            alt='an image of a dog in an orange color'
                            width={40}
                            height={40}
                            priority
                        />
                        <h1 className='font-logo text-xl font-bold'>dogdb</h1>
                    </div>
                </Link>
                <div className=' flex flex-row gap-8'>
                    <div className='hidden md:flex'>
                        <ul className='flex gap-[1.2rem] font-main'>
                            {navLinks.map((navLink, index) => (
                                <li key={index}>
                                    <NavLink href={navLink.src}>
                                        {navLink.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <ModeToggle />
                    </div>

                    <div className='hidden cursor-pointer md:flex md:flex-row md:items-center md:gap-8'>
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button size='icon' variant='outline'>
                                        <UserIcon className='h-6 w-6' />
                                        <span className='sr-only'>
                                            Open user menu
                                        </span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>
                                        Your profile
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Link href='/account/profile'>
                                            Profile
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Settings
                                    </DropdownMenuItem>

                                    <DropdownMenuItem className=' text-red-500'>
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>

                {/* Mobile navigation */}
                <div className='cursor-pointer text-black dark:text-white md:hidden'>
                    <Sheet>
                        <SheetTrigger asChild>
                            <MenuIcon />
                        </SheetTrigger>
                        <SheetContent
                            side='right'
                            className='text-black dark:text-white'
                        >
                            <div>
                                <ModeToggle />
                            </div>
                            <div className='top-2'>
                                <Avatar>
                                    <AvatarImage
                                        className='h-10 w-10 rounded-full'
                                        src='https://pbs.twimg.com/profile_images/1754602039311478784/EmA-O4v4_400x400.jpg'
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>

                            <hr className='mt-6 w-full flex-grow' />

                            <div className='mt-8 flex flex-col gap-6'>
                                <div className='flex'>
                                    <ul className='-mx-2 flex flex-col gap-[1.2rem] font-main'>
                                        {navLinks.map((navLink, index) => (
                                            <li key={index}>
                                                <NavLink href={navLink.src}>
                                                    {navLink.title}
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
