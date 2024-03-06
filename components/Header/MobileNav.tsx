'use client'
import {
    BellIcon,
    ChatBubbleIcon,
    Cross1Icon,
    HamburgerMenuIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'
import { useState } from 'react'
interface menu {
    id: number
    menuName: string
    link: string
}
function MobileNav() {
    const menus: menu[] = [
        {
            id: 1,
            menuName: 'Home',
            link: '/',
        },
        {
            id: 1,
            menuName: 'Breeds',
            link: '/breeds',
        },
        {
            id: 1,
            menuName: 'Quiz',
            link: '/quiz',
        },
        {
            id: 1,
            menuName: 'Adopt',
            link: '/adopt',
        },
        {
            id: 1,
            menuName: 'Donate',
            link: '/donate',
        },
    ]
    const [menu, setMenu] = useState(false)

    const openMenu = () => {
        setMenu(true)
    }

    const closeMenu = () => {
        setMenu(false)
    }
    return (
        <main className=' font-semibold md:hidden'>
            <HamburgerMenuIcon onClick={openMenu} className=' h-8 w-8' />
            {menu && (
                <div className='absolute right-0 top-0 flex h-[100vh] w-64  flex-col gap-y-6 bg-popover  p-4 text-black transition duration-300 ease-in dark:text-white'>
                    <Cross1Icon
                        onClick={closeMenu}
                        className=' ml-auto h-8 w-8'
                    />
                    <div className='space-y-3'>
                        {menus.map((menu) => (
                            <ul key={menu.id} className=''>
                                <li>
                                    <Link href={menu.link}>
                                        {menu.menuName}
                                    </Link>
                                </li>
                            </ul>
                        ))}
                    </div>
                    <div className=' space-x-2'>
                        <button className='rounded-full bg-primary px-4 py-2'>
                            Login
                        </button>
                        <button className='rounded-full  bg-primary-foreground px-4 py-2'>
                            Sign Up
                        </button>
                    </div>
                    <div className=' flex items-center gap-4'>
                        <div className=' rounded-full bg-primary-foreground p-4'>
                            <BellIcon />
                        </div>
                        <div className='rounded-full bg-primary-foreground p-4'>
                            <ChatBubbleIcon />
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}
export default MobileNav
