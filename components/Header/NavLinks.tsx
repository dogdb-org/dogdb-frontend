'use client'

import React from 'react'
import Link from 'next/link'
import {
    NavigationMenu,
    navigationMenuTriggerStyle,
} from '../ui/navigation-menu'
import {
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@radix-ui/react-navigation-menu'

type NavLinkProps = {
    href: string
    children: React.ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href={href} legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            {children}
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default NavLink
